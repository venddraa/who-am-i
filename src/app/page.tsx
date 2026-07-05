import Asterisk from "@/components/Asterisk";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center mx-auto max-w-7xl w-full px-5 sm:px-8 py-24">
      <div className="text-meta text-muted flex items-center gap-3 mb-10">
        <Asterisk className="size-3" />
        <span>Portfolio under construction</span>
      </div>
      <h1 className="text-display-xl uppercase">
        Vendra
        <br />
        Hastagiyan
      </h1>
      <p className="text-statement mt-10 max-w-2xl text-muted">
        Data Science &amp; Applied AI. Full site coming soon.
      </p>
    </main>
  );
}
