import type { Metadata } from "next";
import Link from "next/link";
import { Badge, ButtonGold, Card, SectionLabel } from "@/components/ui";
import { Check, Lock } from "@/components/icons";

export const metadata: Metadata = { title: "Project Home" };

const journey = [
  {
    label: "Stages 0 – 6 completed",
    meta: "Feasibility → Footings",
    state: "done",
  },
  {
    label: "7 · Slab — current",
    meta: "Gate: Slab Pre-Pour · Inspection Requested",
    state: "current",
  },
  {
    label: "8 · Frame & Structural Shell — blocked",
    meta: "Requires Slab gate release",
    state: "blocked",
  },
  { label: "9 · Roof, Windows & Lock-Up", meta: "", state: "todo" },
  { label: "10 – 15 · Rough-Ins → Handover, Defects & Warranty", meta: "", state: "todo" },
] as const;

const activity = [
  { label: "Slab inspection requested", meta: "Today · 9:10 AM", dot: "bg-warn" },
  { label: "Reinforcement evidence uploaded", meta: "Today · 8:42 AM", dot: "bg-good" },
  { label: "Structural drawing S04 issued", meta: "24 Aug · 4:18 PM", dot: "bg-info" },
  { label: "Defect DEF-026 closed", meta: "24 Aug · 2:11 PM", dot: "bg-good" },
];

export default function ProjectHomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div>
        <h1 className="font-display text-[22px] text-navy lg:text-2xl">
          18 Rivergum Street
        </h1>
        <p className="mt-0.5 text-xs text-muted">
          Brisbane, QLD · BR-2026-018 · New Detached Class 1a
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <SectionLabel tone="faint">Current Stage</SectionLabel>
                <div className="mt-1 text-lg font-bold">7 · Slab</div>
              </div>
              <Badge tone="warn" className="px-2.5 py-1 text-[11px]">
                Inspection Requested
              </Badge>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-faint">
              <span>Overall progress</span>
              <span className="font-bold text-ink">43%</span>
            </div>
            <div className="mt-1.5 h-[7px] rounded-full bg-track">
              <div className="h-[7px] w-[43%] rounded-full bg-gold" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-hairline pt-3">
              <div>
                <div className="text-[11px] text-faint">Programme</div>
                <div className="mt-0.5 text-[13px] font-bold text-amber">
                  2 days behind
                </div>
              </div>
              <div>
                <div className="text-[11px] text-faint">Forecast</div>
                <div className="mt-0.5 text-[13px] font-semibold">18 Dec 2026</div>
              </div>
              <div className="col-span-2">
                <div className="text-[11px] text-faint">Supervisor</div>
                <div className="mt-0.5 text-[13px] font-semibold">
                  Michael Turner · PM Sarah Collins
                </div>
              </div>
            </div>
          </Card>

          <div className="rounded-2xl bg-navy p-4 text-surface">
            <div className="flex items-center gap-2">
              <Lock size={15} className="text-gold" strokeWidth={2} />
              <span className="text-[11px] font-bold uppercase tracking-label text-gold">
                Current Hold Point
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[17px] font-bold">Slab Pre-Pour Gate</span>
              <span className="rounded-full bg-bad/25 px-2.5 py-1 text-[11px] font-bold text-bad-rose">
                NOT RELEASED
              </span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-navy-soft">
              Mandatory inspection requested. 3 required items remain.
            </p>
            <Link href="/stages/slab">
              <ButtonGold className="mt-3.5 h-[46px] w-full text-sm">
                Open Stage
              </ButtonGold>
            </Link>
          </div>

          <Card className="p-4 pb-2">
            <SectionLabel tone="faint" className="mb-3">
              Stage Journey
            </SectionLabel>
            {journey.map((step, i) => (
              <div key={step.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {step.state === "done" ? (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-good">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                  ) : step.state === "current" ? (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gold shadow-[0_0_0_4px_#F6EFDE]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  ) : step.state === "blocked" ? (
                    <div className="box-border flex h-5 w-5 items-center justify-center rounded-full border-2 border-bad-line">
                      <Lock size={9} className="text-bad" strokeWidth={2.5} />
                    </div>
                  ) : (
                    <div className="box-border h-5 w-5 rounded-full border-2 border-border" />
                  )}
                  {i < journey.length - 1 ? (
                    <div
                      className={`w-0.5 flex-1 ${
                        step.state === "done" ? "bg-good-line" : "bg-border"
                      }`}
                    />
                  ) : null}
                </div>
                <div className="pb-3">
                  <div
                    className={`text-[13px] ${
                      step.state === "current"
                        ? "font-bold text-bronze"
                        : step.state === "blocked"
                          ? "font-semibold text-bad"
                          : step.state === "todo"
                            ? "text-faint"
                            : "font-semibold text-muted"
                    }`}
                  >
                    {step.label}
                  </div>
                  {step.meta ? (
                    <div className="mt-0.5 text-[11px] text-faint">{step.meta}</div>
                  ) : null}
                </div>
              </div>
            ))}
            <Link
              href="/stages"
              className="block py-2 text-center text-xs font-semibold text-bronze"
            >
              View All 16 Stages ›
            </Link>
          </Card>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <Card className="px-4 py-1">
            {[
              { label: "Programme", value: "2 days behind", cls: "font-bold text-amber" },
              { label: "Quality", value: "3 open defects", cls: "font-semibold" },
              { label: "Compliance", value: "2 certificates pending", cls: "font-semibold" },
              { label: "Documents", value: "1 new revision", cls: "font-semibold" },
              {
                label: "Cost",
                value: "Within approved budget",
                cls: "font-semibold text-good",
                last: true,
              },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between py-2.5 ${
                  row.last ? "" : "border-b border-hairline"
                }`}
              >
                <span className="text-[13px] text-faint">{row.label}</span>
                <span className={`text-[13px] ${row.cls}`}>{row.value}</span>
              </div>
            ))}
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2.5">
              Top Risks
            </SectionLabel>
            <div className="flex items-center justify-between border-b border-hairline pb-2.5">
              <div>
                <div className="text-[13px] font-bold">Window Lead Time</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Required 6 Sep · Expected 9 Sep
                </div>
              </div>
              <Badge tone="bad" className="text-[11px]">
                High
              </Badge>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <div>
                <div className="text-[13px] font-bold">Wet Weather</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Potential programme impact
                </div>
              </div>
              <Badge tone="warn" className="text-[11px]">
                Medium
              </Badge>
            </div>
          </Card>

          <Card className="p-4 pb-2">
            <SectionLabel tone="faint" className="mb-3">
              Recent Activity
            </SectionLabel>
            {activity.map((a, i) => (
              <div key={a.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`mt-1 h-[9px] w-[9px] rounded-full ${a.dot}`} />
                  {i < activity.length - 1 ? (
                    <div className="w-0.5 flex-1 bg-border" />
                  ) : null}
                </div>
                <div className="pb-3">
                  <div className="text-[13px] font-semibold">{a.label}</div>
                  <div className="mt-0.5 text-[11px] text-faint">{a.meta}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
