import { ArrowRight, Activity, TrendingUp, Zap, Bot } from "lucide-react";
import { Link } from "@tanstack/react-router";

const stats = [
  { v: "120K+", l: "Hours Saved" },
  { v: "850+", l: "Workflows Automated" },
  { v: "$12M", l: "Revenue Generated" },
  { v: "180+", l: "Clients Served" },
];

export function Hero() {
  return (
    <section id="top" className="relative bg-hero pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now onboarding for Q2 — limited capacity
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold text-gradient leading-[1.05]">
            We Build AI Systems That Scale Businesses Automatically.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We help businesses automate operations, generate leads, reduce manual work and build
            scalable AI infrastructure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-grad px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mt-16 sm:mt-20 mx-auto max-w-5xl animate-fade-up">
          <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative rounded-2xl glass shadow-elegant p-3 sm:p-4">
            <div className="rounded-xl bg-card-grad border border-border overflow-hidden">
              {/* top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="text-xs text-muted-foreground">exire.ai / control room</div>
                <div className="text-xs text-muted-foreground hidden sm:block">live</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 sm:p-4">
                {[
                  { i: <Activity className="h-4 w-4" />, k: "Active workflows", v: "126", d: "+12%" },
                  { i: <TrendingUp className="h-4 w-4" />, k: "Pipeline value", v: "$1.84M", d: "+38%" },
                  { i: <Bot className="h-4 w-4" />, k: "AI agents online", v: "24", d: "stable" },
                ].map((c) => (
                  <div key={c.k} className="rounded-lg border border-border bg-background/40 p-4">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="text-xs">{c.k}</span>
                      {c.i}
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-foreground">{c.v}</div>
                    <div className="text-xs text-primary mt-1">{c.d}</div>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4">
                <div className="rounded-lg border border-border bg-background/40 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-foreground">Lead → Close automation</span>
                    <span className="inline-flex items-center gap-1 text-xs text-primary">
                      <Zap className="h-3 w-3" /> running
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Capture", "Enrich", "Score", "Route", "Outreach", "Book", "Close"].map((s, i) => (
                      <div
                        key={s}
                        className="px-3 py-1.5 rounded-md border border-border bg-card text-muted-foreground"
                      >
                        <span className="text-primary mr-1">{String(i + 1).padStart(2, "0")}</span>
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 h-16 relative overflow-hidden rounded-md bg-background/60 border border-border">
                    <svg viewBox="0 0 400 60" className="w-full h-full">
                      <defs>
                        <linearGradient id="g" x1="0" x2="1">
                          <stop offset="0%" stopColor="oklch(0.65 0.22 295)" />
                          <stop offset="100%" stopColor="oklch(0.55 0.2 270)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 45 C 40 30, 80 50, 120 35 S 200 10, 240 25 S 320 50, 400 15"
                        stroke="url(#g)"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.l} className="rounded-xl glass p-5 text-center hover-lift">
              <div className="text-2xl sm:text-3xl font-semibold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
