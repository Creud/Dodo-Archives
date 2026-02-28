import { ThemeToggle } from "@/components/theme-toggle";
import { OfficeScene } from "@/components/office/office-scene";
import { ChatPanel } from "@/components/chat/chat-panel";
import { OpenClawStatus } from "@/components/office/openclaw-status";
import { mockAgents } from "@/lib/agents";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ink-950 via-black to-ink-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold tracking-tight">Mission Control</div>
            <div className="text-xs text-white/60">Virtual office • agent status • chat (v1 scaffold)</div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
              href="https://github.com/Creud/Dodo-Archives"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </header>

        <section className="mt-6">
          <OfficeScene agents={mockAgents} />
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ChatPanel />
          <OpenClawStatus />
        </section>

        <footer className="mt-10 text-[10px] text-white/40">
          v1 scaffold — next: live agent feeds, realtime chat, GitHub/Vercel widgets.
        </footer>
      </div>
    </main>
  );
}
