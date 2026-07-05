import Asterisk from "./Asterisk";
import { profile, socialLinks } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-inverse">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <Asterisk className="size-3 text-inverse/70" />
          <p className="text-meta text-inverse/70">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <ul className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-meta link-underline text-inverse/70 hover:text-inverse"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-meta text-inverse/40">{profile.location}</p>
      </div>
    </footer>
  );
}
