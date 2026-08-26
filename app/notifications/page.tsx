import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import {
  CheckCircle,
  FileDoc,
  Lock,
  Shield,
  Warning,
} from "@/components/icons";

export const metadata: Metadata = { title: "Notifications" };

const notifications = [
  {
    title: "Inspection Passed",
    body: "Footing inspection passed · 18 Rivergum Street.",
    action: "View Stage",
    time: "1h",
    unread: true,
    Icon: CheckCircle,
    iconCls: "bg-good-bg text-good",
    accent: "border-l-gold",
  },
  {
    title: "Gate Blocked",
    body: "2 mandatory requirements remain on Slab Pre-Pour.",
    action: "Review Requirements",
    time: "2h",
    unread: true,
    Icon: Lock,
    iconCls: "bg-bad-bg text-bad",
    accent: "border-bad-line border-l-bad",
  },
  {
    title: "Drawing Revision",
    body: "S04 supersedes S03 — do not use S03 for construction.",
    action: "Review Drawing",
    time: "1d",
    unread: true,
    Icon: FileDoc,
    iconCls: "bg-gold-tint text-warn",
    accent: "border-l-gold",
  },
  {
    title: "Defect Overdue",
    body: "DEF-026 requires attention · 42 Hawthorne Road.",
    action: "View Defect",
    time: "1d",
    unread: false,
    Icon: Warning,
    iconCls: "bg-bad-bg text-bad",
    accent: "",
  },
  {
    title: "Certificate Missing",
    body: "Required certification remains outstanding · 7 Banksia Court.",
    action: "View Compliance",
    time: "2d",
    unread: false,
    Icon: Shield,
    iconCls: "bg-info-bg text-info",
    accent: "",
  },
];

export default function NotificationsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-5 lg:px-8 lg:py-8">
      <PageHeader
        title="Notifications"
        action={
          <span className="text-[13px] font-semibold text-bronze">
            Mark all as read
          </span>
        }
      />
      <div className="mt-4 flex flex-col gap-2.5">
        {notifications.map((n) => (
          <div
            key={n.title}
            className={`flex gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 ${
              n.unread ? `border-l-[3px] ${n.accent}` : "opacity-85"
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${n.iconCls}`}
            >
              <n.Icon size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm ${n.unread ? "font-bold" : "font-semibold"}`}
                >
                  {n.title}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[11px] text-faint">{n.time}</span>
                  {n.unread ? (
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  ) : null}
                </span>
              </div>
              <p className="mt-0.5 text-[13px] leading-snug text-muted">{n.body}</p>
              <span className="mt-1.5 inline-block text-[13px] font-semibold text-bronze">
                {n.action} ›
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
