import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";

type AuthShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthShell({
  title,
  description,
  children,
  footer,
}: AuthShellProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-[#172033]">
      <header className="border-b border-slate-200/80 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <BrandMark />
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl justify-center px-6 py-16 lg:px-10 md:py-24">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/40 md:p-8">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Личный кабинет
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
            <div className="mt-8">{children}</div>
            <p className="mt-8 text-sm text-slate-500">{footer}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const authInputClassName =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100";

export const authButtonClassName =
  "w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60";
