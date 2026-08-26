import type { Metadata } from "next";
import {
  Badge,
  ButtonGhost,
  ButtonPrimary,
  ButtonSoft,
  Card,
  Chip,
  PageHeader,
  SectionLabel,
} from "@/components/ui";
import { Check, Download, Warning } from "@/components/icons";

export const metadata: Metadata = { title: "Drawings" };

const register = [
  {
    code: "S-204 · Structural Slab Plan",
    meta: "Rev S04 · Structural · Issued 24 Aug",
  },
  { code: "A-204 · Garage Plan", meta: "Rev A02 · Architectural · Issued 18 Aug" },
  {
    code: "P-102 · Plumbing Under-Slab Layout",
    meta: "Rev P03 · Hydraulic · Issued 20 Aug",
  },
];

const connected = [
  { kind: "CHECKLIST", color: "text-bronze", label: "Reinforcement" },
  { kind: "INSPECTION", color: "text-good", label: "Slab Pre-Pour" },
  { kind: "RFI", color: "text-info", label: "RFI-014 · penetration clarification" },
  { kind: "DEFECT", color: "text-bad", label: "DEF-026 · Garage Edge Beam" },
  { kind: "CERT", color: "text-warn", label: "Concrete Test Result" },
];

const revisions = [
  {
    title: "Rev S04 · Issued for Construction",
    meta: "24 Aug · Structural Engineer · reason: RFI-014 penetration relocation",
    current: true,
  },
  {
    title: "Rev S03 · Approved",
    meta: "20 Aug · approved by certifier",
    superseded: true,
  },
  { title: "Rev S02 · For Review", meta: "14 Aug" },
  { title: "Rev S01 · Draft", meta: "10 Aug" },
];

const gridBg = {
  backgroundImage:
    "repeating-linear-gradient(0deg,#F6F4EF,#F6F4EF 1px,transparent 1px,transparent 14px),repeating-linear-gradient(90deg,#F6F4EF,#F6F4EF 1px,transparent 1px,transparent 14px)",
};

export default function DrawingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader
        title="Drawings"
        subtitle="18 Rivergum Street · only current issued revisions shown"
      />

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        <Chip active>All</Chip>
        <Chip>Architectural</Chip>
        <Chip>Structural</Chip>
        <Chip>Hydraulic</Chip>
        <Chip>Electrical</Chip>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Register + detail */}
        <div className="flex flex-col gap-2.5">
          {register.map((d) => (
            <Card key={d.code} className="flex items-center justify-between px-4 py-3">
              <div>
                <div className="text-[13px] font-bold">{d.code}</div>
                <div className="mt-0.5 text-[11px] text-faint">{d.meta}</div>
              </div>
              <Badge tone="good" className="font-bold">
                CURRENT
              </Badge>
            </Card>
          ))}

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2.5">
              Drawing Detail
            </SectionLabel>
            <div
              className="relative flex h-[130px] items-center justify-center rounded-xl border border-border text-faint"
              style={gridBg}
            >
              <span className="text-[11px]">Drawing preview</span>
              <Badge tone="good" className="absolute right-2.5 top-2 text-[9px] font-bold">
                CURRENT · S04
              </Badge>
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-xs">
              <div>
                <div className="text-[10px] text-faint">Discipline · Stage</div>
                <div className="mt-0.5 font-semibold">Structural · Slab</div>
              </div>
              <div>
                <div className="text-[10px] text-faint">Author · Issued</div>
                <div className="mt-0.5 font-semibold">Structural Engineer · 24 Aug</div>
              </div>
            </div>
            <div className="mt-2.5 flex gap-2">
              <ButtonPrimary className="h-10 flex-1 text-xs">Open</ButtonPrimary>
              <ButtonGhost className="h-10 flex-1 text-xs">Download</ButtonGhost>
              <ButtonSoft className="h-10 flex-[1.4] text-xs">Available Offline</ButtonSoft>
            </div>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Connected Records
            </SectionLabel>
            {connected.map((r, i) => (
              <div
                key={r.kind}
                className={`flex items-center gap-2.5 py-2 ${
                  i < connected.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <span className={`w-[70px] text-[10px] font-bold ${r.color}`}>
                  {r.kind}
                </span>
                <span className="text-xs font-semibold">{r.label}</span>
              </div>
            ))}
          </Card>

          {/* Offline states (4k/4l) */}
          <Card className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-bold">
                  Structural Slab Plan · S-204 · S04
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11px] font-semibold text-good">
                  <Check size={11} /> Available offline · downloaded 25 Aug
                </div>
              </div>
              <Badge tone="good" className="font-bold">
                CURRENT
              </Badge>
            </div>
          </Card>
          <Card className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-bold">Plumbing Layout · P-102 · P03</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Not downloaded · internet required
                </div>
              </div>
              <span className="flex items-center gap-2">
                <Badge tone="good" className="font-bold">
                  CURRENT
                </Badge>
                <Download size={16} className="text-bronze" />
              </span>
            </div>
          </Card>
          <div className="rounded-2xl border-[1.5px] border-bad-line bg-bad-bg px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-bold">Offline copy · S-204 · S03</div>
                <div className="mt-0.5 text-[11px] font-semibold text-bad">
                  This offline copy is no longer current — connect to update.
                </div>
              </div>
              <span className="inline-flex shrink-0 rounded-full bg-bad px-2.5 py-0.5 text-[10px] font-bold text-white">
                SUPERSEDED
              </span>
            </div>
          </div>
        </div>

        {/* History / compare / superseded */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="mb-3 text-sm font-bold">Revision History — S-204</div>
            {revisions.map((rev, i) => (
              <div key={rev.title} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`box-border flex h-5 w-5 items-center justify-center rounded-full ${
                      rev.current
                        ? "bg-gold shadow-[0_0_0_4px_#F6EFDE]"
                        : "border-2 border-border"
                    }`}
                  >
                    {rev.current ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    ) : null}
                  </div>
                  {i < revisions.length - 1 ? (
                    <div className="w-0.5 flex-1 bg-border" />
                  ) : null}
                </div>
                <div className="flex-1 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[13px] ${
                        rev.current ? "font-bold" : "font-semibold text-muted"
                      }`}
                    >
                      {rev.title}
                    </span>
                    {rev.current ? (
                      <Badge tone="good" className="text-[9px] font-bold">
                        CURRENT
                      </Badge>
                    ) : rev.superseded ? (
                      <span className="inline-flex shrink-0 rounded-full bg-bad px-2 py-0.5 text-[9px] font-bold text-white">
                        SUPERSEDED
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-0.5 text-[11px] text-faint">{rev.meta}</div>
                </div>
              </div>
            ))}
          </Card>

          <Card className="p-4">
            <div className="mb-2.5 text-sm font-bold">Compare Revisions — S03 vs S04</div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="mb-1 text-[10px] font-bold text-faint">
                  S03 · SUPERSEDED
                </div>
                <div className="flex h-20 items-center justify-center rounded-[10px] border border-bad-line bg-bad-bg text-[10px] text-bad">
                  Previous
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-1 text-[10px] font-bold text-good">S04 · CURRENT</div>
                <div className="flex h-20 items-center justify-center rounded-[10px] border border-good-line bg-[#F1F8F3] text-[10px] text-good">
                  Current
                </div>
              </div>
            </div>
            <p className="mt-2.5 rounded-[10px] bg-surface px-3 py-2.5 text-xs leading-loose">
              <span className="font-bold">Changes:</span> updated service penetration
              location · updated slab note · added detail reference 7
            </p>
            <ButtonPrimary className="mt-2.5 h-10 w-full text-xs">
              Review Impact
            </ButtonPrimary>
          </Card>

          <div className="rounded-2xl border-[1.5px] border-bad-line bg-bad-bg p-5 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-bad">
              <Warning size={22} />
            </div>
            <div className="mt-2.5 font-display text-xl text-bad">Superseded Drawing</div>
            <p className="mt-1.5 text-[13px] leading-relaxed">
              You opened <span className="font-bold">S-204 Rev S03</span>. This revision
              has been replaced by <span className="font-bold">S04</span>.
              <br />
              <span className="font-bold text-bad">Do not use for construction.</span>
            </p>
            <ButtonPrimary className="mt-3 w-full">
              View Current Revision (S04)
            </ButtonPrimary>
            <div className="mt-2 text-xs font-semibold text-bronze">View History</div>
          </div>
        </div>
      </div>
    </div>
  );
}
