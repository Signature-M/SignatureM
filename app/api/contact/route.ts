import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message, consent } = await req.json().catch(() => ({}));
  if (!name || !email || !message || !consent) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  // No-op send (works without any keys). Swap to Resend later if you want.
  return NextResponse.json({ ok: true });
}
