import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const ICONS: Record<string, ReactNode> = {
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.6 19.5a5.4 5.4 0 0 1 10.8 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6" />
      <path d="M16.8 14.3a5.4 5.4 0 0 1 3.6 5.2" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8.5h2.5L8 6.5h8l1.5 2H20a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="m6.3 6.3 3.4 3.4m4.6 4.6 3.4 3.4m0-11.4-3.4 3.4M9.7 14.3l-3.4 3.4" />
    </>
  ),
  "arrow-right": <path d="M5 12h13m-5-6 6 6-6 6" />,
  "arrow-down": <path d="M12 5v13m-6-5 6 6 6-6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m5 12 4.5 4.5L19 6.5" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2.2" />
      <path d="M5 15.5A2 2 0 0 1 4 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 1.5.7" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
      <path d="M9 8.8c.3 4 2.9 6.6 6.2 6.7.4 0 .8-.3.8-.7v-1c0-.4-.3-.7-.7-.7-.5 0-.9-.1-1.3-.2-.3-.1-.6 0-.8.2l-.5.5a6.3 6.3 0 0 1-2.3-2.3l.5-.5c.2-.2.3-.5.2-.8-.1-.4-.2-.8-.2-1.3 0-.4-.3-.7-.7-.7h-1c-.4 0-.7.3-.7.8z" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {ICONS[name] ?? null}
    </svg>
  );
}
