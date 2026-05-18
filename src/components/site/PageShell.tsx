import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Sections";

export function PageShell({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative bg-hero pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 grid-bg pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-gradient leading-[1.05]">
              {title}
            </h1>
            {sub && (
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {sub}
              </p>
            )}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
