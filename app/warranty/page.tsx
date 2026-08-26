import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  ButtonSoft,
  Card,
  FlowSteps,
  PageHeader,
  SectionLabel,
} from "@/components/ui";
import { Plus } from "@/components/icons";

export const metadata: Metadata = { title: "Warranty" };

export default function WarrantyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader title="Warranty" subtitle="18 Rivergum Street · post-handover" />

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <SectionLabel tone="faint">Warranty Period</SectionLabel>
                <div className="mt-1 text-[15px] font-bold">
                  Started 18 Dec 2026 · 12 months
                </div>
              </div>
              <Badge tone="good" className="px-3 py-1 text-[11px]">
                Active
              </Badge>
            </div>
            <div className="mt-3 flex justify-between border-t border-hairline pt-3 text-xs text-muted">
              <span>
                Open claims: <span className="font-bold text-warn">2</span>
              </span>
              <span>
                Resolved: <span className="font-bold text-good">3</span>
              </span>
            </div>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Report an Issue — client
            </SectionLabel>
            <input
              defaultValue="Bathroom leak concern"
              className="h-10 w-full rounded-[10px] border border-input bg-card px-3 text-xs outline-none focus:border-gold"
            />
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3 text-xs">
                Ensuite ▾
              </div>
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3 text-xs">
                Plumbing ▾
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <div className="h-[52px] w-[52px] rounded-[10px] bg-[#E4E0D5]" />
              <div className="h-[52px] w-[52px] rounded-[10px] bg-[#E4E0D5]" />
              <div className="h-[52px] w-[52px] rounded-[10px] bg-[#E4E0D5]" />
              <button
                aria-label="Add photo"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] border-[1.5px] border-dashed border-input text-bronze"
              >
                <Plus size={14} />
              </button>
            </div>
            <ButtonPrimary className="mt-2.5 w-full">Submit Claim</ButtonPrimary>
          </Card>

          <Card className="p-4">
            <div className="mb-2 text-sm font-bold">Warranty Detail</div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <div>
                <div className="text-[10px] text-faint">Product</div>
                <div className="mt-0.5 font-semibold">Hot Water System</div>
              </div>
              <div>
                <div className="text-[10px] text-faint">Supplier · Contact</div>
                <div className="mt-0.5 font-semibold">HydroFlow · 07 3555 0192</div>
              </div>
              <div>
                <div className="text-[10px] text-faint">Period</div>
                <div className="mt-0.5 font-semibold">18 Dec 2026 – 18 Dec 2031</div>
              </div>
              <div>
                <div className="text-[10px] text-faint">Claims</div>
                <div className="mt-0.5 font-semibold">0</div>
              </div>
            </div>
            <ButtonSoft className="mt-2.5 h-10 w-full text-xs">
              Create Warranty Claim
            </ButtonSoft>
          </Card>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Claim Management — builder
            </SectionLabel>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">
                  WC-004 · Bathroom leak concern
                </div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Ensuite · assigned Plumbing Trade · 3 photos
                </div>
              </div>
              <Badge tone="info">Scheduled</Badge>
            </div>
            <div className="mt-3">
              <FlowSteps
                steps={["Submitted", "Reviewing", "Assigned", "Scheduled", "Completed"]}
                current={3}
              />
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-faint">
              Repair visit 8 Jan 2027 · 9:00 AM. Claims close only after completion
              evidence is reviewed — never automatically.
            </p>
          </Card>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between rounded-[10px] border border-border border-l-[3px] border-l-gold bg-card px-3 py-2.5">
              <span className="text-xs font-semibold">
                Warranty claim received — WC-004
              </span>
              <span className="text-[11px] font-semibold text-bronze">Review ›</span>
            </div>
            <div className="flex items-center justify-between rounded-[10px] border border-border bg-card px-3 py-2.5 opacity-85">
              <span className="text-xs font-semibold">
                Inspection scheduled — 8 Jan, 9:00 AM
              </span>
              <span className="text-[11px] text-faint">1d</span>
            </div>
            <div className="flex items-center justify-between rounded-[10px] border border-border bg-card px-3 py-2.5 opacity-85">
              <span className="text-xs font-semibold">Repair completed — WC-002</span>
              <span className="text-[11px] text-faint">3d</span>
            </div>
            <div className="flex items-center justify-between rounded-[10px] border border-warn-line border-l-[3px] border-l-warn bg-card px-3 py-2.5">
              <span className="text-xs font-semibold text-warn">
                Roof membrane warranty expiring — 18 Feb
              </span>
              <span className="text-[11px] font-semibold text-bronze">View ›</span>
            </div>
          </div>

          <Card className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold">Warranties</span>
              <span className="text-[11px] text-faint">18 active · 2 expiring soon</span>
            </div>
            <div className="flex items-center justify-between border-b border-hairline py-2">
              <div>
                <div className="text-xs font-bold">Hot Water System</div>
                <div className="mt-0.5 text-[10px] text-faint">
                  HydroFlow Supplies · 18 Dec 2026 – 18 Dec 2031
                </div>
              </div>
              <Badge tone="good">Active</Badge>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="text-xs font-bold">Roof Membrane</div>
                <div className="mt-0.5 text-[10px] text-faint">expires 18 Feb 2027</div>
              </div>
              <Badge tone="warn">Expiring Soon</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
