export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text font-sans">
      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">

        {/* ── Hero ── */}
        <section className="mb-24">
          <h1 className="font-serif font-light text-[clamp(3.5rem,10vw,6rem)] leading-[0.9] tracking-tight text-text mb-6">
            Anthony<br />Arellano
          </h1>
          <p className="text-muted text-sm font-mono uppercase tracking-widest mb-1">
            Senior Software Engineer
          </p>
          <p className="text-muted text-sm font-mono mb-10">
            Peloton Interactive · Emerson, NJ
          </p>
          <nav className="flex gap-8 text-sm font-mono">
            <a
              href="https://github.com/anthonyarellano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/antarellano/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:theanthonyarellano@gmail.com"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              Email ↗
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              Resume ↗
            </a>
          </nav>
        </section>

        <hr className="border-border mb-24" />

        {/* ── Experience ── */}
        <section className="mb-24">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-10">
            // Experience
          </p>

          <div className="mb-8">
            <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
              <span className="text-text font-medium">Peloton Interactive</span>
            </div>

            <div className="space-y-1 mb-8">
              {[
                ["Senior Software Engineer", "Feb 2026 – Present"],
                ["Full Stack Software Engineer III", "Jul 2024 – Feb 2026"],
                ["Full Stack Software Engineer II", "Aug 2023 – Jul 2024"],
                ["Full Stack Software Engineer I", "Mar 2022 – Aug 2023"],
              ].map(([title, dates]) => (
                <div
                  key={title}
                  className="flex items-baseline justify-between gap-4 flex-wrap"
                >
                  <span className="text-sm text-text/80">{title}</span>
                  <span className="text-xs font-mono text-muted shrink-0">{dates}</span>
                </div>
              ))}
            </div>

            <ul className="space-y-4 border-l border-border pl-5">
              {[
                "Authored Peloton's Module Federation contract for 29 MFEs across 5 teams — singleton enforcement, error-boundary-wrapped remotes for graceful degradation, and a scaffolding CLI that auto-registers new scopes in the central remote registry and generates per-app CI workflows from shared templates.",
                "Designed Lumberjack, Peloton's first persistent audit system for content mutations — collapsed on-call RCA investigation from hours to ~15 minutes. Captures 15 entity types from 6 producer services with idempotent async batch DLT reprocessing. Ships a production MCP server and the Cosmos investigator dashboard with JSON diff, filters, and URL-driven entity history.",
                "Built per-PR deploy previews with an element-selector commenting overlay that lets PMs, QA, and engineers pin review comments to specific HTML elements. Each PR gets an isolated subdomain via ephemeral S3 and a CloudFront Host-header routing function — no per-PR infrastructure provisioned.",
                "Led a 29-MFE Webpack-to-Rspack migration using a Claude Code agent fleet with human review gates per landing, validated by bundle diffing, visual regression, and manual QA. Cut production builds 9× platform-wide.",
              ].map((bullet, i) => (
                <li key={i} className="text-sm text-text/70 leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="border-border mb-24" />

        {/* ── Projects ── */}
        <section className="mb-24">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-10">
            // Projects
          </p>

          <div className="space-y-14">
            {/* Fretboard Coach */}
            <div>
              <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
                <span className="text-text font-medium">Fretboard Coach</span>
                <span className="font-mono text-xs text-muted">In progress</span>
              </div>
              <p className="text-sm text-muted mb-4">
                AI-powered guitar coaching for intermediate players
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Next.js", "React 19", "Claude API", "Tone.js", "Supabase", "Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted border border-border px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 border-l border-border pl-5">
                {[
                  "Streaming Claude API integration with custom system prompts that generate adaptive, structured practice plans.",
                  "Interactive fretboard diagrams with interval highlighting and Tone.js ear training for interval recognition.",
                  "Progress tracking across 9 learning layers with real-time persistence and PWA support.",
                ].map((bullet, i) => (
                  <li key={i} className="text-sm text-text/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coup */}
            <div>
              <div className="flex items-baseline gap-4 mb-1 flex-wrap">
                <span className="text-text font-medium">Coup</span>
                <div className="flex gap-3 font-mono text-xs">
                  <a
                    href="https://coup-web-client.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-200"
                  >
                    Live ↗
                  </a>
                  <a
                    href="https://github.com/anthonyarellano/coup-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-200"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted mb-4">
                Real-time multiplayer board game
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["React", "TypeScript", "Zustand", "Express", "WebSockets", "Vite", "Vercel"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted border border-border px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 border-l border-border pl-5">
                {[
                  "Custom WebSocket wrapper with connection state tracking and automatic reconnection backoff for resilient real-time communication.",
                  "Synchronized game state across concurrent players using Zustand with lobby management and dynamic player lifecycle.",
                  "TypeScript message protocol and pnpm monorepo with shared types between client and server.",
                ].map((bullet, i) => (
                  <li key={i} className="text-sm text-text/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-border mb-24" />

        {/* ── Music ── */}
        <section className="mb-24">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-6">
            // Music
          </p>
          <p className="text-sm text-text/70 leading-relaxed mb-5">
            Before software, I studied audio engineering. I still make music — two projects on Spotify.
          </p>
          <div className="flex gap-6 font-mono text-xs">
            <a
              href="https://open.spotify.com/artist/1Y3tB2Bs3lxbAA6HD2j6BW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              Coco Blue ↗
            </a>
            <a
              href="https://open.spotify.com/artist/76yRWpn2Qg8JHhVdhJbecC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              Anthony Arellano ↗
            </a>
          </div>
        </section>

        <hr className="border-border mb-24" />

        {/* ── Contact ── */}
        <section className="mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-6">
            // Contact
          </p>
          <a
            href="mailto:theanthonyarellano@gmail.com"
            className="text-text hover:text-accent transition-colors duration-200 text-sm font-mono"
          >
            theanthonyarellano@gmail.com ↗
          </a>
        </section>

        <footer className="font-mono text-xs text-muted pt-8 border-t border-border">
          Anthony Arellano · {new Date().getFullYear()}
        </footer>

      </div>
    </main>
  );
}
