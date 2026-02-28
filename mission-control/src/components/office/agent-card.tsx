"use client";

import type { Agent } from "@/lib/agents";
import { cn } from "@/lib/cn";

const badge: Record<Agent["status"], string> = {
  idle: "bg-white/10 text-white/80 border-white/10",
  working: "bg-emerald-500/15 text-emerald-200 border-emerald-500/20",
  error: "bg-red-500/15 text-red-200 border-red-500/20",
  offline: "bg-slate-500/15 text-slate-200 border-slate-500/20",
};

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-3 shadow-pixel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{agent.name}</div>
          <div className="text-xs text-white/70">{agent.role}</div>
        </div>
        <span className={cn("rounded-full border px-2 py-1 text-[10px] uppercase tracking-wide", badge[agent.status])}>
          {agent.status}
        </span>
      </div>
      <div className="mt-2 text-xs text-white/80">
        <span className="text-white/50">Task:</span> {agent.task ?? "—"}
      </div>
      <div className="mt-2 text-[10px] text-white/40">Updated: {new Date(agent.updatedAt).toLocaleString()}</div>
    </div>
  );
}
