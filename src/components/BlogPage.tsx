import { WavyBackdrop } from "@/components/WavyBackdrop";
import { posts } from "@/lib/posts";

export function BlogPage() {
  return (
    <div className="relative min-h-screen">
      <WavyBackdrop />

      <main
        id="main-content"
        className="mx-auto w-full max-w-4xl px-5 pt-10 pb-16 sm:px-8 sm:pt-16"
      >
        <header className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <a href="/" className="transition-colors hover:text-stamp">
            Odin Matthias
          </a>
          <span className="hidden sm:inline">The notebook</span>
        </header>

        <section className="paper-grain relative rounded-lg border border-ink/10 bg-card/90 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-20px_rgba(60,40,20,0.25)] backdrop-blur-sm sm:p-9">
          <span aria-hidden="true" className="tape-strip -top-3 left-8 -rotate-6" />
          <span aria-hidden="true" className="tape-strip -top-3 right-10 rotate-3" />

          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-stamp">
            Field notes &amp; project logs
          </div>
          <h1 className="mt-2 max-w-2xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
            From the <span className="italic text-stamp">notebook</span>.
          </h1>
          <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-ink/80">
            Notes on making approachable software, running tabletop games, and the little
            experiments that connect the two.
          </p>

          <a
            href="/"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-ink/15 bg-card/70 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-card"
          >
            <span aria-hidden="true">←</span> Back to home
          </a>
        </section>

        <section className="render-lazy mt-20" aria-labelledby="articles-heading">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-stamp">
                All entries
              </div>
              <h2 id="articles-heading" className="mt-1 font-display text-3xl italic sm:text-4xl">
                Recent writing
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {posts.length} posts
            </span>
          </div>

          <ul className="paper-grain overflow-hidden rounded-md border border-ink/10 bg-card/85">
            {posts.map((post, index) => (
              <li key={post.title} className={index > 0 ? "border-t border-ink/10" : undefined}>
                <a href={`/articles/${post.slug}/`}>
                  <article className="group grid gap-4 px-6 py-6 transition-colors hover:bg-parchment-2/35 sm:grid-cols-[115px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:px-8 sm:py-7">
                    <div className="flex items-center gap-3 sm:block">
                      <time
                        dateTime={post.date}
                        className="font-mono text-[11px] uppercase tracking-widest text-stamp"
                      >
                        {post.displayDate}
                      </time>
                      <span className="rounded-full border border-moss/30 bg-moss/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-moss sm:mt-2 sm:inline-block">
                        {post.category}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-stamp sm:text-3xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-ink/75">
                        {post.description}
                      </p>
                    </div>
                    <span className="hidden font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-1 sm:inline">
                      Read →
                    </span>
                  </article>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            More notes are on their way.
          </p>
        </section>

        <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:text-left">
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
