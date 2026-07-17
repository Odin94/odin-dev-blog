import { WavyBackdrop } from "@/components/WavyBackdrop";
import { posts } from "@/lib/posts";
import { Heart } from "lucide-react";

const PROFILE_IMG = "/profile_25.webp";
const PROFILE_IMG_SRC_SET = "/profile_25-256w.webp 256w, /profile_25-384w.webp 384w";

type Project = {
  title: string;
  system: string;
  blurb: string;
  href: string;
  image: string;
  imageSrcSet: string;
  imageAlt: string;
  tilt: "l" | "r" | "s";
};

const projects: Project[] = [
  {
    title: "Progeny",
    system: "Vampire: The Masquerade v5",
    blurb:
      "A friendly character creator for VtM v5 — pick a clan, spend your dots, print a sheet that doesn't look like a spreadsheet.",
    href: "https://progeny.odin-matthias.de",
    image: "/projects/progeny.jpg",
    imageSrcSet:
      "/projects/progeny-384w.webp 384w, /projects/progeny-608w.webp 608w, /projects/progeny-640w.webp 640w, /projects/progeny-960w.webp 960w, /projects/progeny.jpg 1280w",
    imageAlt: "Progeny character creator landing page",
    tilt: "l",
  },
  {
    title: "Hiveborn",
    system: "Heart: The City Beneath",
    blurb:
      "A companion tool for Heart — build hivelings, roll delves, and track the slow, gorgeous decay of your delvers.",
    href: "https://hiveborn.odin-matthias.de",
    image: "/projects/hiveborn.jpg",
    imageSrcSet:
      "/projects/hiveborn-384w.webp 384w, /projects/hiveborn-608w.webp 608w, /projects/hiveborn-640w.webp 640w, /projects/hiveborn-960w.webp 960w, /projects/hiveborn.jpg 1280w",
    imageAlt: "Hiveborn digital character sheet",
    tilt: "s",
  },
  {
    title: "CozyCrowns",
    system: "Brindlewood Bay",
    blurb:
      "Mystery-of-the-week helper for Brindlewood Bay: clue tracker, theory builder, and a very judgmental cat.",
    href: "https://cozycrowns.odin-matthias.de",
    image: "/projects/cozycrowns.jpg",
    imageSrcSet:
      "/projects/cozycrowns-384w.webp 384w, /projects/cozycrowns-608w.webp 608w, /projects/cozycrowns-640w.webp 640w, /projects/cozycrowns-960w.webp 960w, /projects/cozycrowns.jpg 1280w",
    imageAlt: "CozyCrowns digital character sheet",
    tilt: "r",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Odin94" },
  { label: "Bluesky", href: "https://bsky.app/profile/odinmatthias.bsky.social" },
  { label: "Reddit", href: "https://www.reddit.com/user/ProgenyDev/" },
];

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <WavyBackdrop />

      <main
        id="main-content"
        className="mx-auto w-full max-w-4xl px-5 pt-10 pb-16 sm:px-8 sm:pt-16"
      >
        {/* tiny top strip */}
        <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Odin Matthias</span>
          <span className="hidden sm:inline">Munich, Germany</span>
        </div>

        {/* Profile / intro card */}
        <section className="paper-grain relative rounded-lg border border-ink/10 bg-card/90 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_40px_-20px_rgba(60,40,20,0.25)] backdrop-blur-sm sm:p-9">
          {/* tape */}
          <span aria-hidden="true" className="tape-strip -top-3 left-8 -rotate-6" />
          <span aria-hidden="true" className="tape-strip -top-3 right-10 rotate-3" />

          <div className="grid grid-cols-[minmax(0,1fr)] gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
            <div className="flex shrink-0 flex-col items-start gap-3">
              <div className="relative">
                <div className="absolute -inset-1 -rotate-2 rounded-md bg-stamp/10" aria-hidden />
                <img
                  src={PROFILE_IMG}
                  srcSet={PROFILE_IMG_SRC_SET}
                  sizes="(min-width: 640px) 160px, 128px"
                  alt="Portrait of Odin Matthias"
                  width={168}
                  height={168}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="relative size-32 rounded-md object-cover ring-1 ring-ink/15 sm:size-40"
                />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <div>Lead Developer @ summ ai</div>
                <div className="mt-0.5 text-stamp">TTRPG DM & tools dev</div>
              </div>
              <a
                href="https://ko-fi.com/odin_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-32 items-center justify-center gap-2 rounded-md bg-stamp px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm ring-1 ring-stamp/60 transition-transform hover:-translate-y-0.5 hover:rotate-[-0.5deg] active:translate-y-0 sm:w-40"
              >
                <Heart
                  aria-hidden="true"
                  className="size-4 shrink-0 fill-current transition-transform group-hover:scale-110"
                  strokeWidth={2}
                />
                <span>Support me on Ko-fi</span>
              </a>
            </div>

            <div className="min-w-0">
              <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-balance sm:text-5xl">
                Hi, I&rsquo;m <span className="italic text-stamp">Odin</span>.
                <br />I make tools for tabletop roleplaying games.
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-pretty text-ink/80">
                As a software developer, I value simple, direct code, strong type systems, explicit
                behavior, and maintainable systems.
              </p>
              <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-pretty text-ink/80">
                I like taking strong ownership over my work, from talking to users to learn their
                needs, to designing and building solutions and finally monitoring and maintaining
                them in production.
              </p>
              <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-pretty text-ink/80">
                As a DM, I like story & roleplaying focused games with a strong emphasis on playing
                to find out, creating meaningful relationships, and using improvisation over
                planning to let my players help shape the world and the story.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md bg-stamp px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm ring-1 ring-stamp/60 transition-transform hover:-translate-y-0.5 hover:rotate-[-0.5deg] active:translate-y-0"
                >
                  See what I&rsquo;ve built
                </a>
                <a
                  href="https://github.com/Odin94?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-card/70 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-card"
                >
                  Browse all GitHub projects
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="underline decoration-stamp/30 decoration-2 underline-offset-4 transition-colors hover:text-stamp"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects — pinned cards */}
        <section id="projects" aria-labelledby="projects-heading" className="render-lazy mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 id="projects-heading" className="mt-1 font-display text-3xl italic sm:text-4xl">
                Things I&rsquo;ve made
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`paper-grain group relative block rounded-sm border border-ink/10 bg-card/95 p-3 pb-5 shadow-[0_2px_2px_rgba(60,40,20,0.08),0_22px_32px_-20px_rgba(60,40,20,0.38)] sm:p-4 sm:pb-6 ${
                  p.tilt === "l" ? "card-tilt-l" : p.tilt === "r" ? "card-tilt-r" : "card-tilt-s"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`tape-strip z-20 -top-3 left-1/2 -translate-x-1/2 ${
                    i % 2 === 0 ? "-rotate-3" : "rotate-3"
                  }`}
                />
                <div className="relative aspect-video overflow-hidden rounded-[2px] border border-ink/15 bg-muted shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]">
                  <img
                    src={p.image}
                    srcSet={p.imageSrcSet}
                    sizes="(min-width: 960px) 370px, (min-width: 640px) calc((100vw - 156px) / 2), calc(100vw - 68px)"
                    alt={p.imageAlt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <div className="px-2 pt-5">
                  <h3 className="font-display text-2xl leading-tight underline decoration-stamp/0 underline-offset-4 transition-all group-hover:decoration-stamp/40">
                    {p.title}
                  </h3>
                  <div className="mt-1 font-mono text-xs italic text-stamp">{p.system}</div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{p.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Blog / notebook */}
        <section id="notes" aria-labelledby="notes-heading" className="render-lazy mt-24">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-stamp">
                Section 03
              </div>
              <h2 id="notes-heading" className="mt-1 font-display text-3xl italic sm:text-4xl">
                From the notebook
              </h2>
            </div>
            <a
              href="/blog/"
              className="hidden font-mono text-[11px] uppercase tracking-widest text-muted-foreground underline decoration-stamp/40 decoration-2 underline-offset-4 transition-colors hover:text-stamp sm:block"
            >
              All posts →
            </a>
          </div>

          <ul className="paper-grain rounded-md border border-ink/10 bg-card/85">
            {posts.map((post, i) => (
              <li key={post.title}>
                <a
                  href={`/articles/${post.slug}/`}
                  className={`group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-2 px-6 py-5 sm:grid-cols-[110px_minmax(0,1fr)_auto] ${
                    i > 0 ? "border-t border-ink/10" : ""
                  }`}
                >
                  <span className="order-2 font-mono text-[11px] uppercase tracking-widest text-stamp sm:order-1">
                    {post.displayDate}
                  </span>
                  <div className="order-1 min-w-0 sm:order-2">
                    <div className="font-display text-xl leading-tight transition-colors group-hover:text-stamp">
                      {post.title}
                    </div>
                    <div className="mt-1 truncate text-sm text-ink/70">{post.description}</div>
                  </div>
                  <span className="order-3 hidden font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-1 sm:inline">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <a href="/blog/" className="transition-colors hover:text-stamp">
              Browse the notebook →
            </a>
          </div>
        </section>

        {/* Footer */}
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
