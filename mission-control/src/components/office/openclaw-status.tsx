"use client";

import { useEffect, useState } from "react";

export function OpenClawStatus() {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    async function tick() {
      try {
        const res = await fetch("/api/openclaw/status", { cache: "no-store" });
        const json = await res.json();
        if (!alive) return;
        setData(json);
        setErr(null);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message ?? "Failed to fetch");
      }
    }

    tick();
    const t = setInterval(tick, 5000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 p-4 shadow-pixel">
      <div className="text-sm font-semibold text-white">OpenClaw</div>
      <div className="mt-1 text-xs text-white/60">/api/openclaw/status (polling 5s)</div>

      {err ? (
        <div className="mt-3 text-xs text-red-200">Error: {err}</div>
      ) : data ? (
        <pre className="mt-3 max-h-64 overflow-auto rounded-lg border border-white/10 bg-black/20 p-3 text-[10px] leading-relaxed text-white/80">
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <div className="mt-3 text-xs text-white/60">Loading…</div>
      )}
    </div>
  );
}
