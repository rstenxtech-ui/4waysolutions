import Image from "next/image";
import { NAV_LINKS, EMAIL, LANDLINE_DISPLAY, LANDLINE_TEL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1220px] px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <Image
              src="/logo/4WaySolutions.png"
              alt="4Way Solutions"
              width={308}
              height={97}
              className="h-14 w-auto mb-4"
            />
            <p className="text-ink-soft text-sm max-w-xs">
              Authorised Jaquar service partner in Chennai, covering sales,
              service, plumbing and home cleaning.
            </p>
            <p className="mt-3 font-heading tracking-wide text-brass text-base">
              &ldquo;நீரின்றி அமையாது உலகு!&rdquo;{" "}
              <span className="text-ink-faint font-body italic">
                — without water, there is no world.
              </span>
            </p>
          </div>

          <div>
            <h5 className="font-body text-xs uppercase tracking-[0.1em] text-ink-faint mb-4">
              Sitemap
            </h5>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-ink-soft hover:text-brand-strong transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-body text-xs uppercase tracking-[0.1em] text-ink-faint mb-4">
              Contact
            </h5>
            <ul className="space-y-2.5 text-sm text-ink-soft">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-brand-strong transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`tel:${LANDLINE_TEL}`} className="hover:text-brand-strong transition-colors">
                  {LANDLINE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-brand-strong transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>Alwarthirunagar, Chennai 600087</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-faint">
          <span>© 2026 4Way Solutions — Authorised Jaquar Service Partner</span>
          <div className="flex items-center gap-2.5">
            <span className="uppercase tracking-[0.08em]">Authorised Partner</span>
            <Image
              src="/logo/jaquar.svg"
              alt="Jaquar"
              width={679}
              height={250}
              className="h-4 w-auto opacity-80"
            />
          </div>
          <span>Chennai, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
