import type { Metadata } from "next";
import {
  Badge,
  ButtonPrimary,
  Card,
  Chip,
  LinkHint,
  SectionLabel,
} from "@/components/ui";
import { Filter, Plus, Search } from "@/components/icons";

export const metadata: Metadata = { title: "Tasks" };

export default function TasksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-5 lg:px-8 lg:py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-bold text-navy">Tasks</h1>
        <button
          aria-label="New task"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-surface"
        >
          <Plus size={17} />
        </button>
      </div>

      <div className="mt-2.5 flex h-11 items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 lg:max-w-xl">
        <Search size={15} className="text-faint" />
        <input
          placeholder="Search tasks"
          className="w-full bg-transparent text-[13px] outline-none placeholder:text-faint"
        />
      </div>

      <div className="mt-2.5 flex items-center gap-2">
        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          <Chip active>Today</Chip>
          <Chip>Upcoming</Chip>
          <Chip>Overdue</Chip>
          <Chip>Completed</Chip>
        </div>
        <button
          aria-label="Filter"
          className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full border border-input bg-card"
        >
          <Filter size={15} />
        </button>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Task list */}
        <div className="flex flex-col gap-2.5">
          <Card className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[13px] font-bold">Verify Under-Slab Services</div>
                <div className="mt-0.5 text-[11px] text-faint">
                  7 · Slab · Michael Turner · Photo + Checklist
                </div>
              </div>
              <Badge tone="gold">In Progress</Badge>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-hairline pt-2">
              <span className="text-[11px] text-muted">
                Due 26 Aug · 9:30 AM · <span className="font-bold text-bad">High</span>
              </span>
              <LinkHint>Open Task</LinkHint>
            </div>
          </Card>

          <Card tone="warn" className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">
                Confirm Termite Interface Evidence
              </div>
              <div className="mt-0.5 text-[11px] font-semibold text-amber">
                Overdue 1 day · Michael Turner
              </div>
            </div>
            <Badge tone="slate">Not Started</Badge>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3">
            <div>
              <div className="text-[13px] font-bold">Review Inspection Result</div>
              <div className="mt-0.5 text-[11px] text-faint">
                Blocked · awaiting RFI-014 response
              </div>
            </div>
            <Badge tone="bad">Blocked</Badge>
          </Card>

          <Card className="flex items-center justify-between px-4 py-3 opacity-80">
            <div>
              <div className="text-[13px] font-bold">Prepare Formwork Edge Boards</div>
              <div className="mt-0.5 text-[11px] text-faint">
                ABC Concreting · completed 25 Aug
              </div>
            </div>
            <Badge tone="good">Completed</Badge>
          </Card>

          {/* Create task (3d) */}
          <Card className="p-4">
            <SectionLabel tone="faint" className="mb-2.5">
              Create Task — PM / Supervisor
            </SectionLabel>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <input
                placeholder="Task title"
                className="col-span-2 h-10 rounded-[10px] border border-input bg-card px-3 outline-none placeholder:text-faint focus:border-gold"
              />
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                Stage: Slab ▾
              </div>
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                Assignee ▾
              </div>
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                Due date
              </div>
              <div className="flex h-10 items-center rounded-[10px] border border-input px-3">
                Priority ▾
              </div>
              <div className="col-span-2 flex h-10 items-center rounded-[10px] border border-input px-3">
                Evidence requirement · dependency · checklist link ▾
              </div>
            </div>
            <ButtonPrimary className="mt-2.5 h-10 w-full text-xs">
              Create Task
            </ButtonPrimary>
          </Card>
        </div>

        {/* Task detail (3c) */}
        <Card className="p-5">
          <SectionLabel tone="faint" className="mb-2.5">
            Task Detail
          </SectionLabel>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[15px] font-bold">Verify Under-Slab Services</div>
              <div className="mt-0.5 text-[11px] text-faint">
                18 Rivergum Street · Slab
              </div>
            </div>
            <Badge tone="gold">In Progress</Badge>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div>
              <div className="text-[10px] text-faint">Assigned</div>
              <div className="mt-0.5 font-semibold">Michael Turner</div>
            </div>
            <div>
              <div className="text-[10px] text-faint">Trade</div>
              <div className="mt-0.5 font-semibold">Electrical / Plumbing</div>
            </div>
            <div>
              <div className="text-[10px] text-faint">Due</div>
              <div className="mt-0.5 font-semibold">26 Aug · 9:30 AM</div>
            </div>
            <div>
              <div className="text-[10px] text-faint">Blocks</div>
              <div className="mt-0.5 font-bold text-bad">Slab Pre-Pour Gate</div>
            </div>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-xl border border-border px-3.5 py-3">
            <span className="text-xs font-semibold">Checklist: Under-Slab Services</span>
            <LinkHint>Open</LinkHint>
          </div>
          <div className="mt-2 flex items-center justify-between rounded-xl border border-border px-3.5 py-3">
            <span className="text-xs font-semibold">Evidence: photos</span>
            <span className="text-xs font-bold text-warn">1 / 2</span>
          </div>
          <ButtonPrimary className="mt-3 h-[46px] w-full">Add Evidence</ButtonPrimary>
          <button
            disabled
            className="mt-2 h-11 w-full cursor-default rounded-xl bg-[#E9E6DC] text-xs font-semibold text-[#B4AE9E]"
          >
            Mark Ready for Review
          </button>
          <p className="mt-1.5 text-center text-[10px] text-faint">
            1 required photo remains before review.
          </p>
        </Card>
      </div>
    </div>
  );
}
