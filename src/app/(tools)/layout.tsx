import { Lego } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ToolsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-row bg-blue-400 px-3 py-1">
        <Link href="/" className="flex flex-row items-center gap-3 text-center">
          <Lego className="text-orange" size={30} />
          <p className="text-xl font-extrabold tracking-tight text-white">
            <span className="text-yellow">Foundation</span> Labs
          </p>
        </Link>
      </div>
      <div className="flex-grow">{children}</div>
      <div className="text-center py-1">© 2024 · Michal Bock · All rights reserved.</div>
    </main>
  );
}
