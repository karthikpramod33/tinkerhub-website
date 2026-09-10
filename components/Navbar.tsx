"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg">
          <Image src="/images/logo.svg" alt={`${siteConfig.communityName} logo`} width={32} height={32} className="rounded-md" />
          {siteConfig.brandName}
        </Link>

        <ul className="hidden md:flex items-center gap-7 font-body text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-paper transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#join"
          className="hidden md:inline-flex items-center rounded-full bg-electric border-2 border-paper px-4 py-2 text-sm font-semibold text-paper shadow-[3px_3px_0_0_#242233] hover:shadow-[1px_1px_0_0_#242233] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Join Us
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-paper transition-transform ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-paper transition-transform ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-line px-5 py-4">
          <ul className="flex flex-col gap-4 font-body text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="text-muted hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#join"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-electric px-4 py-2 text-sm font-medium text-paper"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
