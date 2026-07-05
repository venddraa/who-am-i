import Link from "next/link";
import Asterisk from "@/components/Asterisk";

export default function NotFound() {
  return (
    <main id="main" className="flex-1 flex flex-col justify-center mx-auto max-w-7xl w-full px-5 sm:px-8 py-24">
      <div className="text-meta text-muted flex items-center gap-3 mb-10">
        <Asterisk className="size-3" />
        <span>404 — Page not found</span>
      </div>
      <h1 className="text-display-xl uppercase">Nothing here</h1>
      <Link href="/" className="text-meta link-underline mt-10 inline-block">
        ← Back home
      </Link>
    </main>
  );
}
