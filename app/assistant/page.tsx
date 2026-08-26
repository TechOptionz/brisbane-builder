import type { Metadata } from "next";
import {
  Badge,
  Card,
  LinkHint,
  Row,
  SectionLabel,
  SourceChip,
} from "@/components/ui";
import { ArrowRight, Spark, SparkSmall } from "@/components/icons";

export const metadata: Metadata = { title: "Builder AI" };

const quickQuestions = [
  "Why is this project delayed?",
  "Which certificates are missing?",
  "Show overdue defects",
  "Summarise this week",
];

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[78%] rounded-2xl rounded-br-[4px] bg-navy px-4 py-2.5 text-[13px] text-surface">
        {children}
      </div>
    </div>
  );
}

function AiBubble({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl rounded-bl-[4px] border border-border bg-card px-4 py-3.5">
      <div className="mb-2 flex items-center gap-1.5">
        <SparkSmall size={13} className="text-gold" />
        <span className="text-[10px] font-bold tracking-wider text-bronze">{label}</span>
      </div>
      {children}
    </div>
  );
}

export default function AssistantPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy">
          <Spark size={18} className="text-gold" />
        </div>
        <div>
          <h1 className="font-display text-2xl text-navy lg:text-[24px]">Builder AI</h1>
          <p className="text-[11px] text-faint">
            18 Rivergum Street · AI analysis, not certification
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-[1.7fr_1fr] lg:items-start">
        {/* Conversation column */}
        <div className="flex flex-col gap-3">
          <p className="text-sm leading-relaxed">
            Good morning Daniel. Here are today&apos;s important items.
          </p>

          <Card tone="gold" className="bg-card p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">Slab Gate Risk</span>
              <Badge tone="bad">High Attention</Badge>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              The Slab Pre-Pour gate is blocked by missing reinforcement evidence and a
              pending inspection result.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <SourceChip>Checklist · Reinforcement</SourceChip>
              <SourceChip>Inspection · Pre-Pour</SourceChip>
              <SourceChip>Evidence</SourceChip>
            </div>
            <div className="mt-2.5 flex items-center justify-between">
              <span className="text-[10px] text-faint">
                Confidence: High · based on project records
              </span>
              <button className="h-9 rounded-lg bg-navy px-3.5 text-xs font-semibold text-surface">
                Review Gate
              </button>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">Programme Delay Risk</span>
              <Badge tone="warn">Medium</Badge>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              Current delay 2 days. Main contributors: inspection availability, window
              lead time.
            </p>
            <div className="mt-2 flex justify-end">
              <LinkHint>View Analysis</LinkHint>
            </div>
          </Card>

          <SectionLabel className="mt-1.5">Quick Questions</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                className="rounded-full border border-input bg-card px-3.5 py-2 text-xs font-semibold"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-2.5">
            <UserBubble>Why is slab delayed?</UserBubble>
            <AiBubble label="AI ANALYSIS">
              <p className="text-[13px] leading-relaxed">
                The slab stage is currently <span className="font-bold">2 days behind</span>.
                Primary reasons:
              </p>
              <p className="mt-1.5 text-[13px] leading-loose">
                1. Inspection availability changed (moved 2 hours, then rescheduled)
                <br />
                2. Reinforcement evidence incomplete (2 of 3 photos)
              </p>
              <div className="mt-2.5 rounded-[10px] bg-surface px-3 py-2.5">
                <div className="mb-1 text-[10px] font-bold tracking-wider text-faint">
                  RECOMMENDED — requires your action
                </div>
                <div className="text-xs leading-relaxed">
                  • Upload remaining evidence
                  <br />• Confirm inspection availability
                </div>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <SourceChip>Checklist · Reinforcement</SourceChip>
                <SourceChip>Inspection · Slab Pre-Pour</SourceChip>
                <SourceChip>Task · Under-Slab Services</SourceChip>
              </div>
              <div className="mt-2 flex justify-end">
                <LinkHint>View Records</LinkHint>
              </div>
            </AiBubble>

            <UserBubble>
              What does the latest structural drawing say about service penetrations?
            </UserBubble>
            <AiBubble label="DOCUMENT Q&A">
              <p className="text-[13px] leading-relaxed">
                Based on <span className="font-bold">S-204 Rev S04</span> (page 4, issued
                24 Aug), the penetration at the garage edge beam was relocated 90&nbsp;mm
                north per detail 7, following RFI-014.
              </p>
              <div className="mt-2 flex items-center justify-between rounded-[10px] bg-surface px-3 py-2">
                <div>
                  <div className="text-[11px] font-bold">S-204 · Rev S04 · Page 4</div>
                  <div className="text-[10px] text-faint">
                    Structural Slab Plan · CURRENT
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-bronze">Open ›</span>
              </div>
            </AiBubble>
          </div>

          {/* Input bar */}
          <div className="sticky bottom-[84px] mt-1 flex items-center gap-2.5 rounded-2xl border border-border bg-card p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] lg:bottom-4">
            <input
              placeholder="Ask about this project…"
              className="h-11 flex-1 rounded-xl border border-input bg-card px-3.5 text-[13px] outline-none placeholder:text-faint focus:border-gold"
            />
            <button
              aria-label="Send"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          <p className="text-center text-[10px] text-faint">
            AI suggests — the user executes. Nothing is actioned automatically.
          </p>
        </div>

        {/* Sources / side panel (desktop from 8s) */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <SectionLabel className="mb-2">Sources</SectionLabel>
            <Row
              title="Checklist · Reinforcement"
              meta="2 of 3 photos · Before Work"
              right={<LinkHint>Open</LinkHint>}
            />
            <Row
              title="Inspection · Slab Pre-Pour"
              meta="Scheduled 26 Aug · 10:30 AM"
              right={<LinkHint>Open</LinkHint>}
            />
            <Row
              title="Drawing · S-204 Rev S04"
              meta="CURRENT · issued 24 Aug"
              right={<LinkHint>Open</LinkHint>}
            />
            <Row
              title="Lead-time · Window Package"
              meta="Required 6 Sep · expected 9 Sep"
              right={<LinkHint>Open</LinkHint>}
              last
            />
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-1.5">
              Suggested Actions
            </SectionLabel>
            <Row title="Upload reinforcement evidence" right={<LinkHint>Open</LinkHint>} />
            <Row title="Confirm inspection" right={<LinkHint>Open</LinkHint>} />
            <Row title="Follow up supplier" right={<LinkHint>Open</LinkHint>} last />
            <p className="mt-2 text-[10px] text-faint">
              All actions require user confirmation — never automatic.
            </p>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-1.5">
              Confidence &amp; Scope
            </SectionLabel>
            <p className="text-xs leading-relaxed text-muted">
              Confidence: <span className="font-bold text-ink">High</span> — based on
              project records, documents and activity history. Responses respect your
              permission scope; restricted records are never summarised.
            </p>
          </Card>

          <div className="rounded-xl border border-warn-line bg-gold-tint px-3.5 py-2.5 text-[11px] leading-relaxed">
            <span className="font-bold text-bronze">Client view:</span> only approved
            summaries are shown — no commercial analysis, supplier data or internal
            defect discussion.
          </div>
        </div>
      </div>
    </div>
  );
}
