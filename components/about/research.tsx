import Link from "next/link"

export default function Research() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        Research
      </span>
      <h2 data-reveal="">Published Research</h2>
      <div className="max-w-[640px] rounded-2xl border border-ink-line bg-ink-bg-2 p-[26px]" data-reveal="1">
        <div className="mb-3 font-display text-[0.72rem] uppercase tracking-[0.06em] text-ink-gold">
          FigShare · Final Year Project
        </div>
        <h3 className="mb-2 font-display text-[1rem] font-bold">
          Training a Large Corpus Urdu Dataset for Paraphrasing on mT5 Conditional Generation
        </h3>
        <p className="mb-3.5 text-[0.85rem] text-ink-muted">
          Published July 2024. This research became the foundation for{" "}
          <Link href="/projects/urdu-ibdaa" className="text-ink-gold">
            Urdu Ibdaa
          </Link>{" "}
          — I built the frontend in Svelte, the backend API in FastAPI, and trained the underlying mT5 paraphrasing
          model myself in Python as part of my Final Year Project.
        </p>
        <a
          href="https://figshare.com/articles/preprint/Training_a_Large_Corpus_Urdu_Dataset_For_Paraphrasing_on_MT5_Conditional_Generation/26318086"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-0 items-center py-2.5 text-[0.9rem] font-semibold text-ink-gold hover:opacity-75"
        >
          Read the publication →
        </a>
      </div>
    </section>
  )
}
