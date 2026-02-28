import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Server-side proxy to your OpenClaw status endpoint.
 *
 * Configure in Vercel env vars:
 *  - OPENCLAW_STATUS_URL (e.g. https://your-vps.example.com/openclaw/status)
 *  - OPENCLAW_BEARER_TOKEN (same token your VPS proxy expects)
 */
export async function GET() {
  const url = process.env.OPENCLAW_STATUS_URL;
  const token = process.env.OPENCLAW_BEARER_TOKEN;

  if (!url) {
    return NextResponse.json({ error: "Missing OPENCLAW_STATUS_URL" }, { status: 500 });
  }

  const res = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    cache: "no-store",
  });

  const text = await res.text();

  try {
    const json = JSON.parse(text);
    return NextResponse.json(json, { status: res.status });
  } catch {
    return NextResponse.json(
      { raw: text, upstreamStatus: res.status },
      { status: res.ok ? 200 : res.status }
    );
  }
}
