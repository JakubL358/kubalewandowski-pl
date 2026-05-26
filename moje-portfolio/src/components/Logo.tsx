import { cn } from "@/lib/cn";
import Signet from "./Signet";

export default function Logo({
  showName = true,
  className,
}: {
  showName?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Signet className="h-8 w-8 drop-shadow-[0_4px_16px_rgba(157,92,255,0.35)]" />
      {showName && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
          Kuba Lewandowski
        </span>
      )}
    </span>
  );
}
