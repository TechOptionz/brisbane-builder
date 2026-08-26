import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  ButtonSoft,
  Card,
  LinkHint,
  SectionLabel,
} from "@/components/ui";
import { GridPlus, Lock, Rows, Users } from "@/components/icons";

export const metadata: Metadata = { title: "Administration" };

const users = [
  {
    name: "Michael Turner",
    role: "Site Supervisor",
    team: "Construction",
    projects: "8",
    login: "Today",
    status: <Badge tone="good">Active</Badge>,
    highlight: true,
  },
  {
    name: "Sarah Collins",
    role: "Project Manager",
    team: "Construction",
    projects: "12",
    login: "Today",
    status: <Badge tone="good">Active</Badge>,
  },
  {
    name: "Emily Chen",
    role: "Certifier (ext)",
    team: "Consultants",
    projects: "2",
    login: "25 Aug",
    status: <Badge tone="good">Active</Badge>,
  },
  {
    name: "Rick Cole",
    role: "Subcontractor",
    team: "External",
    projects: "1",
    login: "—",
    status: <Badge tone="warn">Pending</Badge>,
  },
];

const permissions = [
  { label: "Stages · Tasks · Evidence", level: "Edit", tone: "gold" },
  { label: "Defects · Inspections", level: "Create", tone: "gold" },
  { label: "Gate approval (own)", level: "No Access", tone: "bad" },
  { label: "Commercial · Costs", level: "No Access", tone: "bad" },
  { label: "Documents (current)", level: "View", tone: "info" },
] as const;

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-navy lg:font-display lg:text-2xl lg:font-normal">
            Administration
          </h1>
          <p className="mt-0.5 text-xs text-muted">
            Brisbane Builder Group · 118 active · 7 pending · 1 disabled
          </p>
        </div>
        <span className="hidden lg:block">
          <ButtonPrimary>Invite User</ButtonPrimary>
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy lg:hidden">
          DB
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {[
          { value: "126", label: "Users" },
          { value: "42", label: "Active Projects" },
          { value: "18", label: "Templates" },
          { value: "7", label: "Pending Requests", warn: true },
        ].map((s) => (
          <Card
            key={s.label}
            className={`px-3.5 py-3 ${s.warn ? "border-warn-line" : ""}`}
          >
            <div
              className={`font-display text-[22px] ${s.warn ? "text-warn" : "text-navy"}`}
            >
              {s.value}
            </div>
            <div className="mt-0.5 text-[11px] text-faint">{s.label}</div>
          </Card>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              System Health
            </SectionLabel>
            <div className="grid grid-cols-1 gap-1.5 text-xs sm:grid-cols-2">
              <span className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-good" />
                Documents · Healthy
              </span>
              <span className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-good" />
                Notifications · Healthy
              </span>
              <span className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-warn" />
                Storage · 82%
              </span>
              <span className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-good" />
                Integrations · 3 connected
              </span>
            </div>
          </Card>

          {/* Quick actions (mobile-focused) */}
          <div className="grid grid-cols-2 gap-2.5 lg:hidden">
            <button className="flex flex-col gap-2 rounded-2xl bg-navy p-3.5 text-left text-surface">
              <Users size={18} className="text-gold" />
              <span className="text-[13px] font-bold">Add User</span>
            </button>
            <button className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-3.5 text-left">
              <GridPlus size={18} className="text-bronze" />
              <span className="text-[13px] font-bold">Create Template</span>
            </button>
            <button className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-3.5 text-left">
              <Lock size={18} className="text-info" />
              <span className="text-[13px] font-bold">Review Permissions</span>
            </button>
            <button className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-3.5 text-left">
              <Rows size={18} className="text-bronze" />
              <span className="text-[13px] font-bold">View Audit Logs</span>
            </button>
          </div>

          {/* Users */}
          <Card className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 lg:px-5">
              <span className="text-sm font-bold">Users</span>
              <span className="flex gap-1.5">
                <span className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-semibold text-surface">
                  Active 118
                </span>
                <span className="rounded-full border border-input px-2.5 py-1 text-[10px] font-semibold">
                  Pending 7
                </span>
                <span className="hidden rounded-full border border-input px-2.5 py-1 text-[10px] font-semibold sm:inline">
                  Disabled 1
                </span>
              </span>
            </div>
            <div className="hidden grid-cols-[1.4fr_1.1fr_1fr_0.7fr_0.9fr_0.8fr] gap-3 border-b border-border bg-paper px-5 py-2.5 text-[10px] font-bold uppercase tracking-wide text-faint lg:grid">
              <span>Name</span>
              <span>Role</span>
              <span>Team</span>
              <span>Projects</span>
              <span>Last Login</span>
              <span>Status</span>
            </div>
            {users.map((u, i, arr) => (
              <div
                key={u.name}
                className={`px-4 py-3 lg:grid lg:grid-cols-[1.4fr_1.1fr_1fr_0.7fr_0.9fr_0.8fr] lg:items-center lg:gap-3 lg:px-5 ${
                  i < arr.length - 1 ? "border-b border-hairline" : ""
                } ${u.highlight ? "lg:bg-paper" : ""}`}
              >
                <div className="flex items-center justify-between lg:block">
                  <span className="text-[13px] font-bold">{u.name}</span>
                  <span className="lg:hidden">{u.status}</span>
                </div>
                <div className="mt-0.5 text-[11px] text-faint lg:hidden">
                  {u.role} · {u.team} · {u.projects} projects · {u.login}
                </div>
                <span className="hidden text-[13px] text-muted lg:block">{u.role}</span>
                <span className="hidden text-[13px] text-muted lg:block">{u.team}</span>
                <span className="hidden text-[13px] text-muted lg:block">
                  {u.projects}
                </span>
                <span className="hidden text-[13px] text-muted lg:block">{u.login}</span>
                <span className="hidden lg:block">{u.status}</span>
              </div>
            ))}
          </Card>

          {/* Audit log */}
          <Card className="overflow-hidden">
            <div className="border-b border-border px-4 py-3 text-sm font-bold lg:px-5">
              Audit Log
            </div>
            <div className="px-4 py-3 lg:px-5">
              <div className="rounded-xl border border-hairline px-3.5 py-3">
                <div className="text-xs font-bold">Daniel Brooks · Changed Gate Rule</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  Slab Pre-Pour · 26 Aug 2026 · 2:12 PM
                </div>
                <div className="mt-2 flex gap-2">
                  <div className="flex-1 rounded-lg bg-bad-bg px-2.5 py-1.5">
                    <div className="text-[9px] font-bold text-bad">OLD</div>
                    <div className="mt-0.5 text-[11px] font-semibold">
                      Inspection required: No
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg bg-good-bg px-2.5 py-1.5">
                    <div className="text-[9px] font-bold text-good">NEW</div>
                    <div className="mt-0.5 text-[11px] font-semibold">
                      Inspection required: Yes
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 text-[10px] text-faint">
                  Reason: certifier direction · affects 12 projects
                </div>
              </div>
              <div className="flex justify-between pt-2.5 text-xs">
                <span className="font-semibold">
                  Sarah Collins · Role permission changed
                </span>
                <span className="text-faint">25 Aug</span>
              </div>
              <div className="flex justify-between pt-2 text-xs">
                <span className="font-semibold">
                  Admin · User disabled (reason recorded)
                </span>
                <span className="text-faint">24 Aug</span>
              </div>
              <p className="mt-2 text-[10px] text-faint">
                Audit entries are read-only and can never be deleted.
              </p>
            </div>
          </Card>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <Card className="p-4">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-sm font-bold">
                Permission Builder — Site Supervisor
              </span>
            </div>
            {permissions.map((p, i, arr) => (
              <div
                key={p.label}
                className={`flex items-center justify-between py-1.5 text-xs ${
                  i < arr.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <span className="font-semibold">{p.label}</span>
                <Badge tone={p.tone} className="font-bold">
                  {p.level}
                </Badge>
              </div>
            ))}
            <div className="mt-2.5 rounded-[10px] border border-warn-line bg-gold-tint px-3 py-2 text-[11px] font-semibold text-warn">
              Changes affect 18 users — confirmation + audit required.
            </div>
          </Card>

          <Card className="p-4">
            <div className="mb-2.5 text-sm font-bold">Template Builder</div>
            {[
              { label: "Standard Brisbane Residence", value: "v2 · 18 projects" },
              { label: "Slab Stage Template", value: "v1 · 12 projects" },
              { label: "Pre-Pour Checklist", value: "10 items", last: true },
            ].map((t) => (
              <div
                key={t.label}
                className={`flex justify-between py-1.5 text-xs ${
                  t.last ? "" : "border-b border-hairline"
                }`}
              >
                <span className="text-faint">{t.label}</span>
                <span className="font-semibold">{t.value}</span>
              </div>
            ))}
            <ButtonSoft className="mt-2.5 h-10 w-full text-xs">
              Create New Version
            </ButtonSoft>
            <p className="mt-1.5 text-center text-[10px] text-faint">
              Active projects keep their version — templates are never silently modified.
            </p>
          </Card>

          <Card className="p-4">
            <div className="mb-2 text-sm font-bold">Pending Requests · 7</div>
            <div className="flex justify-between border-b border-hairline py-1.5 text-xs">
              <span className="font-semibold">Rick Cole — invitation</span>
              <LinkHint>Review</LinkHint>
            </div>
            <div className="flex justify-between py-1.5 text-xs">
              <span className="font-semibold">PM access — 23 Coral Fern Drive</span>
              <LinkHint>Review</LinkHint>
            </div>
          </Card>

          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2">
              Organisation
            </SectionLabel>
            {[
              { label: "Name · Logo", value: "Brisbane Builder Group" },
              { label: "Timezone · Currency", value: "Australia/Brisbane · AUD" },
              { label: "Date format", value: "DD MMM YYYY", last: true },
            ].map((o) => (
              <div
                key={o.label}
                className={`flex justify-between py-1.5 text-xs ${
                  o.last ? "" : "border-b border-hairline"
                }`}
              >
                <span className="text-faint">{o.label}</span>
                <span className="font-semibold">{o.value}</span>
              </div>
            ))}
            <p className="mt-2 text-[10px] text-faint">
              Brand settings cover logo and business details only — the core product
              theme is not configurable.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
