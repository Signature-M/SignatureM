'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, MapPin, Phone, Mail, LineChart, Gauge, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(''); setSent(false); setSending(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'), email: fd.get('email'), website: fd.get('website'),
      message: fd.get('message'), consent: fd.get('consent') === 'on'
    };
    if (!payload.name || !payload.email || !payload.message || !payload.consent) {
      setError('Please complete Name, Email, Message and consent.'); setSending(false); return;
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('send failed');
      setSent(true); (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setError('Couldn’t send right now. Please try again or email hello@signaturem.co.uk.');
    } finally { setSending(false); }
  }

  return (
    <main id="top">
      {/* HERO */}
      <section className="relative overflow-hidden bg-sm-section">
        <div className="absolute inset-0 sm-noise" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 className="text-5xl font-extrabold tracking-tight">
              Transform your website into a growth engine.
            </motion.h1>
            <p className="mt-6 text-lg leading-relaxed text-sm-subtext">
              Helping local businesses turn visitors into loyal customers through strategic optimisation, data-driven insights, and clear communication.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="h-11 inline-flex items-center justify-center rounded-md px-4 bg-sm-highlight text-sm-bg font-medium shadow-lg">
                Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#services" className="h-11 inline-flex items-center justify-center rounded-md border-2 px-4 text-sm-primary" style={{borderColor:'#00A8A8'}}>Explore services</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-20 bg-sm-section">
        <div className="absolute inset-0 sm-noise" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-sm-primary">Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Practical, measurable ways to grow</h2>
            <p className="mt-3 text-sm-subtext">Clear, outcome-focused strategies for better performance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Gauge className="h-5 w-5" />, title: 'Website Optimisation', desc: 'From speed fixes to funnel audits — ensure every visit counts.' },
              { icon: <LineChart className="h-5 w-5" />, title: 'Local SEO & Analytics', desc: 'Improve local visibility with data-backed insights and GA4 tracking.' },
              { icon: <BarChart3 className="h-5 w-5" />, title: 'Conversion Strategy', desc: 'Experiment-driven strategy aligned with business goals.' },
              { icon: <ClipboardCheck className="h-5 w-5" />, title: 'UX Audits', desc: 'In-depth usability and accessibility reviews for clarity and flow.' }
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-sm-accent transition-transform hover:scale-[1.02]" style={{ background: 'linear-gradient(180deg, #14222B, #0E1A1F)' }}>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm-primary"><span>{s.icon}</span><h3 className="text-lg font-semibold">{s.title}</h3></div>
                </div>
                <div className="p-4 text-sm text-sm-subtext">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="casestudies" className="relative py-20 bg-sm-accent">
        <div className="absolute inset-0 sm-noise" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-sm-primary">Case Studies</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Proven results for local brands</h2>
            <p className="mt-3 text-sm-subtext">From fitness to dental — success stories backed by data.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl" style={{ background: '#14222B' }}>
              <div className="p-4"><h3 className="text-lg font-semibold">Independent Gym — Northampton</h3></div>
              <div className="p-4 text-sm-subtext">Conversion rate doubled (1.2% → 2.3%) via clarity-focused redesign and localised content.</div>
            </div>
            <div className="rounded-xl" style={{ background: '#14222B' }}>
              <div className="p-4"><h3 className="text-lg font-semibold">Dental Clinic — Kettering</h3></div>
              <div className="p-4 text-sm-subtext">Organic bookings up 130% through Local SEO improvements and trust-focused CTAs.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 bg-sm-gradient">
        <div className="absolute inset-0 sm-noise" />
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="max-w-3xl mb-6">
              <p className="text-xs tracking-widest uppercase text-sm-primary">About</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">A local partner who cares about results</h2>
              <p className="mt-3 text-sm-subtext">Over a decade of experience across CRO, analytics, and SEO.</p>
            </div>
            <p className="text-base leading-relaxed text-sm-subtext">
              After 10+ years improving websites for major brands, I now bring that expertise to local businesses —
              helping you turn data into decisions and visitors into customers.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-sm-subtext">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sm-primary" /> One-to-one partnership — you work directly with me</li>
              <li className="flex items-center gap-2"><Gauge className="h-4 w-4 text-sm-primary" /> Quick wins first, then sustainable growth</li>
              <li className="flex items-center gap-2"><LineChart className="h-4 w-4 text-sm-primary" /> Decisions driven by data, not guesswork</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sm-primary" /> Clear pricing and clear next steps</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sm-accent" style={{ background: 'linear-gradient(180deg, #14222B, #0E1A1F)' }}>
            <div className="p-4"><h3 className="text-lg font-semibold text-sm-primary">Expertise snapshot</h3></div>
            <div className="p-4 space-y-2 text-sm-subtext">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sm-primary" /> CRO & A/B Testing</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sm-primary" /> GA4 & Tag Manager</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sm-primary" /> UX & Accessibility</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sm-primary" /> Local SEO for SMEs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 bg-sm-section">
        <div className="absolute inset-0 sm-noise" />
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="max-w-3xl mx-auto mb-6">
              <p className="text-xs tracking-widest uppercase text-sm-primary">Contact</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Let’s plan your next 90 days</h2>
              <p className="mt-3 text-sm-subtext">Tell me a little about your goals — I’ll respond personally within one day.</p>
            </div>
            <div className="rounded-xl border border-sm-accent" style={{ background: '#14222B' }}>
              <div className="p-6 space-y-5">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="name" placeholder="Name" className="w-full rounded-md border border-gray-600 bg-transparent text-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400" />
                    <input name="email" type="email" placeholder="Email" className="w-full rounded-md border border-gray-600 bg-transparent text-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400" />
                  </div>
                  <input name="website" placeholder="Business / Website URL" className="w-full rounded-md border border-gray-600 bg-transparent text-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400" />
                  <textarea name="message" rows={5} placeholder="Your message or project goals..." className="w-full rounded-md border border-gray-600 bg-transparent text-gray-100 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400" />
                  <label className="flex items-start gap-2 text-xs text-gray-300">
                    <input type="checkbox" name="consent" className="mt-1" />
                    I consent to my data being used to contact me about this enquiry and agree to the privacy policy.
                  </label>
                  {error && <p className="text-xs text-red-400">{error}</p>}
                  {sent && <p className="text-xs text-emerald-400">Thanks—your message was sent.</p>}
                  <button disabled={sending} className="w-full h-11 rounded-md px-4 bg-sm-highlight text-sm-bg font-medium shadow-lg hover:scale-[1.02] transition-transform">
                    {sending ? 'Sending…' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-sm-accent" style={{ background: '#0E1A1F' }}>
              <div className="p-4"><h3 className="text-lg font-semibold text-sm-primary">Local Details</h3></div>
              <div className="p-4 space-y-3 text-sm-subtext">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Northamptonshire, East Midlands</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> 07000 000000</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@signaturem.co.uk</div>
              </div>
            </div>
            <div className="rounded-xl border border-sm-accent" style={{ background: '#0E1A1F' }}>
              <div className="p-4"><h3 className="text-lg font-semibold text-sm-primary">Map</h3></div>
              <div className="p-4">
                <iframe title="Signature M location" className="w-full h-64 rounded-xl" style={{ border: 0 }} loading="lazy" src="https://www.google.com/maps?q=Northamptonshire%2C%20East%20Midlands&output=embed" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
