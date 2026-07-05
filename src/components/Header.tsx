import Link from "next/link";
import Asterisk from "./Asterisk";
import { navigation, profile } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          <Asterisk className="size-3.5" />
          <span className="text-meta">{profile.shortName}</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 sm:gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-meta link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
