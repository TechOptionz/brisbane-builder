import type { Metadata } from "next";
import {
  Badge,
  ButtonGhost,
  ButtonPrimary,
  Card,
  PageHeader,
  SectionLabel,
} from "@/components/ui";

export const metadata: Metadata = { title: "RFIs" };

const tabs = ["Open", "Awaiting", "Answered", "Closed"];

export default function RfisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader title="RFIs" subtitle="Requests for Information · 18 Rivergum Street" />

      <div className="mt-3 flex border-b border-border">
        {tabs.map((tab, i) => (
          <span
            key={tab}
            className={`px-3 py-2 text-[13px] ${
              i === 1
                ? "border-b-2 border-gold font-semibold text-navy"
                : "text-muted"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">
                  RFI-014 · Service penetration location clarification
                </div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Slab · Structural / Electrical · raised by M. Turner
                </div>
              </div>
              <Badge tone="warn">Awaiting Response</Badge>
            </div>
            <div className="mt-2 border-t border-hairline pt-2 text-[11px] text-muted">
              Assigned: Emily Chen, Structural Engineer · Due 26 Aug 3:00 PM · Age 1 day
            </div>
          </Card>

          {/* New RFI (3r) */}
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              New RFI
            </SectionLabel>
            <input
              placeholder="Subject…"
              className="h-10 w-full rounded-[10px] border border-input bg-card px-3 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <textarea
              placeholder="Question…"
              className="mt-2 min-h-[52px] w-full resize-none rounded-[10px] border border-input bg-card px-3 py-2.5 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              {["Structural ▾", "Emily Chen ▾", "Due 26 Aug 3 PM", "Link: S-204 S04 ▾"].map(
                (field) => (
                  <div
                    key={field}
                    className="flex h-10 items-center rounded-[10px] border border-input px-3"
                  >
                    {field}
                  </div>
                ),
              )}
            </div>
            <ButtonPrimary className="mt-2.5 w-full">Submit RFI</ButtonPrimary>
          </Card>

          {/* Decisions (3u) */}
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Decisions
            </SectionLabel>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">
                  DEC-008 · Use revised service penetration location
                </div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Sarah Collins · 26 Aug · Source: RFI-014 · Drawing S-204 Rev S05
                </div>
              </div>
              <Badge tone="good">Recorded</Badge>
            </div>
            <p className="mt-2 text-[10px] text-faint">
              Read-only after recording unless formally amended.
            </p>
          </Card>
        </div>

        {/* Response thread (3s/3t) */}
        <Card className="p-4">
          <SectionLabel tone="faint" className="mb-2">
            Response Received
          </SectionLabel>
          <div className="rounded-[11px] bg-surface px-3 py-2.5">
            <div className="text-[10px] text-faint">Question · M. Turner · 8:55 AM</div>
            <p className="mt-1 text-xs leading-relaxed">
              Confirm revised penetration location at garage edge beam per site photo.
            </p>
          </div>
          <div className="mt-2 rounded-[11px] bg-info-bg px-3 py-2.5">
            <div className="text-[10px] font-bold text-info">
              Response · Emily Chen · 2:10 PM
            </div>
            <p className="mt-1 text-xs leading-relaxed">
              Relocate 90 mm north per updated detail. Revised drawing S-204 Rev S05
              issued.
            </p>
            <div className="mt-1.5 text-[11px] font-bold text-info">
              Attached: S-204 Rev S05
            </div>
          </div>
          <div className="mt-2.5 flex gap-2.5">
            <ButtonPrimary className="h-11 flex-[1.2] text-xs">Close RFI</ButtonPrimary>
            <ButtonGhost className="h-11 flex-1 text-xs">
              Request Clarification
            </ButtonGhost>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-faint">
            RFIs never close automatically on response — supervisor/PM reviews first.
          </p>
        </Card>
      </div>
    </div>
  );
}
