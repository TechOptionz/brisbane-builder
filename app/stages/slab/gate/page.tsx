import type { Metadata } from "next";
import Link from "next/link";
import { Badge, ButtonPrimary, Card, SectionLabel } from "@/components/ui";
import { Check, CheckCircle, ChevronLeft, Warning } from "@/components/icons";

export const metadata: Metadata = { title: "Slab Pre-Pour Gate" };

const requirements = [
  {
    label: "Checklist",
    meta: "2 required items outstanding",
    right: <span className="text-[13px] font-bold text-warn">8 / 10</span>,
    border: "border-warn-line",
  },
  {
    label: "Evidence",
    meta: "3 required items missing",
    right: <span className="text-[13px] font-bold text-warn">9 / 12</span>,
    border: "border-warn-line",
  },
  {
    label: "Inspection",
    meta: "Requested · not passed",
    right: <Badge tone="warn">Requested</Badge>,
    border: "border-bad-soft",
  },
  {
    label: "Critical Defects",
    meta: "DEF-026 open",
    right: <span className="text-[13px] font-bold text-bad">1 open</span>,
    border: "border-bad-soft",
  },
  {
    label: "Required Documents",
    meta: "Current drawing set verified",
    right: <Check size={15} className="text-good" />,
    border: "border-good-line",
  },
];

export default function GatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center gap-3">
        <Link href="/stages/slab" aria-label="Back to stage">
          <ChevronLeft size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="text-[17px] font-bold text-navy lg:text-xl">
            Slab Pre-Pour Gate
          </h1>
          <p className="text-[11px] text-faint">Mandatory Inspection</p>
        </div>
        <Badge tone="bad" className="px-2.5 py-1 text-[11px] font-bold">
          Not Released
        </Badge>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Gate detail */}
        <div className="flex flex-col gap-2.5">
          {requirements.map((r) => (
            <div
              key={r.label}
              className={`flex items-center justify-between rounded-xl border bg-card px-3.5 py-3 ${r.border}`}
            >
              <div>
                <div className="text-[13px] font-bold">{r.label}</div>
                <div className="mt-0.5 text-[11px] text-faint">{r.meta}</div>
              </div>
              {r.right}
            </div>
          ))}

          <div className="rounded-2xl border-[1.5px] border-bad-line bg-bad-bg p-4">
            <div className="text-sm font-bold text-bad">Cannot Be Released</div>
            <p className="mt-0.5 text-xs">Mandatory requirements remain incomplete.</p>
            <Link href="/stages/slab/checklist">
              <ButtonPrimary className="mt-2.5 w-full">
                Resolve Requirements
              </ButtonPrimary>
            </Link>
          </div>

          <Card tone="good" className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-good" strokeWidth={2} />
              <span className="text-[13px] font-bold text-good">
                Ready for Release Request
              </span>
            </div>
            <p className="mt-0.5 text-[11px] text-muted">
              Shown when all configured requirements are met. Release is never automatic.
            </p>
            <ButtonPrimary className="mt-2.5 w-full">Request Gate Release</ButtonPrimary>
          </Card>

          {/* Release request sheet (2l) */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] lg:shadow-none">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-line lg:hidden" />
            <div className="text-[17px] font-bold text-navy">Request Gate Release</div>
            <div className="mt-0.5 text-xs text-faint">
              Slab Pre-Pour · 18 Rivergum Street
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {["Checklist", "Evidence", "Inspection Passed", "Defects Closed"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[10px] bg-good-bg px-3 py-2.5"
                  >
                    <span className="text-xs font-semibold text-good">{item}</span>
                    <Check size={13} className="text-good" strokeWidth={3} />
                  </div>
                ),
              )}
            </div>
            <p className="mt-2.5 text-xs text-muted">
              Requested by <span className="font-bold text-ink">Michael Turner</span> ·
              Site Supervisor
            </p>
            <textarea
              placeholder="Optional note for the approver…"
              className="mt-2 min-h-[52px] w-full resize-none rounded-xl border border-input bg-card px-3.5 py-2.5 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <ButtonPrimary className="mt-2.5 h-12 w-full text-sm">
              Submit Release Request
            </ButtonPrimary>
            <div className="mt-2.5 flex items-center justify-between rounded-[10px] bg-surface px-3 py-2.5">
              <div>
                <div className="text-xs font-bold text-warn">Release Requested</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Awaiting Sarah Collins · Project Manager · 26 Aug, 12:45 PM
                </div>
              </div>
              <Badge tone="warn">Pending</Badge>
            </div>
            <p className="mt-2 text-center text-[11px] text-faint">
              Supervisors cannot approve their own restricted gate.
            </p>
          </div>
        </div>

        {/* Approval + exception */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[15px] font-bold">Gate Release Review</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Slab Pre-Pour · requested by Michael Turner
                </div>
              </div>
              <Badge tone="warn">Pending</Badge>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5 text-xs">
              {[
                "Checklist complete",
                "Evidence complete",
                "Inspection passed",
                "Documents current",
              ].map((c) => (
                <span key={c} className="flex items-center gap-1.5">
                  <Check size={12} className="text-good" strokeWidth={3} />
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-3.5 flex gap-2.5">
              <button className="h-11 flex-[1.4] rounded-[10px] bg-navy text-[13px] font-semibold text-surface">
                Release Gate
              </button>
              <button className="h-11 flex-1 rounded-[10px] border border-input bg-card text-[13px] font-semibold">
                Return for Action
              </button>
            </div>
          </Card>

          <Card tone="good" className="flex items-center gap-3 p-4">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-good-bg text-good">
              <Check size={19} strokeWidth={2.4} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold">Released</span>
                <span className="text-[11px] text-faint">
                  by Sarah Collins · 26 Aug 2026 · 1:14 PM
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted">
                Next: 8 · Frame &amp; Structural Shell — now{" "}
                <span className="font-bold text-info">Ready</span>
              </p>
            </div>
          </Card>

          <Card className="p-4">
            <div className="text-sm font-bold">Return Gate for Action</div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <span className="rounded-full border-[1.5px] border-gold bg-gold-tint px-3 py-1.5 text-[11px] font-bold text-bronze">
                Evidence Incomplete
              </span>
              {["Inspection Issue", "Defect Outstanding", "Document Issue"].map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-input bg-card px-3 py-1.5 text-[11px] font-semibold"
                >
                  {r}
                </span>
              ))}
            </div>
            <textarea
              placeholder="Reason (required) — e.g. curing evidence photos do not show the full slab edge…"
              className="mt-2.5 min-h-[52px] w-full resize-none rounded-xl border border-input bg-card px-3.5 py-2.5 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <button className="mt-2.5 h-11 w-full rounded-[10px] border-[1.5px] border-bad-line bg-card text-[13px] font-bold text-bad">
              Return for Action
            </button>
            <p className="mt-1.5 text-[10px] text-faint">
              The stage returns to the appropriate configured state (e.g. Rectification
              or In Progress).
            </p>
          </Card>

          {/* Exception workflow (2z) */}
          <Card className="border-warn-line p-4">
            <SectionLabel className="mb-2">Gate Exception</SectionLabel>
            <div className="rounded-[10px] bg-gold-tint px-3 py-2.5">
              <div className="text-[11px] font-bold text-warn">Outstanding</div>
              <div className="mt-0.5 text-xs">
                Electrical conduit verification · 1 evidence photo
              </div>
            </div>
            {["Reason (required)", "Risk / consequence (required)", "Temporary control / mitigation (required)"].map(
              (ph) => (
                <textarea
                  key={ph}
                  placeholder={ph}
                  className="mt-2 min-h-[44px] w-full resize-none rounded-[10px] border border-input bg-card px-3 py-2.5 text-xs outline-none placeholder:text-faint focus:border-gold"
                />
              ),
            )}
            <label className="mt-2 flex cursor-pointer gap-2.5 rounded-[10px] border border-input px-3 py-2.5">
              <span className="h-[18px] w-[18px] shrink-0 rounded-[5px] border-[1.5px] border-input" />
              <span className="text-[11px] leading-snug text-muted">
                I understand this exception does not certify compliance and will be
                recorded in the permanent project audit history.
              </span>
            </label>
            <ButtonPrimary className="mt-2.5 w-full">
              Submit Exception Request
            </ButtonPrimary>
          </Card>

          <div className="rounded-2xl border-[1.5px] border-gold bg-gold-tint p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Warning size={14} className="text-bronze" strokeWidth={2} />
                <span className="text-sm font-bold text-bronze">
                  Released by Exception
                </span>
              </span>
              <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold text-navy">
                EXCEPTION
              </span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
              Approved by Daniel Brooks · 26 Aug · 2:05 PM · reason recorded.
              <br />
              Outstanding item remains visible:{" "}
              <span className="font-bold text-ink">
                Electrical conduit verification
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
