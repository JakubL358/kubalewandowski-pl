export const SITE = {
  name: "Kuba Lewandowski",
  initials: "JL",
  email: "kontakt@kubalewandowski.pl",
  phoneDisplay: "+48 661 846 796",
  whatsapp: "48661846796", // numer do wa.me (bez znaku + i spacji)
  tagline: "Strony, które mają cel. I ktoś, kto ogarnia całą resztę.",
};

export const NAV = [
  { id: "o-mnie", label: "O mnie" },
  { id: "oferta", label: "Oferta" },
  { id: "ekosystem", label: "Ekosystem" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export const VALUES = [
  {
    title: "Szczerość",
    desc: "Powiem Ci wprost, gdy coś przepala budżet. Nawet jeśli to dla mnie mniejsze zlecenie.",
  },
  {
    title: "Autentyczność",
    desc: "Nie szablon i nie AI-slop. Strona ma być spójna z Tobą, a nie z tysiącem innych.",
  },
  {
    title: "Funkcjonalność",
    desc: "Ładnie to za mało. Każdy element ma działać i mieć powód, żeby tam w ogóle być.",
  },
  {
    title: "Partnerstwo",
    desc: "Zdejmuję z Ciebie techniczny stres i zostaję na pokładzie. Gramy do jednej bramki.",
  },
];

export const ANTI = [
  "AI-slop",
  "Strony z szablonu",
  "Zrób i zapomnij",
  "Naciąganie budżetu",
  "Korpo-żargon",
];

export const SERVICES = [
  {
    icon: "layout",
    title: "Strona z celem",
    desc: "Nowoczesny onepager albo pełnoprawna strona na WordPress + Kadence. Nie szablon, tylko strona, która ma cel i realnie konwertuje.",
  },
  {
    icon: "server",
    title: "Domena i hosting",
    desc: "Dobieram i podpinam tak, żebyś nie przepłacał. Zero zgadywania, gdzie to kupić i jak skonfigurować.",
  },
  {
    icon: "mail",
    title: "Firmowe maile i Workspace",
    desc: "Koniec z adresem @gmail i mailami w spamie. Stawiam profesjonalne maile i cały Google Workspace, jeśli go potrzebujesz.",
  },
  {
    icon: "users",
    title: "Onboarding zespołu",
    desc: "Uczę Ciebie i Twój zespół, jak ogarniać stronę na co dzień. Cierpliwie, po ludzku, bez „kliknij tu i tam”.",
  },
  {
    icon: "camera",
    title: "Zasoby na stronę",
    desc: "Zdjęcia i nagrania, z aparatu albo z drona. Dopieszczamy to, co na stronie faktycznie widać.",
  },
  {
    icon: "lifebuoy",
    title: "Wsparcie i nadzór",
    desc: "Strona żyje dalej. Aktualizacje, rekomendacje, drobne zmiany. Żadnego „zrób i zapomnij”.",
  },
] as const;

export const COMPARE = {
  bad: [
    "Plik ze stroną i ciszę w słuchawce",
    "Szablon, który wygląda jak tysiąc innych",
    "Maile lądujące w spamie",
    "Stronę, której każdy boi się dotknąć",
    "Fakturę za wtyczki, których nie używasz",
  ],
  good: [
    "Spójny ekosystem, który ktoś realnie ogarnia",
    "Stronę skrojoną pod Twoją markę i jej cel",
    "Profesjonalne maile i Workspace, które działają",
    "Onboarding, po którym zostajesz z wiedzą, nie z zależnością",
    "Szczere doradztwo, żebyś nie przepalał budżetu",
  ],
};

export const PROCESS = [
  {
    title: "Rozmowa i audyt",
    desc: "Siadamy, oglądam co masz i mówię szczerze, co działa, a co leży. Bez owijania w bawełnę.",
  },
  {
    title: "Strategia",
    desc: "Ustalamy cel strony i co realnie jest Ci potrzebne. Nic na zapas, zero naciągania budżetu.",
  },
  {
    title: "Budowa ekosystemu",
    desc: "Strona, domena, hosting, maile. Spinam to wszystko w jedną, działającą całość.",
  },
  {
    title: "Onboarding",
    desc: "Pokazuję Tobie i zespołowi, jak to ogarniać. Zostajesz z wiedzą, a nie uzależniony ode mnie.",
  },
  {
    title: "Wsparcie i nadzór",
    desc: "Jestem dalej. Strona się rozwija, a ja podpowiadam kolejne sensowne kroki.",
  },
];
