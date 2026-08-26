import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  Card,
  LinkHint,
  PageHeader,
  SectionLabel,
} from "@/components/ui";
import { Upload } from "@/components/icons";

export const metadata: Metadata = { title: "Inspections" };

const tabs = ["Upcoming", "Requested", "Completed", "Rectification"];

export default function InspectionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader title="Inspections" subtitle="18 Rivergum Street" />

      <div className="mt-3 flex border-b border-border">
        {tabs.map((tab, i) => (
          <span
            key={tab}
            className={`px-3 py-2 text-[13px] ${
              i === 0
                ? "border-b-2 border-gold font-semibold text-navy"
                : "text-muted"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* List + detail */}
        <div className="flex flex-col gap-2.5">
          <div className="rounded-2xl border-[1.5px] border-gold bg-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-bold">
                  Slab Pre-Pour{" "}
                  <span className="ml-1 text-[10px] font-bold text-bad">Mandatory</span>
                </div>
                <div className="mt-0.5 text-[11px] text-faint">
                  7 · Slab · 26 Aug 2026 · 10:30 AM · David Wong
                </div>
              </div>
              <Badge tone="info">Scheduled</Badge>
            </div>
            <div className="mt-2 flex justify-end">
              <LinkHint>View Inspection</LinkHint>
            </div>
          </div>

          <Card className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">Frame / Bracing Inspection</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Stage 8 · projected 4 Sep 2026
              </div>
            </div>
            <Badge tone="slate">Not Yet Requested</Badge>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3 opacity-85">
            <div>
              <div className="text-[13px] font-bold">Footings Inspection</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Passed 23 Aug 2026 · result attached
              </div>
            </div>
            <Badge tone="good">Passed</Badge>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Inspection Detail
            </SectionLabel>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold">Slab Pre-Pour Inspection</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  26 Aug · 10:30 AM · David Wong · Brisbane Building Certifiers
                </div>
              </div>
              <Badge tone="info">Scheduled</Badge>
            </div>
            <div className="mt-2.5 rounded-[11px] bg-surface px-3 py-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-faint">
                Readiness Package
              </div>
              <div className="mt-1.5 grid grid-cols-2 gap-1 text-[11px] text-muted">
                <span>
                  Checklist: <span className="font-bold text-good">10 / 10</span>
                </span>
                <span>
                  Evidence: <span className="font-bold text-good">12 / 12</span>
                </span>
                <span>
                  Drawing: <span className="font-bold text-ink">S-204 S04</span>
                </span>
                <span>
                  Critical defects: <span className="font-bold text-good">0 open</span>
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-muted">
                Attachments: drawings · evidence package
              </span>
              <LinkHint>View Package</LinkHint>
            </div>
          </Card>

          {/* Request inspection (2o) */}
          <Card className="p-4">
            <div className="text-[15px] font-bold">Request Inspection</div>
            <div className="text-[11px] text-faint">Slab Pre-Pour · Mandatory</div>
            <div className="mt-2.5 rounded-[10px] border border-warn-line bg-gold-tint px-3 py-2.5 text-[11px] leading-relaxed">
              <span className="font-bold">3 required items are still outstanding.</span>{" "}
              Checklist 8/10 · Evidence 9/12. Early booking is permitted by this
              project&apos;s configuration.
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="mb-1 font-semibold">Preferred Date</div>
                <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                  26 Aug 2026
                </div>
              </div>
              <div>
                <div className="mb-1 font-semibold">Preferred Time</div>
                <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                  10:30 AM
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <div className="mb-1 font-semibold">Inspector / Organisation</div>
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                David Wong · Brisbane Building Certifiers
              </div>
            </div>
            <ButtonPrimary className="mt-3 w-full">Request Inspection</ButtonPrimary>
          </Card>
        </div>

        {/* Outcome + certifier view */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Record Outcome — certifier only
            </SectionLabel>
            <div className="flex gap-2">
              <span className="flex h-11 flex-1 items-center justify-center rounded-[11px] border-[1.5px] border-good bg-good-bg text-[13px] font-bold text-good">
                Passed
              </span>
              <span className="flex h-11 flex-1 items-center justify-center rounded-[11px] border border-input bg-card text-[13px] font-semibold text-amber">
                Rectification Required
              </span>
            </div>
            <textarea
              placeholder="Comments…"
              className="mt-2 min-h-[44px] w-full resize-none rounded-[10px] border border-input bg-card px-3 py-2.5 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <div className="mt-2 flex h-[42px] items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-dashed border-input text-xs font-semibold text-bronze">
              <Upload size={14} /> Upload result / certificate
            </div>
            <ButtonPrimary className="mt-2.5 w-full">Submit Outcome</ButtonPrimary>
            <p className="mt-1.5 text-center text-[10px] text-faint">
              Outcome is attributed to the inspector — the software does not certify
              work.
            </p>
          </Card>

          <div className="flex items-center justify-between rounded-xl border border-warn-line bg-gold-tint px-3.5 py-3">
            <div>
              <div className="text-xs font-bold text-warn">
                2 rectification items identified
              </div>
              <div className="mt-0.5 text-[11px] text-muted">
                Create linked defects from this outcome
              </div>
            </div>
            <button className="h-9 shrink-0 rounded-lg bg-navy px-3 text-[11px] font-semibold text-surface">
              Create Defects
            </button>
          </div>

          {/* Certifier view (3z) */}
          <Card className="p-4">
            <div className="text-xs text-faint">
              Brisbane Building Certifiers · David Wong
            </div>
            <div className="mt-0.5 text-[17px] font-bold text-navy">
              Slab Pre-Pour Inspection
            </div>
            <div className="text-xs text-muted">
              18 Rivergum Street · 26 Aug 2026 · 10:30 AM
            </div>
            <div className="mt-3 rounded-xl border border-border p-3.5">
              <SectionLabel tone="faint" className="mb-2">
                Shared With You
              </SectionLabel>
              {[
                { label: "Current drawing S-204 Rev S04", right: <LinkHint>Open</LinkHint> },
                { label: "Evidence package · 12 items", right: <LinkHint>View</LinkHint> },
                {
                  label: "Checklist readiness 10 / 10",
                  right: <span className="text-good">✓</span>,
                },
                {
                  label: "Previous: Footings inspection · Passed",
                  right: <span className="text-[11px] text-faint">23 Aug</span>,
                  last: true,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between py-1.5 text-xs ${
                    row.last ? "" : "border-b border-hairline"
                  }`}
                >
                  <span className="font-semibold">{row.label}</span>
                  {row.right}
                </div>
              ))}
            </div>
            <ButtonPrimary className="mt-3 h-12 w-full">Record Outcome</ButtonPrimary>
            <button className="mt-2 h-11 w-full rounded-[11px] bg-gold-soft text-[13px] font-semibold text-bronze">
              Upload Result
            </button>
            <p className="mt-2 text-center text-[10px] text-faint">
              Read-only elsewhere — costs and unrelated project data are not shared.
            </p>
          </Card>

          <Card tone="good" className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-good-bg text-good">
              ✓
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-bold">
                Passed{" "}
                <span className="text-[11px] font-normal text-faint">
                  · David Wong · 26 Aug, 11:45 AM
                </span>
              </div>
              <div className="text-[11px] text-muted">Inspection-Result-026.pdf</div>
            </div>
            <LinkHint>View Result</LinkHint>
          </Card>
        </div>
      </div>
    </div>
  );
}
