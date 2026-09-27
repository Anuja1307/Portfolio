"use client";

import { useState } from "react";
import { nav, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-light/70 dark:border-line/70 bg-base-light/85 dark:bg-base/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-medium tracking-tight">
          {profile.name.split(" ").map((n) => n[0]).join("")}
          <span className="ml-2 hidden text-muted-light dark:text-muted sm:inline font-body font-normal">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm text-ink-light/80 dark:text-ink/80 hover:text-signal transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line-light dark:border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line-light dark:border-line px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block text-sm text-ink-light/85 dark:text-ink/85"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
