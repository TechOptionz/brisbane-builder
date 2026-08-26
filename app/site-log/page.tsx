import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  Card,
  PageHeader,
  SectionLabel,
} from "@/components/ui";
import { Check } from "@/components/icons";

export const metadata: Metadata = { title: "Site Log" };

export default function SiteLogPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader
        title="Site Log"
        subtitle="26 Aug 2026 · Michael Turner"
        action={
          <Badge tone="slate" className="px-2.5 py-1 text-[11px]">
            Draft
          </Badge>
        }
      />

      <div className="mt-4 flex flex-col gap-2.5">
        <Card className="p-4">
          <SectionLabel tone="faint" className="mb-2">
            Trades On Site
          </SectionLabel>
          {[
            { name: "ABC Concreting", count: "5 workers" },
            { name: "Electrical Trade", count: "2 workers" },
            { name: "Plumbing Trade", count: "2 workers", last: true },
          ].map((t) => (
            <div
              key={t.name}
              className={`flex justify-between py-1.5 text-xs ${
                t.last ? "" : "border-b border-hairline"
              }`}
            >
              <span className="font-semibold">{t.name}</span>
              <span className="text-muted">{t.count}</span>
            </div>
          ))}
        </Card>

        <Card className="p-4">
          <SectionLabel tone="faint" className="mb-1.5">
            Work Completed
          </SectionLabel>
          <p className="text-[13px] leading-relaxed">
            Slab reinforcement and under-slab services preparation continued.
          </p>
        </Card>

        <Card tone="warn" className="p-4">
          <div className="mb-1.5 text-[11px] font-bold uppercase tracking-label text-warn">
            Delays / Disruptions
          </div>
          <div className="text-[13px] font-semibold">
            Concrete inspection booking shifted by 2 hours
          </div>
          <div className="mt-0.5 text-[11px] text-faint">
            Inspection Availability · time impact 2 hrs
          </div>
        </Card>

        <Card className="p-4">
          <SectionLabel tone="faint" className="mb-2">
            Deliveries
          </SectionLabel>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[13px] font-bold">Reinforcement Mesh</div>
              <div className="mt-0.5 text-[11px] text-faint">
                SteelCo Brisbane · 7:20 AM · DEL-2848
              </div>
            </div>
            <Check size={15} className="text-good" />
          </div>
        </Card>

        <Card className="flex items-center justify-between p-4">
          <div>
            <SectionLabel tone="faint">Site Conditions · Photos</SectionLabel>
            <p className="mt-1 text-xs text-muted">
              Overcast · access clear · 6 photos attached
            </p>
          </div>
          <span className="text-xs font-semibold text-bronze">Add Photos</span>
        </Card>

        <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3.5 py-3">
          <span className="text-xs text-muted">
            Safety event? Use the formal WHS process.
          </span>
          <span className="shrink-0 text-xs font-semibold text-bronze">
            Record Safety Event ›
          </span>
        </div>

        <ButtonPrimary className="h-12 w-full">Submit Daily Log</ButtonPrimary>
        <p className="text-center text-[10px] text-faint">
          Submitted logs are locked when finalised · actor and timestamp retained.
        </p>
      </div>
    </div>
  );
}
