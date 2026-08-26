"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Clock, FileDoc, Home, More, Rows } from "@/components/icons";

const sidebarGroups: {
  label: string;
  items: { href: string; label: string }[];
}[] = [
  {
    label: "Overview",
    items: [
      { href: "/portfolio", label: "Portfolio" },
      { href: "/", label: "Today" },
      { href: "/project", label: "Project Home" },
      { href: "/assistant", label: "Builder AI" },
      { href: "/notifications", label: "Notifications" },
    ],
  },
  {
    label: "Site Execution",
    items: [
      { href: "/stages", label: "Stages" },
      { href: "/tasks", label: "Tasks" },
      { href: "/site-log", label: "Site Log" },
      { href: "/evidence", label: "Evidence" },
      { href: "/inspections", label: "Inspections" },
      { href: "/defects", label: "Defects" },
      { href: "/rfis", label: "RFIs" },
    ],
  },
  {
    label: "Records",
    items: [
      { href: "/documents", label: "Documents" },
      { href: "/drawings", label: "Drawings" },
      { href: "/compliance", label: "Compliance" },
    ],
  },
  {
    label: "Commercial",
    items: [{ href: "/commercial", label: "Commercial" }],
  },
  {
    label: "Delivery",
    items: [
      { href: "/handover", label: "Handover" },
      { href: "/warranty", label: "Warranty" },
      { href: "/client", label: "Client Portal" },
    ],
  },
  {
    label: "Governance",
    items: [{ href: "/admin", label: "Administration" }],
  },
];

const tabs = [
  { href: "/", label: "Today", icon: Clock },
  { href: "/project", label: "Project", icon: Home },
  { href: "/stages", label: "Stages", icon: Rows },
  { href: "/documents", label: "Documents", icon: FileDoc },
  { href: "/more", label: "More", icon: More },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <main className="min-h-dvh">{children}</main>;
  }

  return (
    <div className="min-h-dvh lg:flex">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col bg-navy text-navy-faint lg:flex">
        <div className="flex items-center gap-2.5 border-b border-navy-3 px-5 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-navy-3 bg-navy-2 font-display text-[13px] text-gold">
            BB
          </div>
          <div>
            <div className="font-display text-sm text-surface">Brisbane Builder</div>
            <div className="text-[10px] text-navy-muted">18 Rivergum Street</div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-3 text-[13px]">
          {sidebarGroups.map((group) => (
            <div key={group.label}>
              <div className="px-3 pb-1 pt-3 text-[10px] font-bold uppercase tracking-label text-navy-muted">
                {group.label}
              </div>
              {group.items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative block rounded-[10px] px-3 py-[6px] ${
                      active
                        ? "bg-navy-2 font-semibold text-surface"
                        : "hover:bg-navy-2/50"
                    }`}
                  >
                    {active ? (
                      <span className="absolute bottom-[6px] left-0 top-[6px] w-[3px] rounded-full bg-gold" />
                    ) : null}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
        <div className="border-t border-navy-3 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
              DB
            </div>
            <div>
              <div className="text-xs font-semibold text-surface">Daniel Brooks</div>
              <div className="text-[10px] text-navy-muted">Director</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex h-12 items-center justify-between border-b border-line bg-surface/95 px-4 backdrop-blur lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy font-display text-[11px] text-gold">
            BB
          </span>
          <span className="font-display text-[15px] text-navy">Brisbane Builder</span>
        </Link>
        <Link
          href="/notifications"
          className="flex items-center gap-3"
          aria-label="Notifications"
        >
          <span className="relative inline-flex">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1C2536"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-bad" />
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-navy">
            DB
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="min-w-0 flex-1 pb-24 lg:ml-[220px] lg:pb-10">{children}</main>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-border bg-card px-2 pb-[max(env(safe-area-inset-bottom),12px)] pt-2 lg:hidden">
        {tabs.map((tab) => {
          const active = isActive(pathname, tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-[3px] py-1.5 ${
                active ? "text-navy" : "text-faint"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2 : 1.8} />
              <span
                className={`text-[10px] ${active ? "font-bold" : "font-semibold"}`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
