import { z } from "zod";

export const AgentStatus = z.enum(["idle", "working", "error", "offline"]);
export type AgentStatus = z.infer<typeof AgentStatus>;

export const Agent = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  status: AgentStatus,
  task: z.string().optional(),
  updatedAt: z.string(),
});
export type Agent = z.infer<typeof Agent>;

export const mockAgents: Agent[] = [
  {
    id: "dodo-1",
    name: "Pedro el Dodo",
    role: "Chief of Staff (technical)",
    status: "working",
    task: "Scaffolding Mission Control UI",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "agent-2",
    name: "Sparrow",
    role: "Build & Deploy",
    status: "idle",
    task: "Awaiting repo hooks",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "agent-3",
    name: "Keelhaul",
    role: "Monitoring",
    status: "offline",
    task: "Not connected",
    updatedAt: new Date().toISOString(),
  },
];
