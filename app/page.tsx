import type { Metadata } from "next"
import { Calendar, Clock, MapPin, Mail, ExternalLink } from "lucide-react"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Raushan Kumar Gupta — Doctor Conference 2026",
  description:
    "Raushan Kumar Gupta, organizer of Doctor Conference 2026 in Patna — an evening where leading medical professionals discuss advancements in patient care and healthcare technology.",
}

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-muted/40 px-4 py-10">
      <article className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {/* Header */}
        <header className="bg-primary px-8 py-10 text-primary-foreground">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
            Personal Calling Card
          </p>
          <h1 className="mt-2 text-3xl font-bold text-balance sm:text-4xl">Raushan Kumar Gupta</h1>
          <p className="mt-3 text-lg font-medium text-primary-foreground/90">
            Organizer of Doctor Conference 2026 in Patna
          </p>
        </header>

        {/* Body */}
        <div className="space-y-8 px-8 py-8">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">About the event</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              I organize the Doctor Conference, an evening where leading medical professionals discuss the latest
              advancements in patient care and healthcare technology. The evening includes a keynote address, expert
              panel discussions, and a networking dinner.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Details</h2>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center gap-3 text-foreground">
                <Calendar className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>15 September 2026</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Clock className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>6:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>Buddha Heritage, Patna</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <ExternalLink className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="https://medicon-navy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  medicon-navy.vercel.app
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Get in touch</h2>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:raushan.smile@gmail.com"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="size-5" aria-hidden="true" />
                Email me
              </a>
              <a
                href="https://github.com/raushan0007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary px-4 py-3 font-medium text-primary transition-colors hover:bg-primary/5"
              >
                <GithubIcon className="size-5" />
                GitHub
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
