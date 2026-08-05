import StorySlider from "./story-slider"

export default function Journey() {
  return (
    <section className="inner-section">
      <span className="section-tag" data-reveal="">
        My Path
      </span>
      <h2 data-reveal="">The journey so far</h2>
      <p className="section-sub" data-reveal="1">
        Not a straight line, but every stop taught me something that shows up in how I build today.
      </p>
      <StorySlider />
    </section>
  )
}
