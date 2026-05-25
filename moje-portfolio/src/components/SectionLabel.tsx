import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-fg-dim">
        <span className="text-violet-bright">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span>{children}</span>
      </div>
    </Reveal>
  );
}
