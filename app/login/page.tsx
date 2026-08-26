import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "@/components/icons";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <div className="flex flex-1 flex-col justify-center px-7 py-10">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-navy font-display text-[22px] text-gold">
            BB
          </div>
          <h1 className="mt-5 font-display text-[28px] text-navy">Brisbane Builder</h1>
          <p className="mt-1 text-[13px] text-muted">Construction Delivery System</p>

          <form className="mt-7 flex flex-col gap-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold">Email</span>
              <input
                type="email"
                defaultValue="daniel@brisbanebuilder.au"
                className="h-12 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold">Password</span>
              <input
                type="password"
                defaultValue="password"
                className="h-12 w-full rounded-xl border border-input bg-card px-4 text-sm tracking-[3px] outline-none focus:border-gold"
              />
            </label>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2.5">
                <span className="inline-flex h-[19px] w-[19px] items-center justify-center rounded-md bg-navy">
                  <Check size={11} className="text-surface" strokeWidth={3} />
                </span>
                <span className="text-[13px]">Remember me</span>
              </span>
              <span className="text-[13px] font-semibold text-bronze">
                Forgot password?
              </span>
            </div>
            <Link
              href="/portfolio"
              className="flex h-[52px] items-center justify-center rounded-xl bg-navy text-[15px] font-semibold text-surface transition-opacity hover:opacity-90"
            >
              Sign In
            </Link>
          </form>
        </div>
      </div>
      <p className="pb-10 text-center text-[11px] text-faint">
        Brisbane, Queensland · New detached Class 1a dwellings
      </p>
    </div>
  );
}
