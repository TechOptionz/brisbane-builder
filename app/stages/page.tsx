import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, Chip, PageHeader, ProgressBar } from "@/components/ui";
import { Check, InfoCircle, Lock } from "@/components/icons";

export const metadata: Metadata = { title: "Project Stages" };

export default function StagesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader title="Project Stages" subtitle="18 Rivergum Street · BR-2026-018" />

      <Card className="mt-3 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] text-faint">Current Stage</div>
            <div className="mt-0.5 text-[15px] font-bold">7 · Slab</div>
          </div>
          <div className="text-center">
            <div className="text-[11px] text-faint">Gate</div>
            <div className="mt-0.5 text-[13px] font-semibold">Slab Pre-Pour</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-faint">Programme</div>
            <div className="mt-0.5 text-[13px] font-bold text-amber">2 days behind</div>
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between text-xs text-faint">
          <span>Overall progress</span>
          <span className="font-bold text-ink">43%</span>
        </div>
        <ProgressBar value={43} className="mt-1.5" height="h-[7px]" />
      </Card>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        <Chip active>All</Chip>
        <Chip>Current</Chip>
        <Chip>Attention</Chip>
        <Chip>Completed</Chip>
      </div>

      <div className="mt-3.5 flex flex-col gap-2">
        <Card className="flex items-center gap-3 px-3.5 py-3 opacity-75">
          <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-good">
            <Check size={12} className="text-white" strokeWidth={3} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold">
              0 – 5 · Feasibility → Earthworks
            </div>
            <div className="text-[11px] text-faint">Completed · gates released</div>
          </div>
          <span className="text-faint">›</span>
        </Card>

        <Card className="px-3.5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-good">
              <Check size={12} className="text-white" strokeWidth={3} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold">
                6 · Set-Out, Services, Piers &amp; Footings
              </div>
              <div className="mt-0.5 text-[11px] text-faint">
                Completed 23 Aug · Gate released by Sarah Collins
              </div>
            </div>
            <Badge tone="good">Completed</Badge>
          </div>
        </Card>

        <Link href="/stages/slab">
          <div className="rounded-2xl border-[1.5px] border-gold bg-card p-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-gold shadow-[0_0_0_4px_#F6EFDE]">
                <span className="h-[7px] w-[7px] rounded-full bg-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold">7 · Slab</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Planned 24 – 28 Aug · Forecast 30 Aug ·{" "}
                  <span className="font-bold text-amber">+2 days</span>
                </div>
              </div>
              <Badge tone="warn">Inspection Requested</Badge>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-hairline pt-2.5">
              <span className="text-[11px] text-muted">
                Owner: <span className="font-semibold text-ink">Michael Turner</span> ·
                Gate: <span className="font-bold text-bad">Not Released</span>
              </span>
              <span className="text-xs font-semibold text-bronze">Open ›</span>
            </div>
          </div>
        </Link>

        <Card className="flex items-center gap-3 px-3.5 py-3">
          <div className="box-border flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-2 border-bad-line">
            <Lock size={11} className="text-bad" strokeWidth={2.5} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold">8 · Frame &amp; Structural Shell</div>
            <div className="mt-0.5 text-[11px] text-faint">
              Depends on Slab gate release · Start forecast 31 Aug
            </div>
          </div>
          <Badge tone="slate">Not Ready</Badge>
        </Card>

        <Card className="flex items-center gap-3 px-3.5 py-3">
          <div className="box-border flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-2 border-bad-line">
            <InfoCircle size={11} className="text-bad" strokeWidth={2.5} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold">9 · Roof, Windows &amp; Lock-Up</div>
            <div className="mt-0.5 text-[11px] text-faint">
              Window delivery delay · future-stage hold
            </div>
          </div>
          <Badge tone="bad">On Hold</Badge>
        </Card>

        <Card className="flex items-center gap-3 px-3.5 py-3 opacity-75">
          <div className="box-border h-[26px] w-[26px] shrink-0 rounded-full border-2 border-border" />
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold">10 – 15 · Rough-Ins → Handover</div>
            <div className="text-[11px] text-faint">
              Upcoming · dependent on prior gates
            </div>
          </div>
          <span className="text-faint">›</span>
        </Card>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-faint">
        Stages and gates are configured for this project by project administrators and
        certifiers.
      </p>
    </div>
  );
}
