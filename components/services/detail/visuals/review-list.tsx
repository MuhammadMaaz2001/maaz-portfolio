const ITEMS = [
  { text: "API error handling — consistent, but no retry logic", pending: false },
  { text: "DB schema — normalized correctly, indexes look right", pending: false },
  { text: "Auth flow — needs a second look before launch", pending: true },
]

export default function ReviewList() {
  return (
    <>
      {ITEMS.map((item) => (
        <div className="review-item" key={item.text}>
          <div className={`mark${item.pending ? " pending" : ""}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </>
  )
}
