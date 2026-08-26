import type { Metadata } from "next";
import {
  Badge,
  ButtonGhost,
  ButtonPrimary,
  Card,
  PageHeader,
  SectionLabel,
} from "@/components/ui";
import { ArrowRight, Camera, ChevronDown } from "@/components/icons";

export const metadata: Metadata = { title: "Evidence" };

export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader title="Evidence" subtitle="Slab → Reinforcement · 18 Rivergum Street" />

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Photo capture (3f) */}
        <div className="flex flex-col gap-2.5">
          <button className="flex h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-navy text-sm font-semibold text-surface">
            <Camera size={18} /> Take Photo
          </button>
          <ButtonGhost className="h-[46px] w-full">Choose Existing</ButtonGhost>

          <div className="relative flex h-[150px] items-center justify-center rounded-2xl bg-[#E4E0D5] text-faint">
            <Camera size={30} strokeWidth={1.5} />
            <span className="absolute bottom-2.5 right-3 rounded-full bg-navy/70 px-2.5 py-0.5 text-[10px] font-semibold text-surface">
              26 Aug · 8:34 AM · M. Turner
            </span>
          </div>

          <div className="flex gap-2">
            {[
              { label: "Arrow", icon: <ArrowRight size={13} className="text-bronze" /> },
              {
                label: "Circle",
                icon: (
                  <span className="inline-block h-3 w-3 rounded-full border-2 border-bronze" />
                ),
              },
              { label: "Draw", icon: <span className="text-bronze">〰</span> },
              { label: "T", icon: null, bold: true },
            ].map((tool) => (
              <button
                key={tool.label}
                className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-[10px] border border-input bg-card text-xs font-semibold"
              >
                {tool.icon}
                <span className={tool.bold ? "font-bold" : ""}>{tool.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input
              placeholder="Caption…"
              className="h-10 rounded-[10px] border border-input bg-card px-3 text-xs outline-none placeholder:text-faint focus:border-gold"
            />
            <div className="flex h-10 items-center rounded-[10px] border border-input bg-card px-3 text-xs">
              Garage Edge Beam
            </div>
          </div>
          <div className="flex h-10 items-center justify-between rounded-[10px] border border-input bg-card px-3 text-xs">
            <span>Linked: Checklist · Reinforcement</span>
            <ChevronDown size={14} className="text-faint" />
          </div>
          <ButtonPrimary className="h-12 w-full">Save Photo Evidence</ButtonPrimary>

          <div className="mt-1 flex flex-col gap-1.5">
            <div className="flex items-center justify-between rounded-[10px] border border-border px-3 py-2.5">
              <span className="text-xs font-semibold text-info">Uploading… 64%</span>
              <div className="h-1.5 w-24 rounded-full bg-track">
                <div className="h-1.5 w-[64%] rounded-full bg-info" />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-[10px] border border-border px-3 py-2.5">
              <span className="text-xs font-semibold text-muted">Queued offline</span>
              <span className="text-[11px] text-faint">Will sync when connected</span>
            </div>
            <div className="flex items-center justify-between rounded-[10px] border border-bad-soft px-3 py-2.5">
              <span className="text-xs font-semibold text-bad">Upload failed</span>
              <span className="text-xs font-bold text-bad underline">Retry</span>
            </div>
          </div>
        </div>

        {/* Evidence library (3g) */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <SectionLabel>Evidence Library</SectionLabel>
            <span className="text-[11px] text-faint">Filters: stage · type · date</span>
          </div>

          <Card className="flex gap-3 p-3.5">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] bg-[#E4E0D5] text-faint">
              <Camera size={16} strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-bold">Slab Reinforcement · 3 photos</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Checklist: Reinforcement · Michael Turner · 8:42 AM
              </div>
              <Badge tone="good" className="mt-1">
                Uploaded
              </Badge>
            </div>
          </Card>

          <div className="flex gap-3 rounded-2xl border border-warn-line bg-gold-tint p-3.5">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] bg-[#E4E0D5] text-faint">
              <Camera size={16} strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-bold text-warn">Link Required</div>
              <p className="mt-0.5 text-[11px] leading-snug text-muted">
                This photo has no context. Select a stage, task, checklist, defect, RFI
                or inspection.
              </p>
              <span className="mt-1 inline-block text-xs font-semibold text-bronze">
                Link Now ›
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-warn-line bg-gold-tint px-3.5 py-3">
            <span className="text-warn">⚠</span>
            <div className="flex-1">
              <div className="text-xs font-bold text-warn">Photo requires review</div>
              <div className="text-[11px] text-muted">
                The image is too dark to verify clearly.
              </div>
            </div>
            <span className="shrink-0 text-xs font-bold text-bronze">Retake</span>
          </div>

          <Card tone="good" className="flex items-center justify-between px-3.5 py-3">
            <span className="text-xs font-bold text-good">
              ✓ 3 / 3 required — all evidence uploaded
            </span>
            <button className="h-9 shrink-0 rounded-lg bg-navy px-3.5 text-xs font-semibold text-surface">
              Complete Item
            </button>
          </Card>

          <p className="text-[10px] leading-relaxed text-faint">
            Unsynced evidence cannot be deleted accidentally. Photos capture project,
            stage, author, time and location automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
