import { NaissFinger } from "@/components/NaissFinger";
import { UnderlinedTitle } from "@/components/UnderlinedTitle";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center px-6 py-12 sm:px-12 sm:py-24 md:px-16">
      <NaissFinger>
        <article className="relative z-10 mx-auto max-w-xl text-left">
          <div className="naiss-hover-zone">
            <p>
              <UnderlinedTitle />
            </p>

            <p className="mt-7 text-lg leading-[1.55] text-black/80 dark:text-white/80">
              slightly delusional.
              <br />
              i build what i want to use.
            </p>

            <p className="mt-8 text-lg leading-[1.55] text-black/80 dark:text-white/80">
              i&apos;m interested in upgrading daily life.
              <br />
              p2p interactions.
              <br />
              the boring parts no one bothers to redesign.
            </p>

            <p className="mt-8 text-lg leading-[1.55] text-black/80 dark:text-white/80">
              right now i&apos;m making commutes{" "}
              <a
                href="https://naissride.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
                data-naiss-hover
              >
                naisser
              </a>
              .
              <br />
              faster. cheaper. more social.
              <br />
              <a
                href="https://naissride.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
                data-naiss-hover
              >
                naiss
              </a>
              .
            </p>
          </div>

          <footer className="mt-24 flex flex-col gap-4 text-sm text-black/60 dark:text-white/60 [&_a:hover]:no-underline">
            <div className="flex gap-6">
              <a
                href="https://github.com/lucaslosantos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
                aria-label="github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-losantos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
                aria-label="linkedin"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lucaslosantos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
                aria-label="instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <span>madrid. building.</span>
          </footer>
        </article>
      </NaissFinger>
    </main>
  );
}
