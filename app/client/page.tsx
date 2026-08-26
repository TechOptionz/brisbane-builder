import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  Card,
  SectionLabel,
} from "@/components/ui";
import { Check, Download, InfoCircle } from "@/components/icons";

export const metadata: Metadata = { title: "Client Portal" };

const milestones = [
  { label: "Construction complete", date: "8 Dec", state: "done" },
  { label: "Final inspection passed", date: "10 Dec", state: "done" },
  { label: "Final walkthrough", date: "15 Dec", state: "current" },
  { label: "Handover · keys & documents", date: "", state: "todo" },
] as const;

export default function ClientPortalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-faint">Your new home</div>
          <h1 className="mt-0.5 font-display text-[22px] text-navy">
            18 Rivergum Street
          </h1>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-border text-xs font-bold text-muted">
          JM
        </span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl bg-navy p-4 text-surface">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-label text-gold">
                Preparing Handover
              </span>
              <span className="font-display text-xl">98%</span>
            </div>
            <div className="mt-2.5 h-[7px] rounded-full bg-navy-3">
              <div className="h-[7px] w-[98%] rounded-full bg-gold" />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-navy-3 pt-3">
              <div>
                <div className="text-xs text-navy-muted">Next</div>
                <div className="mt-0.5 text-sm font-bold">
                  Final Walkthrough · 15 Dec
                </div>
              </div>
              <span className="text-xs font-bold text-gold">Details ›</span>
            </div>
          </div>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2.5">
              Milestones
            </SectionLabel>
            {milestones.map((m, i) => (
              <div key={m.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {m.state === "done" ? (
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-good">
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                  ) : m.state === "current" ? (
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gold shadow-[0_0_0_3px_#F6EFDE]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  ) : (
                    <div className="box-border h-[18px] w-[18px] rounded-full border-2 border-border" />
                  )}
                  {i < milestones.length - 1 ? (
                    <div
                      className={`w-0.5 flex-1 ${
                        m.state === "done" ? "bg-good-line" : "bg-border"
                      }`}
                    />
                  ) : null}
                </div>
                <div
                  className={`pb-3 text-xs ${
                    m.state === "current"
                      ? "font-bold text-bronze"
                      : m.state === "todo"
                        ? "text-faint"
                        : "font-semibold"
                  }`}
                >
                  {m.label}
                  {m.date ? (
                    <span className="font-normal text-faint"> · {m.date}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Your Documents
            </SectionLabel>
            {[
              { label: "Electrical Certificate", state: "Available" },
              { label: "Air Conditioning Manual", state: "Delivered", last: true },
            ].map((d) => (
              <div
                key={d.label}
                className={`flex items-center justify-between py-2 ${
                  d.last ? "" : "border-b border-hairline"
                }`}
              >
                <span className="text-xs font-semibold">{d.label}</span>
                <span className="flex items-center gap-2">
                  <Badge tone="good">{d.state}</Badge>
                  <Download size={14} className="text-bronze" />
                </span>
              </div>
            ))}
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Approvals
            </SectionLabel>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold">Kitchen Upgrade Variation</div>
                <div className="mt-0.5 text-[10px] text-faint">+$3,200 inc GST</div>
              </div>
              <Badge tone="good">Approved</Badge>
            </div>
          </Card>
        </div>

        {/* Right — accept handover sheet */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] lg:shadow-none">
          <div className="mx-auto mb-3.5 h-1 w-10 rounded-full bg-line lg:hidden" />
          <div className="text-[17px] font-bold text-navy">Accept Handover</div>
          <div className="mt-2.5 flex flex-col gap-1.5 text-xs">
            <span className="flex items-center gap-2">
              <Check size={13} className="text-good" />
              Documents received — 35 certificates · 12 manuals
            </span>
            <span className="flex items-center gap-2">
              <Check size={13} className="text-good" />
              Walkthrough completed — 15 Dec 2026
            </span>
            <span className="flex items-center gap-2">
              <InfoCircle size={13} className="text-warn" />2 minor items scheduled
              post-handover — listed below
            </span>
          </div>
          <label className="mt-2.5 flex cursor-pointer gap-2.5 rounded-[10px] border border-input px-3 py-2.5">
            <span className="h-[18px] w-[18px] shrink-0 rounded-[5px] border-[1.5px] border-input" />
            <span className="text-[11px] leading-snug text-muted">
              I confirm receipt of the handover information and documents listed above.
            </span>
          </label>
          <ButtonPrimary className="mt-3 h-12 w-full text-sm">
            Accept Handover
          </ButtonPrimary>
          <div className="mt-2.5 flex items-center gap-2.5 rounded-[10px] bg-good-bg px-3 py-2.5">
            <Check size={15} className="shrink-0 text-good" strokeWidth={2} />
            <span className="text-[11px]">
              <span className="font-bold">Handover Accepted</span> · J. Mitchell · 18 Dec
              2026 · 10:15 AM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
