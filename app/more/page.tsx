import type { Metadata } from "next";
import Link from "next/link";
import { Card, PageHeader, SectionLabel } from "@/components/ui";
import {
  Building,
  Camera,
  CheckCircle,
  CreditCard,
  FileDoc,
  Home,
  Rows,
  Shield,
  Spark,
  Upload,
  Users,
  Warning,
} from "@/components/icons";

export const metadata: Metadata = { title: "More" };

const groups = [
  {
    label: "Site Execution",
    items: [
      { href: "/tasks", label: "Tasks", desc: "7 due today · 2 overdue", Icon: Rows },
      { href: "/site-log", label: "Site Log", desc: "26 Aug · draft", Icon: FileDoc },
      { href: "/evidence", label: "Evidence", desc: "Capture & library", Icon: Camera },
      { href: "/inspections", label: "Inspections", desc: "Slab Pre-Pour · 10:30 AM", Icon: CheckCircle },
      { href: "/defects", label: "Defects", desc: "12 open · 3 overdue", Icon: Warning },
      { href: "/rfis", label: "RFIs", desc: "RFI-014 awaiting response", Icon: Spark },
    ],
  },
  {
    label: "Records",
    items: [
      { href: "/drawings", label: "Drawings", desc: "Current issued revisions & history", Icon: FileDoc },
      { href: "/compliance", label: "Compliance", desc: "Certificates, approvals & register", Icon: Shield },
      { href: "/commercial", label: "Commercial", desc: "Budget, POs & variations", Icon: CreditCard },
    ],
  },
  {
    label: "Delivery",
    items: [
      { href: "/handover", label: "Handover", desc: "Stage 15 · 92% ready", Icon: Building },
      { href: "/warranty", label: "Warranty", desc: "2 open claims · period active", Icon: Shield },
      { href: "/client", label: "Client Portal", desc: "What your client sees", Icon: Home },
    ],
  },
  {
    label: "Organisation",
    items: [
      { href: "/portfolio", label: "Portfolio", desc: "8 active projects", Icon: Building },
      { href: "/admin", label: "Administration", desc: "Users, roles, templates & audit", Icon: Users },
      { href: "/assistant", label: "Builder AI", desc: "Ask about this project", Icon: Spark },
      { href: "/login", label: "Sign Out", desc: "Return to the login screen", Icon: Upload },
    ],
  },
];

export default function MorePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader title="More" subtitle="18 Rivergum Street · BR-2026-018" />
      <div className="mt-4 flex flex-col gap-4">
        {groups.map((group) => (
          <div key={group.label}>
            <SectionLabel className="mb-2">{group.label}</SectionLabel>
            <Card className="overflow-hidden">
              {group.items.map((item, i, arr) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-4 py-3.5 transition-colors hover:bg-surface ${
                    i < arr.length - 1 ? "border-b border-hairline" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-bronze">
                    <item.Icon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-bold">{item.label}</span>
                    <span className="block text-[11px] text-faint">{item.desc}</span>
                  </span>
                  <span className="text-input">›</span>
                </Link>
              ))}
            </Card>
          </div>
        ))}
        <p className="text-center text-[10px] text-faint">
          Items shown according to your role permissions. · Brisbane Builder Group ·
          Australia/Brisbane · AUD
        </p>
      </div>
    </div>
  );
}
