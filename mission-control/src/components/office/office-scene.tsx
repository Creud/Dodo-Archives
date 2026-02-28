"use client";

import Image from "next/image";
import { AgentCard } from "./agent-card";
import type { Agent } from "@/lib/agents";

export function OfficeScene({ agents }: { agents: Agent[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 shadow-pixel">
        <div className="absolute inset-0 opacity-90">
          <Image src="/office.png" alt="Virtual office" fill className="object-cover" priority />
        </div>
        <div className="relative p-4">
          <div className="text-sm font-semibold text-white">Virtual Office</div>
          <div className="text-xs text-white/60">Agent presence + status overlays (v1)</div>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {agents.map((a) => (
              <AgentCard key={a.id} agent={a} />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 p-4 shadow-pixel">
        <div className="text-sm font-semibold text-white">Systems</div>
        <div className="mt-1 text-xs text-white/60">GitHub/Vercel widgets next</div>
        <ul className="mt-4 space-y-2 text-xs text-white/75">
          <li>• Deployments (Vercel) — pending wiring</li>
          <li>• Repo activity (GitHub) — pending wiring</li>
          <li>• Alerts/Incidents — pending</li>
        </ul>
      </div>
    </div>
  );
}
