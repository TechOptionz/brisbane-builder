import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  Card,
  Chip,
  LinkHint,
  SectionLabel,
  StatTile,
} from "@/components/ui";
import { Camera, Plus, Search } from "@/components/icons";

export const metadata: Metadata = { title: "Defects" };

const registerRows = [
  {
    id: "DEF-026",
    title: "Reinforcement position requires rectification",
    loc: "Slab · Garage Edge Beam",
    severity: "Major",
    sevCls: "text-bad",
    trade: "ABC Concreting",
    due: "26 Aug",
    status: <Badge tone="info">Open</Badge>,
    highlight: true,
  },
  {
    id: "DEF-018",
    title: "Formwork edge alignment",
    loc: "Slab · South edge",
    severity: "Minor",
    sevCls: "text-warn",
    trade: "ABC Concreting",
    due: "24 Aug",
    dueOver: true,
    status: <Badge tone="gold">In Rectification</Badge>,
  },
  {
    id: "DEF-024",
    title: "Penetration seal incomplete",
    loc: "Slab · Wet area",
    severity: "Minor",
    sevCls: "text-warn",
    trade: "Plumbing Trade",
    due: "27 Aug",
    status: <Badge tone="warn">Ready for Verification</Badge>,
  },
  {
    id: "DEF-021",
    title: "Conduit clash at edge beam",
    loc: "Slab · Garage",
    severity: "Critical",
    sevCls: "text-bad",
    trade: "Electrical Trade",
    due: "26 Aug",
    status: <Badge tone="bad">Reopened</Badge>,
  },
];

export default function DefectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-navy lg:font-display lg:text-2xl lg:font-normal">
            Defects
          </h1>
          <p className="mt-0.5 hidden text-[13px] text-muted lg:block">
            18 Rivergum Street · 12 open · 3 overdue · 4 ready for verification
          </p>
        </div>
        <button
          aria-label="Report defect"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-surface lg:hidden"
        >
          <Plus size={17} />
        </button>
        <ButtonPrimary className="hidden lg:block">Report Defect</ButtonPrimary>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 lg:max-w-md">
        <StatTile value="12" label="Open" />
        <StatTile value="3" label="Overdue" tone="bad" border="border-bad-line" />
        <StatTile value="4" label="To Verify" tone="warn" border="border-warn-line" />
        <StatTile value="8" label="Closed Wk" tone="good" />
      </div>

      <div className="mt-3 flex h-10 items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 lg:max-w-xl">
        <Search size={14} className="text-faint" />
        <input
          placeholder="Search defect ID, location or trade"
          className="w-full bg-transparent text-xs outline-none placeholder:text-faint"
        />
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        <Chip active>Open</Chip>
        <Chip>Overdue</Chip>
        <Chip>Ready for Verification</Chip>
        <Chip>Closed</Chip>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr] lg:items-start">
        {/* Register */}
        <div className="flex flex-col gap-2.5">
          {registerRows.map((row) => (
            <Card
              key={row.id}
              className={`p-4 ${row.highlight ? "lg:bg-paper" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[13px] font-bold">
                    {row.id} · {row.title}
                  </div>
                  <div className="mt-0.5 text-[11px] text-faint">
                    {row.loc} · {row.trade} ·{" "}
                    <span className={`font-bold ${row.sevCls}`}>{row.severity}</span> ·
                    due{" "}
                    <span className={row.dueOver ? "font-semibold text-bad" : ""}>
                      {row.due}
                    </span>
                  </div>
                </div>
                {row.status}
              </div>
              <div className="mt-2 flex justify-end">
                <LinkHint>View Defect</LinkHint>
              </div>
            </Card>
          ))}

          {/* Quick capture (3l) */}
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2.5">
              Report Defect — quick capture
            </SectionLabel>
            <button className="flex h-[50px] w-full items-center justify-center gap-2.5 rounded-[11px] bg-navy text-[13px] font-semibold text-surface">
              <Camera size={17} /> Take Photo First
            </button>
            <input
              placeholder="Title…"
              className="mt-2 h-10 w-full rounded-[10px] border border-input bg-card px-3 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <div className="mt-2 flex gap-2">
              <span className="flex h-10 flex-1 items-center justify-center rounded-full border border-input text-xs font-semibold">
                Minor
              </span>
              <span className="flex h-10 flex-1 items-center justify-center rounded-full border-[1.5px] border-bad bg-bad-bg text-xs font-bold text-bad">
                Major
              </span>
              <span className="flex h-10 flex-1 items-center justify-center rounded-full border border-input text-xs font-semibold">
                Critical
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                ABC Concreting ▾
              </div>
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                Due 26 Aug
              </div>
            </div>
            <ButtonPrimary className="mt-2.5 w-full">Create Defect</ButtonPrimary>
            <p className="mt-1.5 text-center text-[10px] text-faint">
              Location, description and links can be completed afterwards.
            </p>
          </Card>
        </div>

        {/* Detail + rectification + verification (3m/3n/3o) */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[17px] font-bold text-navy">DEF-026</div>
                <div className="text-[11px] text-faint">
                  Reinforcement position requires rectification
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge tone="info">Open</Badge>
                <Badge tone="bad">Major</Badge>
              </div>
            </div>
            <div className="relative mt-3 flex h-[110px] items-center justify-center gap-2 rounded-[14px] bg-[#E4E0D5] text-faint">
              <Camera size={24} strokeWidth={1.5} />
              <span className="text-[11px]">Annotated defect photo</span>
              <span className="absolute left-3 top-2.5 h-[26px] w-[26px] rounded-full border-[2.5px] border-bad" />
            </div>
            <div className="mt-2.5">
              {[
                { label: "Stage · Location", value: "Slab · Garage Edge Beam" },
                { label: "Trade · Assigned", value: "ABC Concreting · Rick Cole" },
                { label: "Created", value: "M. Turner · 26 Aug · 11:50 AM" },
                { label: "Due · Drawing", value: "26 Aug 12:00 PM · S-204 S04", last: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`flex justify-between py-2 text-xs ${
                    row.last ? "" : "border-b border-hairline"
                  }`}
                >
                  <span className="text-faint">{row.label}</span>
                  <span className="font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Rectify Defect — trade view
            </SectionLabel>
            <textarea
              placeholder="Rectification note (required)…"
              className="min-h-[44px] w-full resize-none rounded-[10px] border border-input bg-card px-3 py-2.5 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <div className="mt-2 flex gap-2">
              <div className="flex-1">
                <div className="mb-1 text-[10px] font-bold text-faint">BEFORE</div>
                <div className="flex h-16 items-center justify-center rounded-[10px] bg-[#E4E0D5] text-faint">
                  <Camera size={16} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-1 text-[10px] font-bold text-good">
                  AFTER (required)
                </div>
                <button className="flex h-16 w-full items-center justify-center gap-1 rounded-[10px] border-[1.5px] border-dashed border-input text-bronze">
                  <Plus size={14} />
                  <span className="text-[10px] font-bold">Add</span>
                </button>
              </div>
            </div>
            <ButtonPrimary className="mt-2.5 w-full">
              Submit for Verification
            </ButtonPrimary>
            <p className="mt-1.5 text-center text-[10px] text-faint">
              Does not close the defect — returns to Michael Turner for verification.
            </p>
          </Card>

          <Card tone="warn" className="p-4">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-label text-warn">
              Verification — supervisor
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="mb-1 text-[10px] font-bold text-faint">BEFORE</div>
                <div className="h-14 rounded-[9px] bg-[#E4E0D5]" />
              </div>
              <div className="flex-1">
                <div className="mb-1 text-[10px] font-bold text-good">AFTER</div>
                <div className="h-14 rounded-[9px] bg-[#DCE8DE]" />
              </div>
            </div>
            <p className="mt-2 text-[11px] text-muted">
              &ldquo;Bars repositioned and re-tied per S04.&rdquo; — Rick Cole, ABC
              Concreting
            </p>
            <div className="mt-2.5 flex gap-2.5">
              <button className="h-10 flex-[1.3] rounded-[10px] bg-navy text-xs font-semibold text-surface">
                Close Defect
              </button>
              <button className="h-10 flex-1 rounded-[10px] border border-warn-line bg-card text-xs font-semibold text-amber">
                Return for Rectification
              </button>
            </div>
          </Card>

          <div className="flex flex-col gap-2">
            <Card tone="good" className="flex items-center justify-between px-3.5 py-3">
              <span className="text-xs">
                <span className="font-bold text-good">Closed</span> · verified by
                Michael Turner · 26 Aug · 2:18 PM
              </span>
              <span className="text-good">✓</span>
            </Card>
            <div className="flex items-center justify-between rounded-xl border border-bad-soft bg-card px-3.5 py-3">
              <span className="text-xs">
                <span className="font-bold text-bad">Reopened</span>
                <span className="ml-1.5 text-[11px] text-faint">
                  reason required · reopen count retained
                </span>
              </span>
              <LinkHint>Reopen</LinkHint>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-warn-line bg-gold-tint px-3.5 py-3">
              <div>
                <div className="text-xs font-bold text-warn">
                  DEF-018 overdue by 2 days
                </div>
                <div className="mt-0.5 text-[10px] text-faint">
                  ABC Concreting · Minor · due 24 Aug
                </div>
              </div>
              <span className="flex gap-2.5 text-xs font-semibold">
                <span className="text-bronze">Follow Up</span>
                <span className="text-bad">Escalate</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
