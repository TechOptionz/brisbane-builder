import type { Metadata } from "next";
import {
  Badge,
  ButtonGold,
  ButtonPrimary,
  Card,
  LinkHint,
  PageHeader,
  ProgressBar,
  SectionLabel,
} from "@/components/ui";
import { Check, Lock } from "@/components/icons";

export const metadata: Metadata = { title: "Handover" };

const packItems = [
  { label: "Documents", value: "24 / 24", tone: "text-good" },
  { label: "Certificates", value: "32 / 35", tone: "text-warn", warn: true },
  { label: "Manuals", value: "11 / 12", tone: "text-warn", warn: true },
  { label: "Warranties · Approvals · Photos", value: "Complete", tone: "text-good" },
];

export default function HandoverPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader
        title="Handover"
        subtitle="18 Rivergum Street · BR-2026-018 · Stage 15"
        action={<Badge tone="bad" className="px-3 py-1 text-xs">Not Yet Ready</Badge>}
      />

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr] lg:items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="flex items-center justify-between text-xs text-faint">
              <span>Completion readiness</span>
              <span className="font-bold text-ink">92%</span>
            </div>
            <ProgressBar value={92} className="mt-1.5" />
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-hairline pt-3 text-xs text-muted">
              <span>
                Open defects: <span className="font-bold text-bad">5</span>
              </span>
              <span>
                Certificates: <span className="font-bold text-warn">32 / 35</span>
              </span>
              <span>
                Documents: <span className="font-bold text-ink">96%</span>
              </span>
              <span>
                Client approval: <span className="font-bold text-warn">Pending</span>
              </span>
            </div>
          </Card>

          <div className="rounded-2xl bg-navy p-4 text-surface">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Lock size={14} className="text-gold" strokeWidth={2} />
                <span className="text-[15px] font-bold">Ready for Handover</span>
              </span>
              <span className="rounded-full bg-bad/25 px-2.5 py-1 text-[11px] font-bold text-bad-rose">
                Not Yet Ready
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-navy-soft">
              Remaining: 5 defects · 3 certificates · client walkthrough pending
            </p>
            <ButtonGold className="mt-3 w-full">Review Requirements</ButtonGold>
          </div>

          <SectionLabel>Stage 15 — Sections</SectionLabel>
          <Card className="px-4 py-1">
            {[
              { label: "Before Handover", value: "14 / 18", tone: "text-warn" },
              { label: "Completion", value: "6 / 9", tone: "text-warn" },
              { label: "Client Acceptance", value: "0 / 3", tone: "text-faint" },
              { label: "Warranty Setup", value: "Not Started", tone: "text-faint", last: true },
            ].map((s) => (
              <div
                key={s.label}
                className={`flex items-center justify-between py-3 ${
                  s.last ? "" : "border-b border-hairline"
                }`}
              >
                <span className="text-[13px] font-semibold">{s.label}</span>
                <span className={`text-xs font-bold ${s.tone}`}>{s.value}</span>
              </div>
            ))}
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Final Inspection
            </SectionLabel>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">Final inspection completed</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  David Wong · 10 Dec 2026 · result attached
                </div>
              </div>
              <Badge tone="good">Passed</Badge>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-[10px] border border-warn-line px-3 py-2.5">
              <div>
                <div className="text-xs font-bold text-warn">Rectification variant</div>
                <div className="text-[10px] text-faint">3 items require completion</div>
              </div>
              <LinkHint>Create Defects</LinkHint>
            </div>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Client Walkthrough
            </SectionLabel>
            <p className="text-xs text-muted">
              15 Dec 2026 · Builder + Client + Project Manager
            </p>
            <div className="mt-2 flex flex-col gap-1.5 text-xs">
              <span className="flex items-center gap-2">
                <Check size={12} className="text-good" /> Home orientation
              </span>
              <span className="flex items-center gap-2">
                <Check size={12} className="text-good" /> Systems explained
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded border-[1.5px] border-input" />
                Questions recorded · outstanding items reviewed
              </span>
            </div>
            <button
              disabled
              className="mt-2.5 h-10 w-full cursor-default rounded-[10px] bg-[#E9E6DC] text-xs font-semibold text-[#B4AE9E]"
            >
              Complete Walkthrough
            </button>
            <p className="mt-1.5 text-center text-[10px] text-faint">
              Available once all walkthrough items are recorded.
            </p>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">Final Defects</div>
              <div className="mt-0.5 text-[11px] text-faint">
                DEF-101 kitchen cabinet · Joinery · due 12 Dec · 4 more
              </div>
            </div>
            <Badge tone="info">5 Open</Badge>
          </Card>

          <div className="rounded-2xl border border-bad-soft bg-bad-bg px-4 py-3.5 lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="text-[13px] font-bold text-bad">
                Handover cannot be completed
              </div>
              <p className="mt-0.5 text-xs text-muted">
                5 defects · 3 certificates · client acceptance outstanding — blockers are
                never hidden.
              </p>
            </div>
            <ButtonPrimary className="mt-2.5 h-10 w-full text-xs lg:mt-0 lg:w-auto">
              Review Blockers
            </ButtonPrimary>
          </div>
        </div>

        {/* Right — pack, checklist, keys */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-sm font-bold">Handover Pack</span>
              <span className="text-[11px] text-faint">86% assembled</span>
            </div>
            <ProgressBar value={86} height="h-[7px]" />
            <div className="mt-3 flex flex-col gap-2">
              {packItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 ${
                    item.warn ? "border-warn-line" : "border-border"
                  }`}
                >
                  <span className="text-xs font-semibold">{item.label}</span>
                  <span className={`text-[11px] font-bold ${item.tone}`}>{item.value}</span>
                </div>
              ))}
            </div>
            <ButtonPrimary className="mt-2.5 h-11 w-full">Prepare Package</ButtonPrimary>
          </Card>

          <Card className="p-4">
            <SectionLabel className="mb-2.5">Handover Checklist</SectionLabel>
            <div className="flex items-center gap-3 rounded-xl border border-good-line px-3.5 py-2.5">
              <Check size={14} className="shrink-0 text-good" />
              <div>
                <div className="text-xs font-bold">Electrical Compliance Certificate</div>
                <div className="text-[10px] text-faint">
                  Documentation · evidence: certificate PDF
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border-[1.5px] border-bad-line px-3.5 py-2.5">
              <div>
                <div className="text-xs font-bold">Appliance Manuals</div>
                <div className="text-[10px] font-semibold text-bad">
                  Missing — oven manual
                </div>
              </div>
              <button className="h-9 shrink-0 rounded-lg bg-navy px-3 text-[11px] font-semibold text-surface">
                Upload Manual
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-border px-3.5 py-2.5">
              <div>
                <div className="text-xs font-bold">Final clean completed</div>
                <div className="text-[10px] text-faint">Quality · photo evidence</div>
              </div>
              <Badge tone="warn">Incomplete</Badge>
            </div>
          </Card>

          <Card className="p-4">
            <SectionLabel className="mb-2">Keys &amp; Access</SectionLabel>
            {[
              { label: "Front door keys × 4", note: "To issue at handover" },
              { label: "Garage remotes × 2", note: "To issue" },
              { label: "Security codes · smart home", note: "Prepared", last: true },
            ].map((k) => (
              <div
                key={k.label}
                className={`flex justify-between py-2 text-xs ${
                  k.last ? "" : "border-b border-hairline"
                }`}
              >
                <span className="font-semibold">{k.label}</span>
                <span className="text-faint">{k.note}</span>
              </div>
            ))}
            <p className="mt-2 text-[10px] text-faint">
              Issue records capture recipient, date, quantity and returns.
            </p>
          </Card>

          <Card className="p-4">
            <div className="mb-2 text-sm font-bold">Warranty Register</div>
            {[
              { label: "Hot Water System", note: "to 18 Dec 2031" },
              { label: "Roof Membrane", note: "exp 18 Feb 2027", warn: true },
              { label: "Kitchen Appliances", note: "to 18 Dec 2028", last: true },
            ].map((w) => (
              <div
                key={w.label}
                className={`flex justify-between py-1.5 text-xs ${
                  w.last ? "" : "border-b border-hairline"
                }`}
              >
                <span className="font-semibold">{w.label}</span>
                <span className={w.warn ? "font-semibold text-warn" : "text-muted"}>
                  {w.note}
                </span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
