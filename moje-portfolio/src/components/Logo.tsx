import { cn } from "@/lib/cn";

export default function Logo({
  showName = true,
  className,
}: {
  showName?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[linear-gradient(135deg,var(--blue),var(--violet))] font-display text-sm font-bold text-white shadow-[0_6px_22px_-6px_var(--violet)]">
        JL
      </span>
      {showName && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
          Kuba Lewandowski
        </span>
      )}
    </span>
  );
}
