import Link from "next/link"

export default function Research() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        Research
      </span>
      <h2 data-reveal="">Published Research</h2>
      <div className="cert-card" data-reveal="1" style={{ maxWidth: 640 }}>
        <div className="cert-issuer">FigShare · Final Year Project</div>
        <h3>Training a Large Corpus Urdu Dataset for Paraphrasing on mT5 Conditional Generation</h3>
        <p style={{ marginBottom: 14 }}>
          Published July 2024. This research became the foundation for{" "}
          <Link href="/projects/urdu-ibdaa" style={{ color: "var(--accent)" }}>
            Urdu Ibdaa
          </Link>{" "}
          — I built the frontend in Svelte, the backend API in FastAPI, and trained the underlying mT5 paraphrasing
          model myself in Python as part of my Final Year Project.
        </p>
        <a
          href="https://figshare.com/articles/preprint/Training_a_Large_Corpus_Urdu_Dataset_For_Paraphrasing_on_MT5_Conditional_Generation/26318086"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-more"
          style={{ minHeight: "auto", padding: "10px 0" }}
        >
          Read the publication →
        </a>
      </div>
    </section>
  )
}
