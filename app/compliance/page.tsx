import type { Metadata } from "next";
import {
  Badge,
  Card,
  LinkHint,
  PageHeader,
  ProgressBar,
  SectionLabel,
  StatTile,
} from "@/components/ui";

export const metadata: Metadata = { title: "Compliance" };

const stateChips: { label: string; cls: string }[] = [
  { label: "Expected", cls: "bg-slate-bg text-slate" },
  { label: "Requested", cls: "bg-amber-bg text-amber" },
  { label: "Received", cls: "bg-info-bg text-info" },
  { label: "Under Review", cls: "bg-warn-bg text-warn" },
  { label: "Accepted", cls: "bg-good-bg text-good" },
  { label: "Rejected", cls: "bg-bad-bg text-bad" },
  { label: "Superseded", cls: "bg-slate-bg text-slate" },
];

export default function CompliancePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader title="Compliance" subtitle="18 Rivergum Street" />

      <div className="mt-3 grid grid-cols-5 gap-1.5 lg:max-w-xl">
        <StatTile value="34" label="Required" />
        <StatTile value="26" label="Accepted" tone="good" />
        <StatTile value="5" label="Pending" tone="warn" border="border-warn-line" />
        <StatTile value="3" label="Missing" tone="bad" border="border-bad-line" />
        <StatTile value="0" label="Rejected" tone="slate" />
      </div>

      {/* Overall bar (desktop 4v) */}
      <Card className="mt-3 hidden p-4 lg:block lg:max-w-xl">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-bold">Compliance Overview</span>
          <LinkHint>Open Register</LinkHint>
        </div>
        <div className="flex h-2 overflow-hidden rounded-full">
          <div className="w-[76%] bg-good" />
          <div className="w-[15%] bg-gold" />
          <div className="w-[9%] bg-bad" />
        </div>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Categories + approvals */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold">Building Approval</span>
              <span className="text-[11px] font-bold text-good">4 / 4</span>
            </div>
            <ProgressBar value={100} color="bg-good" height="h-1.5" />
            <div className="mt-2.5 flex items-center justify-between border-t border-hairline pt-2.5">
              <div>
                <div className="text-xs font-semibold">Building Approval Condition</div>
                <div className="mt-0.5 text-[10px] text-faint">
                  BA-2026-018 · verified by certifier · 20 Aug
                </div>
              </div>
              <Badge tone="good">Accepted</Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold">Engineering</span>
              <span className="text-[11px] font-bold text-warn">5 / 7</span>
            </div>
            <ProgressBar value={71} height="h-1.5" />
          </Card>

          <Card className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold">Waterproofing · Termite · Energy</span>
              <span className="text-[11px] font-bold text-bad">2 missing</span>
            </div>
            <ProgressBar value={40} height="h-1.5" />
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Approvals
            </SectionLabel>
            {[
              {
                title: "Building Approval",
                meta: "BA-2026-018 · 18 Aug",
                badge: <Badge tone="good">Accepted</Badge>,
              },
              {
                title: "Plumbing Approval",
                meta: "PA-2026-044 · 19 Aug",
                badge: <Badge tone="good">Accepted</Badge>,
              },
              {
                title: "Engineering Approval",
                meta: "Awaiting final documentation",
                badge: <Badge tone="warn">Pending</Badge>,
                last: true,
              },
            ].map((a) => (
              <div
                key={a.title}
                className={`flex items-center justify-between py-2 ${
                  a.last ? "" : "border-b border-hairline"
                }`}
              >
                <div>
                  <div className="text-xs font-semibold">{a.title}</div>
                  <div className="mt-0.5 text-[10px] text-faint">{a.meta}</div>
                </div>
                {a.badge}
              </div>
            ))}
          </Card>

          <div className="flex flex-wrap gap-1.5">
            {stateChips.map((c) => (
              <span
                key={c.label}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${c.cls}`}
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Certificates (4n) */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold">Concrete Test Result</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Slab · ABC Testing · uploaded 26 Aug
                </div>
              </div>
              <Badge tone="info">Received</Badge>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5 text-xs">
              <div>
                <div className="text-[10px] text-faint">Reference</div>
                <div className="mt-0.5 font-semibold">CT-2026-118</div>
              </div>
              <div>
                <div className="text-[10px] text-faint">Licence</div>
                <div className="mt-0.5 font-semibold">NATA 8842</div>
              </div>
              <div>
                <div className="text-[10px] text-faint">Test date · Issued</div>
                <div className="mt-0.5 font-semibold">26 Aug · 26 Aug</div>
              </div>
              <div>
                <div className="text-[10px] text-faint">Related drawing</div>
                <div className="mt-0.5 font-semibold text-bronze">S-204 S04 ›</div>
              </div>
            </div>
            <p className="mt-2.5 rounded-[10px] bg-surface px-3 py-2.5 text-[11px] text-muted">
              Validation notes pending · acceptance recorded with reviewer name and time.
            </p>
            <div className="mt-2.5 flex gap-2.5">
              <button className="h-10 flex-1 rounded-[10px] bg-navy text-xs font-semibold text-surface">
                Accept Certificate
              </button>
              <button className="h-10 flex-1 rounded-[10px] border-[1.5px] border-bad-line bg-card text-xs font-bold text-bad">
                Reject
              </button>
            </div>
          </Card>

          <div className="rounded-2xl border-[1.5px] border-bad-line bg-card px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold text-bad">
                  Missing — Waterproofing Certificate
                </div>
                <div className="mt-0.5 text-[11px] text-muted">
                  Required stage: Waterproofing ·{" "}
                  <span className="font-bold">handover blocker</span>
                </div>
              </div>
              <button className="h-9 shrink-0 rounded-lg bg-navy px-3.5 text-[11px] font-semibold text-surface">
                Request Certificate
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-bad-soft bg-card px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">
                  Electrical Compliance Certificate
                </div>
                <div className="mt-0.5 text-[11px] font-semibold text-bad">
                  Rejected — incorrect project reference
                </div>
              </div>
              <Badge tone="bad">Rejected</Badge>
            </div>
            <div className="mt-2 flex justify-end">
              <LinkHint>Replace Certificate</LinkHint>
            </div>
          </div>

          <Card tone="good" className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">Footing Inspection Result</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Accepted by Sarah Collins · 23 Aug · 3:40 PM
              </div>
            </div>
            <Badge tone="good">Accepted</Badge>
          </Card>
        </div>
      </div>
    </div>
  );
}
