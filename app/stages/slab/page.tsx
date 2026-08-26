import type { Metadata } from "next";
import Link from "next/link";
import {
  Badge,
  ButtonGhost,
  ButtonGold,
  ButtonPrimary,
  Card,
  LinkHint,
  ProgressBar,
  SectionLabel,
} from "@/components/ui";
import { ChevronLeft, Lock } from "@/components/icons";

export const metadata: Metadata = { title: "Stage 7 · Slab" };

const facts = [
  { label: "Planned", value: "24 – 28 Aug" },
  { label: "Forecast · Delay", value: "30 Aug · +2 days", warn: true },
  { label: "Owner", value: "Michael Turner" },
  { label: "Trade", value: "ABC Concreting" },
];

const checklistGroups = [
  { label: "Before Work", value: "8 / 10", pct: 80 },
  { label: "During Work", value: "3 / 6", pct: 50 },
  { label: "Completion", value: "0 / 5", pct: 0 },
];

const summaries = [
  {
    title: "Inspection — Slab Pre-Pour",
    meta: "Scheduled 26 Aug · 10:30 AM · David Wong",
    href: "/inspections",
  },
  {
    title: "Evidence — 9 of 12 uploaded",
    meta: "3 required items outstanding",
    href: "/evidence",
  },
  { title: "Open Issues", meta: "1 defect · 1 RFI · 2 risks", href: "/defects" },
  {
    title: "Documents",
    meta: "4 current drawings · 1 new revision · 2 certificates expected",
    href: "/drawings",
  },
];

const history = [
  { label: "Inspection requested", meta: "Michael Turner · 26 Aug · 9:10 AM", dot: "bg-gold" },
  {
    label: "Evidence uploaded — reinforcement (2 photos)",
    meta: "Michael Turner · 26 Aug · 8:42 AM",
    dot: "bg-good",
  },
  {
    label: "Drawing revision changed · S03 → S04",
    meta: "Sarah Collins · 24 Aug · 4:18 PM",
    dot: "bg-info",
  },
  {
    label: "Stage started · Ready → In Progress",
    meta: "Michael Turner · 24 Aug · 6:58 AM",
    dot: "bg-warn",
  },
  {
    label: "Stage became Ready · Footings gate released",
    meta: "Sarah Collins · 23 Aug · 3:05 PM",
    dot: "bg-good",
  },
];

export default function StageWorkspacePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center gap-3">
        <Link href="/stages" aria-label="Back to stages">
          <ChevronLeft size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="text-[17px] font-bold text-navy lg:text-xl">7 · Slab</h1>
          <p className="text-[11px] text-faint">18 Rivergum Street</p>
        </div>
        <Badge tone="warn" className="px-2.5 py-1 text-[11px]">
          Inspection Requested
        </Badge>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {facts.map((f) => (
              <Card key={f.label} className="px-3.5 py-2.5">
                <div className="text-[10px] text-faint">{f.label}</div>
                <div
                  className={`mt-0.5 text-[13px] font-semibold ${
                    f.warn ? "text-amber" : ""
                  }`}
                >
                  {f.value}
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl bg-navy p-4 text-surface">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Lock size={14} className="text-gold" strokeWidth={2} />
                <span className="text-[15px] font-bold">Slab Pre-Pour Gate</span>
              </span>
              <span className="rounded-full bg-bad/25 px-2.5 py-1 text-[11px] font-bold text-bad-rose">
                Not Released
              </span>
            </div>
            <p className="mt-1.5 text-xs text-navy-soft">
              Mandatory Inspection · requested · 3 outstanding requirements
            </p>
            <Link href="/stages/slab/gate">
              <ButtonGold className="mt-3 w-full">Review Gate</ButtonGold>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {checklistGroups.map((g) => (
              <Card key={g.label} className="px-3 py-2.5">
                <div className="text-[10px] text-faint">{g.label}</div>
                <div className="mt-0.5 text-sm font-bold">{g.value}</div>
                <ProgressBar value={g.pct} className="mt-1.5" height="h-1" />
              </Card>
            ))}
          </div>
          <p className="text-[10px] text-faint">
            Checklist progress does not release the stage — gate rules control release.
          </p>

          <div className="rounded-2xl border-[1.5px] border-bad-line bg-card p-4">
            <div className="text-xs font-bold uppercase tracking-wide text-bad">
              Stage Blocked By
            </div>
            <div className="mt-2.5 flex flex-col gap-2 text-[13px]">
              {[
                "Reinforcement photo set incomplete",
                "Electrical conduit verification incomplete",
                "Mandatory inspection not passed",
              ].map((b) => (
                <span key={b} className="flex items-center gap-2.5">
                  <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-bad" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {summaries.map((s) => (
            <Link key={s.title} href={s.href}>
              <Card className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-paper">
                <div>
                  <div className="text-[13px] font-bold">{s.title}</div>
                  <div className="mt-0.5 text-[11px] text-faint">{s.meta}</div>
                </div>
                <LinkHint>View</LinkHint>
              </Card>
            </Link>
          ))}

          <div className="flex gap-2.5">
            <ButtonPrimary className="h-12 flex-[1.4]">Add Evidence</ButtonPrimary>
            <ButtonGhost className="h-12 flex-1">Report Issue</ButtonGhost>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <SectionLabel className="mb-2">Stage Actions</SectionLabel>
            {[
              { label: "Before Work Checklist", meta: "8 / 10", href: "/stages/slab/checklist" },
              { label: "Gate & Release Request", meta: "Not Released", href: "/stages/slab/gate" },
              { label: "Request Inspection", meta: "Slab Pre-Pour · Mandatory", href: "/inspections" },
            ].map((a, i, arr) => (
              <Link
                key={a.label}
                href={a.href}
                className={`flex items-center justify-between py-2.5 ${
                  i < arr.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <div>
                  <div className="text-[13px] font-bold">{a.label}</div>
                  <div className="mt-0.5 text-[11px] text-faint">{a.meta}</div>
                </div>
                <span className="text-input">›</span>
              </Link>
            ))}
          </Card>

          <Card className="p-4">
            <div className="mb-2.5 text-sm font-bold">Dependencies</div>
            {[
              { label: "Stage 6 · Footings", meta: "Released 23 Aug", badge: <Badge tone="good">Completed</Badge> },
              { label: "Structural Drawing S04", meta: "Verified current", badge: <Badge tone="good" className="font-bold">CURRENT</Badge> },
              { label: "Pre-Pour Inspection", meta: "Required for gate", badge: <Badge tone="warn">Pending</Badge>, last: true },
            ].map((d) => (
              <div
                key={d.label}
                className={`flex items-center justify-between py-2 ${
                  d.last ? "" : "border-b border-hairline"
                }`}
              >
                <div>
                  <div className="text-xs font-semibold">{d.label}</div>
                  <div className="mt-0.5 text-[10px] text-faint">{d.meta}</div>
                </div>
                {d.badge}
              </div>
            ))}
            <p className="mt-2 rounded-[10px] bg-surface px-3 py-2.5 text-[11px] text-muted">
              <span className="font-bold text-bad">Frame stage cannot start</span> — Slab
              gate not released.
            </p>
          </Card>

          <Card className="p-4">
            <div className="mb-2.5 text-sm font-bold">Lead-Time Items</div>
            <div className="flex items-center justify-between border-b border-hairline py-2">
              <div>
                <div className="text-xs font-semibold">Frame Package</div>
                <div className="mt-0.5 text-[10px] text-faint">
                  Required 31 Aug · Expected 30 Aug
                </div>
              </div>
              <Badge tone="good">On Track</Badge>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="text-xs font-semibold">Windows</div>
                <div className="mt-0.5 text-[10px] text-faint">
                  Required 6 Sep · Expected 9 Sep
                </div>
              </div>
              <Badge tone="bad">At Risk</Badge>
            </div>
          </Card>

          <Card className="p-4 pb-2">
            <div className="mb-3 text-sm font-bold">Stage History — read-only</div>
            {history.map((h, i) => (
              <div key={h.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`mt-1 h-[9px] w-[9px] rounded-full ${h.dot}`} />
                  {i < history.length - 1 ? (
                    <div className="w-0.5 flex-1 bg-border" />
                  ) : null}
                </div>
                <div className="pb-3">
                  <div className="text-xs font-semibold">{h.label}</div>
                  <div className="mt-0.5 text-[10px] text-faint">{h.meta}</div>
                </div>
              </div>
            ))}
            <p className="pb-2 text-[10px] text-faint">
              History entries cannot be edited or deleted.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
