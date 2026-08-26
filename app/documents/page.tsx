import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  Card,
  Chip,
  LinkHint,
  PageHeader,
  SectionLabel,
  StatTile,
} from "@/components/ui";
import { Filter, Search } from "@/components/icons";

export const metadata: Metadata = { title: "Documents" };

const tree = [
  { label: "All Documents", count: 246 },
  { label: "Drawings", count: 38, active: true },
  { label: "Contracts", count: 12 },
  { label: "Approvals", count: 8 },
  { label: "Inspections", count: 14 },
  { label: "Certificates", count: 21 },
  { label: "Evidence", count: 96 },
  { label: "Handover", count: 4 },
];

export default function DocumentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader
        title="Documents"
        subtitle="18 Rivergum Street · BR-2026-018"
        action={
          <span className="hidden lg:block">
            <ButtonPrimary>Upload Document</ButtonPrimary>
          </span>
        }
      />

      <div className="mt-3 grid grid-cols-5 gap-1.5 lg:max-w-xl">
        <StatTile value="246" label="Docs" />
        <StatTile value="38" label="Current" tone="good" />
        <StatTile value="12" label="Review" tone="warn" border="border-warn-line" />
        <StatTile value="94" label="Supers." tone="slate" />
        <StatTile value="3" label="Missing" tone="bad" border="border-bad-line" />
      </div>

      <div className="mt-3 flex h-11 items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 lg:max-w-xl">
        <Search size={15} className="text-faint" />
        <input
          placeholder="Search documents — try “slab reinforcement”"
          className="w-full bg-transparent text-[13px] outline-none placeholder:text-faint"
        />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          <Chip active>All</Chip>
          <Chip>Drawings</Chip>
          <Chip>Certificates</Chip>
          <Chip>Evidence</Chip>
          <Chip>Contracts</Chip>
          <Chip>Approvals</Chip>
        </div>
        <button
          aria-label="Filter"
          className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full border border-input bg-card"
        >
          <Filter size={15} />
        </button>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[210px_1fr] lg:items-start">
        {/* Desktop document tree */}
        <Card className="hidden p-3 text-[13px] lg:block">
          <SectionLabel tone="faint" className="px-2 pb-2 text-[10px]">
            Document Tree
          </SectionLabel>
          {tree.map((node) => (
            <div
              key={node.label}
              className={`flex justify-between rounded-lg px-2.5 py-[7px] ${
                node.active
                  ? "bg-hairline font-bold text-navy"
                  : "font-semibold text-muted"
              }`}
            >
              <span>{node.label}</span>
              <span className="font-normal text-faint">{node.count}</span>
            </div>
          ))}
        </Card>

        {/* Results */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[13px] font-bold">
                  Structural Slab Plan · S-204 · Rev S04
                </div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Structural · Slab · Issued 24 Aug 2026
                </div>
              </div>
              <Badge tone="good" className="text-[9px]">
                ISSUED FOR CONSTRUCTION
              </Badge>
            </div>
            <div className="mt-2 flex justify-end">
              <LinkHint>Open</LinkHint>
            </div>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3">
            <div className="min-w-0">
              <div className="text-[13px] font-bold">RFI-014 Response</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Structural · linked to S-204 S05
              </div>
            </div>
            <Badge tone="good">Approved</Badge>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3">
            <div className="min-w-0">
              <div className="text-[13px] font-bold">Inspection-Result-026.pdf</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Inspection record · David Wong · 26 Aug
              </div>
            </div>
            <Badge tone="good">Accepted</Badge>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              OCR Result — &ldquo;penetration&rdquo;
            </SectionLabel>
            <div className="rounded-[10px] bg-surface px-3 py-2.5">
              <div className="text-[11px] text-faint">
                Structural Slab Plan S-204 Rev S04 · Page 4
              </div>
              <p className="mt-1 text-[13px] leading-relaxed">
                …confirm{" "}
                <mark className="rounded-[3px] bg-gold-soft px-0.5 font-bold text-bronze">
                  service penetration location
                </mark>{" "}
                against detail 7 prior to pour…
              </p>
            </div>
            <div className="mt-2 flex justify-end">
              <LinkHint>Open Document</LinkHint>
            </div>
          </Card>

          {/* Desktop register table */}
          <Card className="hidden overflow-hidden lg:block">
            <div className="border-b border-border px-5 py-3 text-sm font-bold">
              Structural Drawings
            </div>
            <div className="grid grid-cols-[1.8fr_0.6fr_0.8fr_1.4fr_0.9fr_0.8fr] gap-3 border-b border-border bg-paper px-5 py-2.5 text-[10px] font-bold uppercase tracking-wide text-faint">
              <span>Name</span>
              <span>Rev</span>
              <span>Stage</span>
              <span>Status</span>
              <span>Owner</span>
              <span>Updated</span>
            </div>
            {[
              {
                name: "S-204 Structural Slab Plan",
                rev: "S04",
                stage: "Slab",
                status: <Badge tone="good" className="text-[9px]">ISSUED FOR CONSTRUCTION</Badge>,
                owner: "E. Chen",
                updated: "24 Aug",
                highlight: true,
              },
              {
                name: "S-201 Footing Layout",
                rev: "S02",
                stage: "Footings",
                status: <Badge tone="slate" className="text-[9px]">AS BUILT</Badge>,
                owner: "E. Chen",
                updated: "23 Aug",
              },
              {
                name: "S-208 Frame Bracing Plan",
                rev: "S01",
                stage: "Frame",
                status: <Badge tone="warn" className="text-[9px]">FOR APPROVAL</Badge>,
                owner: "E. Chen",
                updated: "25 Aug",
              },
              {
                name: "S-204 Structural Slab Plan",
                rev: "S03",
                stage: "Slab",
                status: (
                  <span className="inline-flex rounded-full bg-bad px-2 py-0.5 text-[9px] font-bold text-white">
                    SUPERSEDED
                  </span>
                ),
                owner: "E. Chen",
                updated: "20 Aug",
                dim: true,
              },
            ].map((row, i, arr) => (
              <div
                key={`${row.name}-${row.rev}`}
                className={`grid grid-cols-[1.8fr_0.6fr_0.8fr_1.4fr_0.9fr_0.8fr] items-center gap-3 px-5 py-3 text-[13px] ${
                  i < arr.length - 1 ? "border-b border-hairline" : ""
                } ${row.highlight ? "bg-paper" : ""} ${row.dim ? "opacity-70" : ""}`}
              >
                <span className={row.highlight ? "font-bold" : "font-semibold"}>
                  {row.name}
                </span>
                <span className="font-semibold">{row.rev}</span>
                <span className="text-muted">{row.stage}</span>
                <span>{row.status}</span>
                <span className="text-muted">{row.owner}</span>
                <span className="text-muted">{row.updated}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
