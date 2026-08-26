import Link from "next/link";
import {
  Badge,
  ButtonGold,
  Card,
  LinkHint,
  PageHeader,
  SectionLabel,
  StatTile,
} from "@/components/ui";
import { Camera, Lock, Rows, Spark, Warning } from "@/components/icons";

export default function TodayPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader
        title="Today"
        subtitle="18 Rivergum Street · 26 Aug 2026"
        action={
          <span className="inline-flex items-center gap-1.5 rounded-full bg-good-bg px-3 py-1 text-[11px] font-semibold text-good">
            <span className="h-1.5 w-1.5 rounded-full bg-good" />
            Online
          </span>
        }
      />

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        {/* Left column */}
        <div className="flex flex-col gap-3">
          <Card className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[11px] text-faint">Stage</div>
              <div className="mt-0.5 text-sm font-bold">7 · Slab</div>
            </div>
            <div className="text-center">
              <div className="text-[11px] text-faint">Gate</div>
              <div className="mt-0.5 text-xs font-semibold">Slab Pre-Pour</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-faint">Programme</div>
              <div className="mt-0.5 text-xs font-bold text-amber">2 days behind</div>
            </div>
          </Card>

          <div className="rounded-2xl bg-navy p-4 text-surface">
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-gold" strokeWidth={2} />
              <span className="text-[15px] font-bold">Pre-Pour Gate Not Released</span>
            </div>
            <p className="mt-1.5 text-xs text-navy-soft">
              Outstanding: 1 evidence set · 1 inspection · 1 defect
            </p>
            <ButtonGold className="mt-3 w-full">Review Blockers</ButtonGold>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <StatTile value="7" label="Due Today" />
            <StatTile value="2" label="Overdue" tone="bad" border="border-bad-line" />
            <StatTile value="1" label="Inspection" tone="warn" border="border-warn-line" />
            <StatTile value="3" label="Defects" tone="info" />
          </div>

          <SectionLabel className="mt-2">Today&apos;s Priorities</SectionLabel>

          <Card tone="gold" className="border-gold bg-card px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">
                  1 · Complete Reinforcement Evidence
                </div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Slab · Due 9:30 AM · 1 photo remaining
                </div>
              </div>
              <Badge tone="bad">High</Badge>
            </div>
            <div className="mt-2 flex justify-end">
              <button className="h-9 rounded-lg bg-navy px-4 text-xs font-semibold text-surface">
                Continue
              </button>
            </div>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">2 · Verify Under-Slab Conduits</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Michael Turner · Due before inspection
              </div>
            </div>
            <LinkHint>Open</LinkHint>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">3 · Slab Pre-Pour Inspection</div>
              <div className="mt-0.5 text-[11px] text-faint">10:30 AM · David Wong</div>
            </div>
            <Badge tone="info">Scheduled</Badge>
          </Card>
        </div>

        {/* Right column — quick actions + site activity */}
        <div className="flex flex-col gap-3">
          <SectionLabel className="lg:mt-0">Quick Actions</SectionLabel>
          <div className="grid grid-cols-2 gap-2.5">
            <button className="flex flex-col gap-2 rounded-2xl bg-navy p-4 text-left text-surface">
              <Camera size={19} className="text-gold" />
              <span className="text-[13px] font-bold">Take Photo</span>
            </button>
            <Link
              href="/defects"
              className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-left"
            >
              <Warning size={19} className="text-bad" />
              <span className="text-[13px] font-bold">Report Defect</span>
            </Link>
            <Link
              href="/rfis"
              className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-left"
            >
              <Spark size={19} className="text-info" />
              <span className="text-[13px] font-bold">Create RFI</span>
            </Link>
            <Link
              href="/drawings"
              className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-left"
            >
              <Rows size={19} className="text-bronze" />
              <span className="text-[13px] font-bold">Open Drawing</span>
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <Link href="/inspections" className="text-xs font-semibold text-bronze">
              Request Inspection
            </Link>
            <Link href="/site-log" className="text-xs font-semibold text-bronze">
              Site Log
            </Link>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-warn-line bg-gold-tint px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <Warning size={15} className="text-warn" />
              <div>
                <div className="text-xs font-bold text-warn">Rain expected</div>
                <div className="text-[10px] text-muted">Potential site impact</div>
              </div>
            </div>
            <span className="text-xs font-semibold text-bronze">Record Delay</span>
          </div>

          <Card className="px-4 py-3">
            <SectionLabel tone="faint" className="mb-1.5">
              Recent Site Activity
            </SectionLabel>
            <div className="flex justify-between border-b border-hairline py-1.5 text-xs">
              <span className="font-semibold">Reinforcement evidence uploaded</span>
              <span className="text-faint">8:42 AM</span>
            </div>
            <div className="flex justify-between border-b border-hairline py-1.5 text-xs">
              <span className="font-semibold">ABC Concreting task marked ready</span>
              <span className="text-faint">8:16 AM</span>
            </div>
            <div className="flex justify-between py-1.5 text-xs">
              <span className="font-semibold">Drawing S04 opened on site</span>
              <span className="text-faint">7:48 AM</span>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-label text-bronze">
                <Spark size={13} className="text-gold" /> AI ANALYSIS
              </span>
              <Badge tone="warn">Medium risk</Badge>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              The Slab Pre-Pour gate is blocked by missing reinforcement evidence and a
              pending inspection result. Uploading the remaining photo unblocks the most
              progress today.
            </p>
            <div className="mt-2 flex justify-end">
              <Link href="/assistant" className="text-xs font-semibold text-bronze">
                Open Builder AI ›
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
