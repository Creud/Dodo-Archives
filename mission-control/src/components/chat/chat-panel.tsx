"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";

type Msg = { id: string; author: string; text: string; ts: number };

export function ChatPanel() {
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: "1", author: "Mission Control", text: "Chat online (local echo v1).", ts: Date.now() },
  ]);

  const canSend = useMemo(() => text.trim().length > 0, [text]);

  function send() {
    if (!canSend) return;
    setMsgs((m) => [...m, { id: crypto.randomUUID(), author: "You", text: text.trim(), ts: Date.now() }]);
    setText("");
  }

  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 p-4 shadow-pixel">
      <div>
        <div className="text-sm font-semibold text-white">Agent Chat</div>
        <div className="text-xs text-white/60">WebSocket wiring next</div>
      </div>

      <div className="mt-3 h-64 overflow-auto rounded-lg border border-white/10 bg-black/20 p-3">
        <div className="space-y-2">
          {msgs.map((m) => (
            <div key={m.id} className="text-xs text-white/80">
              <span className="text-white/50">[{new Date(m.ts).toLocaleTimeString()}]</span>{" "}
              <span className="font-semibold text-white">{m.author}:</span> {m.text}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-xs text-white outline-none placeholder:text-white/30 focus:border-white/20"
          placeholder="Message your agents…"
        />
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 hover:bg-white/15 disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </div>
    </div>
  );
}
