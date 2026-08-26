import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  Card,
  FlowSteps,
  LinkHint,
  PageHeader,
  SectionLabel,
} from "@/components/ui";
import { Lock } from "@/components/icons";

export const metadata: Metadata = { title: "Commercial" };

const kpis = [
  { label: "Contract", value: "$425,000" },
  { label: "Budget", value: "$410,000" },
  { label: "Committed", value: "$285,000" },
  { label: "Paid", value: "$165,000", tone: "text-good" },
  { label: "Forecast", value: "$418,500" },
];

const budgetRows = [
  {
    cat: "Structure",
    budget: "$120,000",
    committed: "$116,000",
    actual: "$85,000",
    forecast: "$121,500",
    variance: "+$1,500",
    vTone: "text-amber",
  },
  {
    cat: "Concrete (Slab)",
    budget: "$38,000",
    committed: "$41,500",
    actual: "$30,000",
    forecast: "$42,000",
    variance: "+$4,000",
    vTone: "text-bad",
    highlight: true,
  },
  {
    cat: "Windows",
    budget: "$26,000",
    committed: "$0",
    actual: "$0",
    forecast: "$32,000",
    variance: "+$6,000",
    vTone: "text-bad",
  },
  {
    cat: "Site Works",
    budget: "$62,000",
    committed: "$60,400",
    actual: "$52,000",
    forecast: "$61,200",
    variance: "−$800",
    vTone: "text-good",
  },
];

export default function CommercialPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader
        title="Commercial"
        subtitle="18 Rivergum Street · BR-2026-018 · Director view"
        action={
          <span className="hidden lg:block">
            <ButtonPrimary>New Variation</ButtonPrimary>
          </span>
        }
      />

      {/* KPI band */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
        <div className="col-span-2 rounded-2xl bg-navy p-4 text-surface sm:col-span-3 lg:col-span-1 lg:order-last">
          <div className="flex items-start justify-between lg:block">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-label text-gold">
                Variance
              </div>
              <div className="mt-1 font-display text-[26px] text-bad-rose lg:text-xl">
                +$8,500
              </div>
            </div>
            <span className="rounded-full bg-bad/25 px-2.5 py-1 text-[11px] font-bold text-bad-rose lg:hidden">
              above budget
            </span>
          </div>
          <div className="mt-2 border-t border-navy-3 pt-2 text-xs text-navy-muted lg:hidden">
            Forecast final cost{" "}
            <span className="font-bold text-surface">$418,500</span>
          </div>
        </div>
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="p-3.5">
            <div className="text-[10px] font-bold uppercase tracking-wide text-faint">
              {kpi.label}
            </div>
            <div
              className={`mt-1 font-display text-lg lg:text-xl ${kpi.tone ?? "text-navy"}`}
            >
              {kpi.value}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-3 rounded-2xl border border-warn-line bg-gold-tint px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-bold text-warn">
            Cost Position — above budget
          </span>
          <LinkHint>View Risks</LinkHint>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Window variation <span className="font-bold text-ink">+$6,000</span> · Material
          increase <span className="font-bold text-ink">+$2,500</span>
        </p>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          {/* Budget table (cards on mobile, table on desktop) */}
          <Card className="overflow-hidden">
            <div className="border-b border-border px-4 py-3 text-sm font-bold lg:px-5">
              Budget by Category
            </div>
            <div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr_1fr_0.9fr] gap-3 border-b border-border bg-paper px-5 py-2.5 text-[10px] font-bold uppercase tracking-wide text-faint lg:grid">
              <span>Category</span>
              <span>Budget</span>
              <span>Committed</span>
              <span>Actual</span>
              <span>Forecast</span>
              <span>Variance</span>
            </div>
            {budgetRows.map((row, i, arr) => (
              <div
                key={row.cat}
                className={`px-4 py-3 lg:grid lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_0.9fr] lg:items-center lg:gap-3 lg:px-5 lg:text-[13px] ${
                  i < arr.length - 1 ? "border-b border-hairline" : ""
                } ${row.highlight ? "bg-paper" : ""}`}
              >
                <div className="flex items-center justify-between lg:block">
                  <span className="text-[13px] font-bold">{row.cat}</span>
                  <span className={`font-bold lg:hidden ${row.vTone}`}>
                    {row.variance}
                  </span>
                </div>
                <div className="mt-0.5 text-[10px] text-faint lg:hidden">
                  Budget {row.budget} · Committed {row.committed} · Forecast{" "}
                  {row.forecast}
                </div>
                <span className="hidden lg:block">{row.budget}</span>
                <span className="hidden lg:block">{row.committed}</span>
                <span className="hidden lg:block">{row.actual}</span>
                <span className="hidden lg:block">{row.forecast}</span>
                <span className={`hidden font-bold lg:block ${row.vTone}`}>
                  {row.variance}
                </span>
              </div>
            ))}
          </Card>

          <SectionLabel>Stage Cost Summary</SectionLabel>
          <Card className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">5 · Earthworks</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Budget $45,000 · Committed $42,000
              </div>
            </div>
            <Badge tone="good">On Track</Badge>
          </Card>
          <Card tone="warn" className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">7 · Slab</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Budget $38,000 · Committed $41,500
              </div>
            </div>
            <Badge tone="warn">At Risk</Badge>
          </Card>

          {/* POs & invoices */}
          <Card className="overflow-hidden">
            <div className="border-b border-border px-4 py-3 text-sm font-bold lg:px-5">
              Purchase Orders &amp; Invoices
            </div>
            {[
              {
                id: "PO-1042",
                supplier: "ABC Concreting",
                stage: "Slab",
                amount: "$38,000",
                status: <Badge tone="good">Approved</Badge>,
                owner: "D. Brooks",
              },
              {
                id: "INV-4421",
                supplier: "ABC Concreting",
                stage: "Slab",
                amount: "$12,500",
                status: <Badge tone="warn">Pending Approval</Badge>,
                owner: "S. Collins",
                highlight: true,
              },
              {
                id: "PO-1046",
                supplier: "SteelCo Brisbane",
                stage: "Slab",
                amount: "$6,400",
                status: <Badge tone="warn">Awaiting Invoice</Badge>,
                owner: "S. Collins",
              },
              {
                id: "VAR-004",
                supplier: "Electrical Trade",
                stage: "Rough-Ins",
                amount: "+$3,200",
                status: <Badge tone="warn">Under Review</Badge>,
                owner: "M. Turner",
              },
            ].map((row, i, arr) => (
              <div
                key={row.id}
                className={`flex items-center justify-between gap-3 px-4 py-3 lg:px-5 ${
                  i < arr.length - 1 ? "border-b border-hairline" : ""
                } ${row.highlight ? "bg-paper" : ""}`}
              >
                <div className="min-w-0">
                  <div className="text-[13px] font-bold">
                    {row.id} <span className="font-semibold text-muted">· {row.supplier}</span>
                  </div>
                  <div className="mt-0.5 text-[11px] text-faint">
                    {row.stage} · {row.amount} · {row.owner}
                  </div>
                </div>
                {row.status}
              </div>
            ))}
          </Card>

          <Card className="flex items-center gap-3 px-4 py-3">
            <Lock size={15} className="shrink-0 text-faint" />
            <p className="text-[11px] leading-relaxed text-muted">
              Roles without commercial permission see:{" "}
              <span className="font-bold text-ink">
                &ldquo;Commercial information unavailable for your role&rdquo;
              </span>{" "}
              — values are never rendered hidden.
            </p>
          </Card>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="mb-2.5 text-sm font-bold">Approvals Waiting</div>
            {[
              { title: "INV-4421 · $12,500", meta: "ABC Concreting · due 10 Sep" },
              { title: "VAR-004 · +$3,200", meta: "Rough-Ins · under review" },
              {
                title: "Window Package quote",
                meta: "3 quotes · comparison ready",
                soft: true,
                last: true,
              },
            ].map((a) => (
              <div
                key={a.title}
                className={`flex items-center justify-between py-2 ${
                  a.last ? "" : "border-b border-hairline"
                }`}
              >
                <div>
                  <div className="text-xs font-bold">{a.title}</div>
                  <div className="mt-0.5 text-[10px] text-faint">{a.meta}</div>
                </div>
                <button
                  className={`h-8 rounded-lg px-3 text-[11px] font-semibold ${
                    a.soft ? "bg-gold-soft text-bronze" : "bg-navy text-surface"
                  }`}
                >
                  {a.soft ? "Compare" : "Review"}
                </button>
              </div>
            ))}
          </Card>

          <Card className="p-4">
            <div className="mb-2.5 text-sm font-bold">Committed vs Paid</div>
            <div className="flex h-2.5 overflow-hidden rounded-full">
              <div className="w-[40%] bg-good" />
              <div className="w-[30%] bg-gold" />
              <div className="w-[30%] bg-track" />
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] text-faint">
              <span>Paid $165k</span>
              <span>Committed $120k</span>
              <span>Remaining $125k</span>
            </div>
          </Card>

          {/* Variation VAR-004 (5s) */}
          <Card className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold">
                  VAR-004 · Additional electrical changes
                </div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Rough-Ins · +$3,200 · +2 days · requested by M. Turner
                </div>
              </div>
              <Badge tone="warn">Under Review</Badge>
            </div>
            <div className="mt-3">
              <FlowSteps
                steps={["Draft", "Submitted", "Under Review", "Approved"]}
                current={2}
              />
            </div>
            <div className="mt-3 flex gap-2">
              <button className="h-10 flex-[1.2] rounded-[10px] bg-navy text-xs font-semibold text-surface">
                Approve
              </button>
              <button className="h-10 flex-1 rounded-[10px] bg-gold-soft text-xs font-semibold text-bronze">
                Request Changes
              </button>
              <button className="h-10 flex-[0.8] rounded-[10px] text-xs font-semibold text-bad">
                Reject
              </button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-faint">
              Variations are never approved automatically; rejection requires a reason.
            </p>
          </Card>

          {/* Client preview (5w) */}
          <Card tone="gold" className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-bronze">Client Preview</span>
              <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold text-navy">
                CLIENT VIEW
              </span>
            </div>
            <div className="mt-2.5 rounded-xl border border-gold-line bg-card p-3.5">
              <div className="text-[13px] font-bold">Additional electrical changes</div>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Two additional double power points and data outlet in the study, as
                requested on site.
              </p>
              <div className="mt-2.5 flex justify-between border-t border-hairline pt-2.5 text-xs">
                <span className="text-faint">Additional Cost</span>
                <span className="font-bold">+$3,200 inc GST</span>
              </div>
              <div className="mt-1.5 flex justify-between text-xs">
                <span className="text-faint">Additional Time</span>
                <span className="font-bold">+2 days</span>
              </div>
              <ButtonPrimary className="mt-3 h-11 w-full text-xs">
                Approve Variation
              </ButtonPrimary>
            </div>
            <p className="mt-2 text-[10px] text-faint">
              Client never sees supplier pricing, internal margin or internal notes.
            </p>
          </Card>

          <Card className="p-4">
            <div className="mb-2 text-sm font-bold">Forecast Drivers</div>
            {[
              { label: "Window Variation", pct: 70, color: "bg-bad", amount: "+$6,000" },
              { label: "Material Increase", pct: 30, color: "bg-gold", amount: "+$2,500" },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-2.5 py-1.5">
                <div className="flex-1 text-xs font-semibold">{d.label}</div>
                <div className="h-[7px] w-24 rounded-full bg-track">
                  <div
                    className={`h-[7px] rounded-full ${d.color}`}
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
                <span className="w-14 text-right text-xs font-bold">{d.amount}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
