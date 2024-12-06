"use client";

import { ArrowsCounterClockwise, Plus } from "@phosphor-icons/react";
import { Lego } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-moonstone text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row">
          <Lego className="text-orange" size={84} />
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-yellow">Foundation</span> Labs
          </h1>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-6 text-white sm:p-12 md:px-24">
          <h3 className="text-3xl font-bold">
            Minimalist online tooling for developers
          </h3>
          <div className="text-lg">
            Making online tooling beautiful. One tool at a time.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-bold">Tools</h3>
          <div className="grid grid-cols-4 gap-4">
            <Link
              href="uuid-generator"
              className="col-span-2 flex flex-row items-center gap-2 rounded-lg border border-white p-3 hover:bg-white/10"
            >
              <ArrowsCounterClockwise />
              UUID Generator
            </Link>
            <div className="col-span-2 flex flex-row items-center gap-2 rounded-lg border border-white p-3">
              <Plus />
              More tools coming soon!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
