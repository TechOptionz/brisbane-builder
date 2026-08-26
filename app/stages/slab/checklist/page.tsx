import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, Chip, ProgressBar, SectionLabel } from "@/components/ui";
import { Check, ChevronLeft, InfoCircle, Plus } from "@/components/icons";

export const metadata: Metadata = { title: "Before Work Checklist" };

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center gap-3">
        <Link href="/stages/slab" aria-label="Back to stage">
          <ChevronLeft size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="text-[17px] font-bold text-navy lg:text-xl">Before Work</h1>
          <p className="text-[11px] text-faint">Slab · 8 of 10 complete</p>
        </div>
      </div>
      <ProgressBar value={80} className="mt-2.5" height="h-[7px]" />

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        <Chip active>All</Chip>
        <Chip>Required</Chip>
        <Chip>Incomplete</Chip>
        <Chip>Completed</Chip>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Checklist items */}
        <div className="flex flex-col gap-2.5">
          <Card tone="good" className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-good-bg text-good">
              <Check size={14} />
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-bold">
                Current Approved Drawings{" "}
                <span className="ml-1 text-[10px] font-semibold text-bad">Mandatory</span>
              </div>
              <div className="mt-0.5 text-[11px] text-faint">
                Completed · Michael Turner · Evidence: S-204 Rev S04
              </div>
            </div>
          </Card>

          <Card tone="good" className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-good-bg text-good">
              <Check size={14} />
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-bold">
                Platform Levels{" "}
                <span className="ml-1 text-[10px] font-semibold text-bad">Mandatory</span>
              </div>
              <div className="mt-0.5 text-[11px] text-faint">
                Completed · Evidence: 2 photos
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">Vapour Barrier</div>
                <p className="mt-0.5 text-[11px] text-muted">
                  Verify vapour barrier continuity and taped penetrations.
                </p>
              </div>
              <Badge tone="amber">Evidence Required</Badge>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-hairline pt-2.5">
              <span className="text-[11px] text-faint">Required: 3 photos · 0 uploaded</span>
              <button className="h-9 rounded-lg bg-gold-soft px-3.5 text-xs font-semibold text-bronze">
                Add Evidence
              </button>
            </div>
          </Card>

          <div className="rounded-2xl border-[1.5px] border-gold bg-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">Reinforcement</div>
                <p className="mt-0.5 text-[11px] text-muted">
                  Verify reinforcement arrangement against current engineering.
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <Badge tone="bad">Mandatory</Badge>
                <Badge tone="amber">Evidence Required</Badge>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-hairline pt-2.5">
              <span className="text-[11px] text-faint">2 of 3 photos uploaded</span>
              <button className="h-9 rounded-lg bg-navy px-3.5 text-xs font-semibold text-surface">
                Open Item
              </button>
            </div>
          </div>

          <Card className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">
                  Termite Interface{" "}
                  <span className="ml-1 text-[10px] font-semibold text-info">
                    Conditional
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-muted">
                  Required when specified by project documents.{" "}
                  <span className="font-bold text-ink">This project: required.</span>
                </p>
              </div>
              <Badge tone="warn">Incomplete</Badge>
            </div>
          </Card>

          <Card className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-slate-bg text-slate">
              <InfoCircle size={13} />
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-bold">
                Weather Check{" "}
                <span className="ml-1 text-[10px] font-semibold text-slate">
                  Informational
                </span>
              </div>
              <div className="mt-0.5 text-[11px] text-faint">
                Acknowledged · review expected conditions for pour
              </div>
            </div>
          </Card>

          <p className="text-[10px] leading-relaxed text-faint">
            This checklist reflects the configured requirements for this project.
            Approved drawings, permit conditions, certifier instructions and written
            engineering directions prevail.
          </p>
        </div>

        {/* Item detail (2e) */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[17px] font-bold text-navy">Reinforcement</div>
                <div className="text-[11px] text-faint">Before Work · Slab</div>
              </div>
              <Badge tone="warn" className="px-2.5 py-1 text-[11px]">
                Incomplete
              </Badge>
            </div>
            <div className="mt-2.5 flex gap-1.5">
              <Badge tone="bad">Mandatory</Badge>
              <Badge tone="amber">Evidence Required</Badge>
            </div>
            <div className="mt-3 rounded-xl border border-border p-3.5">
              <SectionLabel tone="faint">Requirement</SectionLabel>
              <p className="mt-1.5 text-[13px] leading-relaxed">
                Verify reinforcement against current approved engineering and project
                checklist.
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-faint">
                Follow the current approved project documents and written
                engineer/certifier instructions.
              </p>
            </div>
            <div className="mt-2.5 flex items-center justify-between rounded-xl border border-border px-3.5 py-3">
              <div>
                <div className="text-[13px] font-bold">S-204 · Rev S04</div>
                <div className="mt-0.5 text-[11px] text-faint">Structural Slab Plan</div>
              </div>
              <span className="flex items-center gap-2.5">
                <Badge tone="good" className="font-bold">
                  CURRENT
                </Badge>
                <span className="text-xs font-semibold text-bronze">Open ›</span>
              </span>
            </div>
            <div className="mt-2.5 rounded-xl border border-border p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold">Photo Evidence</span>
                <span className="text-xs font-bold text-warn">2 of 3</span>
              </div>
              <div className="mt-2.5 flex gap-2">
                <div className="h-16 w-16 rounded-[10px] bg-[#E4E0D5]" />
                <div className="h-16 w-16 rounded-[10px] bg-[#E4E0D5]" />
                <button className="flex h-16 w-16 flex-col items-center justify-center gap-0.5 rounded-[10px] border-[1.5px] border-dashed border-input text-bronze">
                  <Plus size={16} />
                  <span className="text-[9px] font-bold">Add</span>
                </button>
              </div>
              <div className="mt-2 text-[11px] text-faint">
                Assigned: Michael Turner · Site Supervisor
              </div>
            </div>
            <button
              disabled
              className="mt-2.5 h-12 w-full cursor-default rounded-xl bg-[#E9E6DC] text-sm font-semibold text-[#B4AE9E]"
            >
              Complete Item
            </button>
            <p className="mt-1 text-center text-[11px] text-faint">
              1 required photo remains.
            </p>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Numeric Evidence
            </SectionLabel>
            <div className="text-[13px] font-bold">Finished Level Check</div>
            <div className="mt-2 flex items-center gap-2">
              <input
                defaultValue="−4"
                className="h-11 flex-1 rounded-xl border border-input bg-card px-3.5 text-sm outline-none focus:border-gold"
              />
              <span className="text-[13px] font-semibold text-muted">mm</span>
              <button className="h-11 rounded-[10px] bg-navy px-3.5 text-xs font-semibold text-surface">
                Submit
              </button>
            </div>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Sign-Off Evidence
            </SectionLabel>
            <div className="text-[13px] font-bold">
              Trade Sign-Off{" "}
              <span className="text-[11px] font-normal text-faint">
                · project acknowledgement
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                Rick Cole
              </div>
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3 text-faint">
                ABC Concreting
              </div>
            </div>
            <div className="mt-2 flex h-[52px] items-center justify-center rounded-[10px] border-[1.5px] border-dashed border-input text-[11px] text-faint">
              Signature
            </div>
            <button className="mt-2.5 h-10 w-full rounded-[10px] bg-gold-soft text-xs font-semibold text-bronze">
              Submit Sign-Off
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
