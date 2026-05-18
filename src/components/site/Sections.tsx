import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Bot, Workflow, Users, MessageSquare, Sparkles, Globe, Database, Cpu,
  Clock, TrendingUp, Target, Building2, DollarSign, Wand2,
  CheckCircle2, ChevronDown, Star, Quote, Mail, Calendar, Instagram, Facebook,
} from "lucide-react";

// ---------- Section heading helper ----------
function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gradient leading-tight">
        {title}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{sub}</p>}
    </div>
  );
}

// ---------- TRUST ----------
export function Trust() {
  const logos = ["Northwind", "Acme Labs", "Lumen", "Vertex", "Quanta", "Polaris", "Helios", "Orbit"];
  return (
    <section className="py-16 sm:py-20 border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by operators at high-growth companies
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center opacity-70">
          {logos.map((l) => (
            <div key={l} className="text-center text-sm font-medium text-muted-foreground tracking-tight">
              {l}
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { q: "Replaced 3 ops hires with one Exire build. Pipeline doubled in a quarter.", n: "Maya Chen", r: "COO, Northwind" },
            { q: "Cleanest automation work we've seen. Zero hand-holding required.", n: "Daniel Reyes", r: "Founder, Lumen" },
            { q: "Our team got their week back. Revenue is the side effect.", n: "Priya Shah", r: "VP RevOps, Vertex" },
          ].map((t) => (
            <div key={t.n} className="rounded-xl glass p-6 hover-lift">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">"{t.q}"</p>
              <div className="mt-4 text-xs text-muted-foreground">{t.n} — {t.r}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROBLEM ----------
export function Problem() {
  const before = ["Missed leads in your inbox", "Repetitive manual tasks", "Slow follow-ups", "Disconnected tools", "Hiring to scale ops"];
  const after = ["Every lead captured & routed", "Agents handle the busywork", "Instant, personalized follow-up", "One unified system", "Scale without headcount"];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="The Problem"
          title="Manual Operations Are Slowing Your Growth"
          sub="Most teams aren't short on opportunity — they're short on systems. Here's the difference automation makes."
        />
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-border bg-card-grad p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Before</div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">Running on duct tape</h3>
            <ul className="mt-6 space-y-3">
              {before.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-card-grad p-6 sm:p-8 shadow-glow">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">After Exire</div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">Compounding leverage</h3>
            <ul className="mt-6 space-y-3">
              {after.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
const services = [
  { icon: Cpu, t: "AI Automation", d: "End-to-end systems that run your repetitive operations on autopilot." },
  { icon: Target, t: "Lead Generation", d: "Multi-channel pipelines that fill your calendar with qualified leads." },
  { icon: Database, t: "CRM Systems", d: "Custom CRMs and pipelines tuned to how your team actually sells." },
  { icon: MessageSquare, t: "AI Chatbots", d: "Conversational agents that qualify, support and convert 24/7." },
  { icon: Workflow, t: "Workflow Automation", d: "Connect every tool — eliminate the busywork between them." },
  { icon: Bot, t: "AI Agents", d: "Autonomous agents that research, write, route and close tasks." },
  { icon: Globe, t: "Website Design", d: "Conversion-focused sites engineered for the modern enterprise." },
  { icon: Building2, t: "Internal Systems", d: "Dashboards and tools your team will actually use every day." },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Services"
          title="Infrastructure for the AI-native company"
          sub="Eight pillars. One operating system for your business."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border border-border bg-card-grad p-6 hover-lift">
              <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-xs text-primary group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROCESS ----------
const steps = [
  { n: "01", t: "Audit", d: "We map your operations end-to-end and surface every leverage point." },
  { n: "02", t: "Strategy", d: "A custom blueprint — prioritized by ROI, scoped to your team." },
  { n: "03", t: "Automation Build", d: "We ship production systems in weeks, not quarters." },
  { n: "04", t: "Optimization", d: "Continuous tuning so your systems compound month over month." },
];

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Process" title="A clear path from chaos to compounding systems" />
        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl glass p-6 hover-lift">
              <div className="h-14 w-14 rounded-xl bg-primary-grad text-primary-foreground flex items-center justify-center font-semibold shadow-glow">
                {s.n}
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CASE STUDIES ----------
const cases = [
  { niche: "B2B SaaS", t: "Outbound engine that books 38 demos/mo", m: [{ k: "Pipeline", v: "+312%" }, { k: "CAC", v: "−41%" }, { k: "Hours saved", v: "180/mo" }] },
  { niche: "Agency", t: "AI-run client reporting & onboarding", m: [{ k: "Retention", v: "+27%" }, { k: "Margin", v: "+19%" }, { k: "Manual ops", v: "−72%" }] },
  { niche: "E-commerce", t: "24/7 support + churn-saver agent", m: [{ k: "CSAT", v: "4.9/5" }, { k: "Refunds", v: "−34%" }, { k: "LTV", v: "+22%" }] },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Case Studies" title="Real systems. Measured results." />
        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card-grad p-6 hover-lift">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">{c.niche}</div>
              <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">{c.t}</h3>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {c.m.map((mm) => (
                  <div key={mm.k} className="rounded-lg border border-border bg-background/40 p-3 text-center">
                    <div className="text-base font-semibold text-foreground">{mm.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{mm.k}</div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-xs text-primary">
                Read full case <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- BENEFITS ----------
const benefits = [
  { i: Clock, t: "Save Time", d: "Reclaim hundreds of hours from repetitive work." },
  { i: TrendingUp, t: "Scale Faster", d: "Grow output without growing headcount." },
  { i: Target, t: "More Leads", d: "Always-on pipelines that compound." },
  { i: Workflow, t: "Better Operations", d: "Every tool talking. Every step accountable." },
  { i: DollarSign, t: "Increased Revenue", d: "Speed-to-lead and conversion, automated." },
  { i: Wand2, t: "Less Manual Work", d: "Agents handle the busy parts of the job." },
];

export function Benefits() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Benefits" title="What you actually feel after we ship" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl glass p-6 hover-lift">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TOOLS ----------
export function Tools() {
  const tools = ["OpenAI", "Make", "Zapier", "HubSpot", "Slack", "Airtable", "Notion", "GoHighLevel"];
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Tools" title="We work with your stack" sub="Best-in-class tools, orchestrated end-to-end." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {tools.map((t) => (
            <div key={t} className="rounded-xl glass h-20 flex items-center justify-center hover-lift">
              <span className="text-sm font-medium text-foreground tracking-tight">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
const tms = [
  { q: "Exire didn't sell us automation — they delivered an operating system. Our team finally has leverage.", n: "Alex Morgan", r: "CEO, Polaris", res: "+$2.1M ARR in 6 months" },
  { q: "We were drowning in manual ops. Within 8 weeks, 70% of it was gone. The systems just work.", n: "Sara Kim", r: "Founder, Helios", res: "−72% ops time" },
  { q: "Premium work. Premium thinking. They feel like an in-house team, not a vendor.", n: "James O'Connor", r: "COO, Orbit", res: "3.4x pipeline" },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Testimonials" title="What founders & operators say" />
        <div className="grid md:grid-cols-3 gap-5">
          {tms.map((t) => (
            <div key={t.n} className="rounded-2xl border border-border bg-card-grad p-6 hover-lift">
              <Quote className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-grad flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {t.n.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center rounded-full glass px-3 py-1 text-xs text-primary">
                {t.res}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
const faqs = [
  { q: "How long does automation take?", a: "Most first workflows go live in 2–3 weeks. Full end-to-end systems typically ship within 6–10 weeks, depending on scope and integrations." },
  { q: "What businesses do you work with?", a: "We partner with B2B SaaS, agencies, e-commerce brands, and service businesses — typically post-revenue teams between 5 and 200 people looking to scale operations without scaling headcount." },
  { q: "What tools do you use?", a: "We're stack-agnostic. Common building blocks include OpenAI, Make, Zapier, n8n, HubSpot, Airtable, Notion, Slack, and custom code where it matters. We pick the right tool for your team — not the trendiest." },
  { q: "Do you provide support?", a: "Yes. Every build includes a handoff with documentation and training. We also offer optional monthly retainers for monitoring, optimization, and continuous improvement." },
  { q: "How much does it cost?", a: "Projects are scoped as fixed-fee builds, typically starting at $5k for focused automations and scaling up for full systems. Book a free call and we'll give you transparent pricing after a 30-minute scope." },
  { q: "Can you automate custom workflows?", a: "Absolutely. Custom workflows are our specialty — we build tailored AI agents, integrations, and internal tools designed around exactly how your team operates." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-xl border border-border bg-card-grad overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-foreground pr-4">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- FINAL CTA ----------
export function FinalCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card-grad p-10 sm:p-16 text-center shadow-glow">
          <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
          <div className="relative">
            <Sparkles className="h-6 w-6 text-primary mx-auto" />
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-gradient leading-tight">
              Build Systems That Run Your Business Smarter.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a free call. We'll map your highest-leverage automations in 30 minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-grad px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/5"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-primary-grad flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Exire Automation</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            AI infrastructure for businesses that want to scale without the headcount.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
            <li><Link to="/case-studies" className="text-foreground/80 hover:text-foreground">Case Studies</Link></li>
            <li><Link to="/process" className="text-foreground/80 hover:text-foreground">Process</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="text-foreground/80 hover:text-foreground">AI Automation</Link></li>
            <li><Link to="/services" className="text-foreground/80 hover:text-foreground">Lead Generation</Link></li>
            <li><Link to="/services" className="text-foreground/80 hover:text-foreground">CRM Systems</Link></li>
            <li><Link to="/services" className="text-foreground/80 hover:text-foreground">AI Agents</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:hello@exireautomation.com" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"><Mail className="h-3.5 w-3.5" /> Email</a></li>
            <li><Link to="/contact" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"><Calendar className="h-3.5 w-3.5" /> Book a call</Link></li>
            <li><a href="https://instagram.com/exireautomation" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"><Instagram className="h-3.5 w-3.5" /> Instagram</a></li>
            <li><a href="https://facebook.com/exireautomation" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"><Facebook className="h-3.5 w-3.5" /> Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Exire Automation. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
