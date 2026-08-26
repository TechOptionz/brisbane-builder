import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, Chip, SectionLabel } from "@/components/ui";
import { Filter } from "@/components/icons";

export const metadata: Metadata = { title: "Portfolio" };

const kpis = [
  { value: "8", label: "Active Projects", tone: "text-navy", border: "border-border" },
  { value: "3", label: "Hold Points Due", tone: "text-warn", border: "border-warn-line" },
  { value: "7", label: "Overdue Actions", tone: "text-bad", border: "border-bad-line" },
  { value: "4", label: "Certificate Gaps", tone: "text-info", border: "border-border" },
];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-navy">Good morning, Daniel</h1>
          <p className="mt-0.5 text-[13px] text-muted">
            Here&apos;s what needs attention across your projects.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className={`p-3.5 ${kpi.border}`}>
            <div className={`font-display text-2xl ${kpi.tone}`}>{kpi.value}</div>
            <div className="mt-0.5 text-[11px] text-faint">{kpi.label}</div>
          </Card>
        ))}
      </div>

      <div className="mt-2.5 flex items-center justify-between rounded-xl bg-navy px-4 py-3 text-surface lg:max-w-md">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-label text-gold">
            Forecast Variance
          </div>
          <div className="mt-0.5 text-[11px] text-navy-muted">Director view only</div>
        </div>
        <div className="font-display text-[22px]">+2.8%</div>
      </div>

      <div className="mt-3.5 flex items-center gap-2">
        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          <Chip active>All</Chip>
          <Chip>Attention</Chip>
          <Chip>On Track</Chip>
          <Chip>On Hold</Chip>
        </div>
        <button
          aria-label="Filter"
          className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full border border-input bg-card"
        >
          <Filter size={15} />
        </button>
      </div>

      <SectionLabel className="mt-4">Needs Attention</SectionLabel>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <div className="rounded-2xl border-[1.5px] border-gold bg-card p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-base font-bold">18 Rivergum Street</div>
              <div className="mt-0.5 text-xs text-muted">
                BR-2026-018 · New Detached Class 1a · Brisbane, QLD
              </div>
            </div>
            <Badge tone="warn" className="px-2.5 py-1 text-[11px]">
              Inspection Requested
            </Badge>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-hairline pt-3">
            <div>
              <div className="text-[11px] text-faint">Stage</div>
              <div className="mt-0.5 text-[13px] font-bold">7 · Slab</div>
            </div>
            <div>
              <div className="text-[11px] text-faint">Programme</div>
              <div className="mt-0.5 text-[13px] font-bold text-amber">2 days behind</div>
            </div>
            <div>
              <div className="text-[11px] text-faint">Next Hold Point</div>
              <div className="mt-0.5 text-[13px] font-semibold">Slab Pre-Pour</div>
            </div>
            <div>
              <div className="text-[11px] text-faint">Forecast</div>
              <div className="mt-0.5 text-[13px] font-semibold">18 Dec 2026</div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-muted">
              Supervisor: <span className="font-semibold text-ink">Michael Turner</span>
            </span>
            <Link
              href="/project"
              className="flex h-9 items-center rounded-lg bg-navy px-4 text-xs font-semibold text-surface"
            >
              Open Project
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[15px] font-bold">42 Hawthorne Road</div>
                <div className="mt-0.5 text-xs text-muted">
                  Stage 8 · Frame &amp; Structural Shell · 3 defects outstanding
                </div>
              </div>
              <Badge tone="amber" className="px-2.5 py-1 text-[11px]">
                Rectification
              </Badge>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[15px] font-bold">7 Banksia Court</div>
                <div className="mt-0.5 text-xs text-muted">
                  Stage 4 · Approvals, Contract &amp; Mobilisation · Building approval
                  condition outstanding
                </div>
              </div>
              <Badge tone="bad" className="px-2.5 py-1 text-[11px]">
                On Hold
              </Badge>
            </div>
          </Card>
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-1.5">
              Switch Project
            </SectionLabel>
            <div className="flex items-center justify-between rounded-xl border-[1.5px] border-gold bg-gold-tint px-3.5 py-3">
              <div>
                <div className="text-sm font-bold">18 Rivergum Street</div>
                <div className="mt-0.5 text-xs text-muted">
                  Slab · Inspection Requested
                </div>
              </div>
              <span className="text-[11px] font-bold text-bronze">Current</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
