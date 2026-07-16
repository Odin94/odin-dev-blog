import type { ReactNode } from "react";
import { WavyBackdrop } from "@/components/WavyBackdrop";

type Section = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  lede,
  sections,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  sections: Section[];
}) {
  return (
    <div className="relative min-h-screen">
      <WavyBackdrop />

      <main
        id="main-content"
        className="mx-auto w-full max-w-3xl px-5 pt-10 pb-16 sm:px-8 sm:pt-16"
      >
        {/* top strip */}
        <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <a href="/" className="hover:text-stamp">
            ← Back home
          </a>
          <span>Odin Matthias · Legal</span>
        </div>

        {/* Header card — matches homepage profile card */}
        <section className="paper-grain relative rounded-lg border border-ink/10 bg-card/90 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-20px_rgba(60,40,20,0.25)] backdrop-blur-sm sm:p-9">
          <span aria-hidden="true" className="tape-strip -top-3 left-8 -rotate-6" />
          <span aria-hidden="true" className="tape-strip -top-3 right-10 rotate-3" />

          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-stamp">
            {eyebrow}
          </div>
          <h1 className="mt-2 font-display text-4xl italic leading-[1.05] tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-pretty text-ink/80">
            {lede}
          </p>
        </section>

        {/* Content — one paper stack, subtle dividers */}
        <section className="paper-grain relative mt-12 rounded-md border border-ink/10 bg-card/85 backdrop-blur-sm">
          <span
            aria-hidden="true"
            className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-1"
          />
          <ol className="divide-y divide-ink/10">
            {sections.map((s, i) => (
              <li key={s.heading} className="px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[64px_minmax(0,1fr)]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-stamp">
                    § {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl leading-tight sm:text-3xl">{s.heading}</h2>
                    <div className="prose-legal mt-4 space-y-3 text-[15px] leading-relaxed text-ink/80">
                      {s.body}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:text-left">
          <div>© {new Date().getFullYear()} Odin Matthias</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="/impressum/" className="hover:text-stamp">
              Impressum
            </a>
            <a href="/datenschutz/" className="hover:text-stamp">
              Datenschutz
            </a>
            <button type="button" data-privacy-settings className="hover:text-stamp">
              Datenschutzeinstellungen
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
