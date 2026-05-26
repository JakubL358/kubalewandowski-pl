"use client";

import { useEffect, useState } from "react";

// Kropka jest częścią pisanego ciągu → wpisuje się i kasuje razem ze słowem,
// a jej pozycja przesuwa się wraz z długością słowa.
const PHRASES = ["działać.", "konwertować.", "zarabiać."];

const TYPE = 85; // ms na znak przy pisaniu
const DEL = 45; // ms na znak przy kasowaniu
const HOLD = 1800; // pauza na pełnym słowie
const GAP = 400; // pauza po skasowaniu, przed kolejnym słowem

export default function Typewriter() {
  const [animated, setAnimated] = useState(false);
  const [text, setText] = useState(PHRASES[0]);

  useEffect(() => {
    // Szanuj preferencję ograniczonego ruchu — zostaw statyczne słowo.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setAnimated(true);

    let i = 0; // indeks frazy
    let sub = PHRASES[0].length; // długość widocznego fragmentu (start: pełna)
    let deleting = true; // zaczynamy od skasowania pierwszej frazy
    let timer: ReturnType<typeof setTimeout>;

    const loop = () => {
      if (deleting) {
        sub -= 1;
        setText(PHRASES[i].slice(0, sub));
        if (sub <= 0) {
          deleting = false;
          i = (i + 1) % PHRASES.length;
          timer = setTimeout(loop, GAP);
        } else {
          timer = setTimeout(loop, DEL);
        }
      } else {
        sub += 1;
        const p = PHRASES[i];
        setText(p.slice(0, sub));
        if (sub >= p.length) {
          deleting = true;
          timer = setTimeout(loop, HOLD);
        } else {
          timer = setTimeout(loop, TYPE + Math.random() * 50);
        }
      }
    };

    timer = setTimeout(loop, HOLD); // chwila na przeczytanie „działać."
    return () => clearTimeout(timer);
  }, []);

  // SSR / brak JS / reduced-motion: czyste, statyczne słowo z kropką.
  if (!animated) {
    return <span className="text-gradient">{PHRASES[0]}</span>;
  }

  return (
    <>
      <span className="sr-only">{PHRASES[0]}</span>
      <span aria-hidden="true" className="whitespace-nowrap text-gradient">
        {text}
        <span className="caret" />
      </span>
    </>
  );
}
