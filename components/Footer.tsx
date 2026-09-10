import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface2/40 px-5 py-14">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src="/images/logo.svg" alt={`${siteConfig.communityName} logo`} width={28} height={28} className="rounded-md" />
            <p className="font-display font-semibold text-lg">
              {siteConfig.brandName}
            </p>
          </div>
          <p className="text-muted text-sm mb-1">{siteConfig.collegeName}</p>
          <p className="text-muted text-sm">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase text-muted mb-3">Navigate</p>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase text-muted mb-3">Elsewhere</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href={siteConfig.officialTinkerHubUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper">
                Official TinkerHub
              </a>
            </li>
            <li>
              <a href={siteConfig.aboutCollegeUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper">
                College Website
              </a>
            </li>
            <li>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper">
                GitHub
              </a>
            </li>
            <li>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper">
                Instagram
              </a>
            </li>
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase text-muted mb-3">Contact</p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-muted hover:text-paper text-sm">
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-line mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted">
        <p>© {new Date().getFullYear()} {siteConfig.communityName}, {siteConfig.collegeName}. All rights reserved.</p>
        <p>{siteConfig.footerNote}</p>
      </div>
    </footer>
  );
}
