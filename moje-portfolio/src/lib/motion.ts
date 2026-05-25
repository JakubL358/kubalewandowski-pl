// Shared motion language — premium "expo-out" easing used across the site.
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
