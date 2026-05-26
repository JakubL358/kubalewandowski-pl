export const SITE = {
  name: "Kuba Lewandowski",
  initials: "JL",
  email: "kontakt@kubalewandowski.pl",
  phoneDisplay: "+48 661 846 796",
  whatsapp: "48661846796", // numer do wa.me (bez znaku + i spacji)
  linkedin: "https://www.linkedin.com/in/jakubcherskymarketing/",
  tagline: "Strony, które mają cel. I ktoś, kto ogarnia całą resztę.",
};

export const NAV = [
  { id: "o-mnie", label: "O mnie" },
  { id: "oferta", label: "Oferta" },
  { id: "portfolio", label: "Portfolio" },
  { id: "ekosystem", label: "Ekosystem" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export const WORK = [
  {
    name: "Chersky Marketing",
    url: "cherskymarketing.pl",
    href: "https://cherskymarketing.pl",
    image: "/work/chersky.webp",
  },
] as const;

export const BRANDS = [
  { name: "Chersky Marketing", file: "/brands/chersky.svg" },
  { name: "IML", file: "/brands/iml.svg" },
  { name: "Finergia", file: "/brands/finergia.svg" },
  { name: "Amka Finanse", file: "/brands/amka-finanse.svg" },
  { name: "Firmowe Finanse", file: "/brands/firmowe-finanse.svg" },
  { name: "Osobiste Finanse", file: "/brands/osobiste-finanse.svg" },
  { name: "Meble Potocki", file: "/brands/meble-potocki.svg" },
  { name: "Tygrafika", file: "/brands/tygrafika.svg" },
  { name: "X-Arrow", file: "/brands/x-arrow.svg" },
] as const;

export const PASSIONS = [
  {
    title: "Fotografia",
    desc: "Aparat i dron jeżdżą ze mną wszędzie. Łapię kadry z ziemi i z powietrza (i tak, na drona mam licencję), raz dla klienta, raz czysto dla siebie.",
    image: "/passions/dron.webp",
    alt: "Ujęcie z drona: Altare della Patria w Rzymie z lotu ptaka",
    wide: true,
  },
  {
    title: "Wycieczki",
    desc: "Najbardziej kręci mnie samo planowanie trasy, najlepiej autem. Mogę rozrysować Chorwację albo Szwajcarię, a i tak jakimś cudem zawsze ląduję we Włoszech.",
    image: "/passions/wycieczki.webp",
    alt: "Autostrada prowadząca w stronę gór",
    wide: false,
  },
  {
    title: "Motoryzacja",
    desc: "Wieczorami robię sobie drugi etat: mechanik, detailer i tuner w jednym, wszystko przy własnym aucie. Mało co cieszy mnie tak, jak efekty tej dłubaniny i wieczór nad moją „Hanką”.",
    image: "/passions/auto.webp",
    alt: "Honda Accord Type S w złotym świetle zachodu słońca",
    wide: false,
  },
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

export const PRICING = [
  {
    name: "Onepager AI + GitHub",
    tagline:
      "Lekka, szybka strona-wizytówka, która ładnie wygląda i realnie konwertuje.",
    price: "590",
    oldPrice: "790",
    featured: true,
    features: [
      "Indywidualny projekt, zero szablonu",
      "Build oparty o AI i GitHub: szybki, lekki, łatwy w zmianach",
      "Konfiguracja hostingu i wdrożenie na żywo",
      "Podpięcie domeny i certyfikat SSL",
      "Repozytorium na GitHubie, w pełni Twoje",
      "Optymalizacja pod Google i czas ładowania",
    ],
  },
  {
    name: "Google Workspace dla firmy",
    tagline:
      "Profesjonalne maile na Twojej domenie i cały Workspace, bez spamu i chaosu.",
    price: "390",
    oldPrice: "490",
    featured: false,
    features: [
      "Firmowe maile na Twojej domenie",
      "Konfiguracja Google Workspace",
      "Rekordy SPF, DKIM i DMARC, czyli koniec ze spamem",
      "Profesjonalna stopka dla firmy",
      "Migracja maili i kontaktów",
      "Onboarding zespołu, po ludzku",
      "Inne rozwiązania dopasowane do Twoich potrzeb",
    ],
  },
  {
    name: "Strona WordPress",
    tagline:
      "Pełnoprawna, rozbudowana strona zgodna z wytycznymi Google.",
    price: "990",
    oldPrice: "1390",
    featured: false,
    features: [
      "Wielopodstronowa strona na WordPress + Kadence",
      "Indywidualny projekt pod Twoją markę",
      "Zgodność z wytycznymi Google i optymalizacja SEO",
      "Hosting, domena i SSL skonfigurowane od A do Z",
      "Szkolenie z obsługi, jeśli chcesz prowadzić ją sam",
      "Wsparcie po wdrożeniu",
    ],
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
