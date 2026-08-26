import type { ReactNode } from "react";

export type Tone =
  | "good"
  | "warn"
  | "bad"
  | "info"
  | "amber"
  | "slate"
  | "gold"
  | "navy";

const toneStyles: Record<Tone, string> = {
  good: "bg-good-bg text-good",
  warn: "bg-warn-bg text-warn",
  bad: "bg-bad-bg text-bad",
  info: "bg-info-bg text-info",
  amber: "bg-amber-bg text-amber",
  slate: "bg-slate-bg text-slate",
  gold: "bg-gold-soft text-bronze",
  navy: "bg-navy text-gold",
};

export function Badge({
  tone = "slate",
  children,
  className = "",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${toneStyles[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
  tone,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "gold" | "warn" | "bad" | "good";
}) {
  const borders = {
    default: "border-border bg-card",
    gold: "border-[1.5px] border-gold bg-gold-tint",
    warn: "border-warn-line bg-card",
    bad: "border-[1.5px] border-bad-line bg-card",
    good: "border-good-line bg-card",
  } as const;
  return (
    <div className={`rounded-2xl border ${borders[tone ?? "default"]} ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({
  children,
  tone = "gold",
  className = "",
}: {
  children: ReactNode;
  tone?: "gold" | "faint";
  className?: string;
}) {
  return (
    <div
      className={`text-[11px] font-bold uppercase tracking-label ${
        tone === "gold" ? "text-bronze" : "text-faint"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
  serif = false,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  serif?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <h1
          className={
            serif
              ? "font-display text-2xl text-navy"
              : "text-[22px] font-bold text-navy"
          }
        >
          {title}
        </h1>
        {subtitle ? <p className="mt-0.5 text-xs text-muted">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function StatTile({
  value,
  label,
  tone = "navy",
  border = "border-border",
}: {
  value: ReactNode;
  label: string;
  tone?: "navy" | "good" | "warn" | "bad" | "info" | "slate";
  border?: string;
}) {
  const colors = {
    navy: "text-navy",
    good: "text-good",
    warn: "text-warn",
    bad: "text-bad",
    info: "text-info",
    slate: "text-slate",
  } as const;
  return (
    <div className={`min-w-0 rounded-xl border ${border} bg-card px-1 py-2.5 text-center`}>
      <div className={`font-display text-lg leading-tight ${colors[tone]}`}>{value}</div>
      <div className="mt-0.5 text-[8px] font-semibold uppercase tracking-wide text-faint">
        {label}
      </div>
    </div>
  );
}

export function ProgressBar({
  value,
  color = "bg-gold",
  className = "",
  track = "bg-track",
  height = "h-2",
}: {
  value: number;
  color?: string;
  className?: string;
  track?: string;
  height?: string;
}) {
  return (
    <div className={`${height} rounded-full ${track} ${className}`}>
      <div
        className={`${height} rounded-full ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function FlowSteps({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="flex items-center gap-1">
      {steps.map((step, i) => (
        <div key={step} className="contents">
          <span
            className={`flex-1 rounded-lg px-0.5 py-1.5 text-center text-[9px] font-bold ${
              i < current
                ? "bg-good-bg text-good"
                : i === current
                  ? "border-[1.5px] border-gold bg-gold-tint text-bronze"
                  : "bg-surface font-semibold text-faint"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 ? <span className="text-input">›</span> : null}
        </div>
      ))}
    </div>
  );
}

export function Row({
  title,
  meta,
  right,
  last = false,
}: {
  title: ReactNode;
  meta?: ReactNode;
  right?: ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 py-2 ${
        last ? "" : "border-b border-hairline"
      }`}
    >
      <div className="min-w-0">
        <div className="text-xs font-bold">{title}</div>
        {meta ? <div className="mt-0.5 text-[10px] text-faint">{meta}</div> : null}
      </div>
      {right}
    </div>
  );
}

export function LinkHint({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 text-xs font-semibold text-bronze">{children} ›</span>
  );
}

export function ButtonPrimary({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`h-11 rounded-[10px] bg-navy px-4 text-[13px] font-semibold text-surface transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonGold({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`h-11 rounded-[10px] bg-gold px-4 text-[13px] font-bold text-navy transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonGhost({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`h-11 rounded-[10px] border border-input bg-card px-4 text-[13px] font-semibold text-ink transition-colors hover:bg-surface ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonSoft({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`h-11 rounded-[10px] bg-gold-soft px-4 text-[13px] font-semibold text-bronze transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export function Chip({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold ${
        active ? "bg-navy text-surface" : "border border-input bg-card text-ink"
      }`}
    >
      {children}
    </span>
  );
}

export function SourceChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] font-semibold text-bronze">
      {children}
    </span>
  );
}
