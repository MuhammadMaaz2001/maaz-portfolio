const CAPS = [
  {
    strong: "Legacy Modernization & Migrations",
    rest: " — moving older projects (e.g. PHP → Vue) or upgrading framework/ORM versions without a full rewrite.",
  },
  {
    strong: "Real-Time & Embedded Integration",
    rest: " — MQTT pub/sub and WebSocket-based live data, including bridging web apps to embedded/IoT systems.",
  },
  {
    strong: "Server Management & Deployment",
    rest: " — process management with PM2, Redis caching, and light DevOps for small production deployments.",
  },
]

export default function MoreCaps() {
  return (
    <div className="rounded-2xl border border-dashed border-ink-line bg-ink-bg-2 p-7 sm:px-8" data-reveal="">
      <span className="mb-4 block font-mono text-[0.74rem] uppercase tracking-[0.06em] text-ink-gold">
        Also available, on request
      </span>
      <div className="flex flex-col gap-3">
        {CAPS.map((cap) => (
          <span className="text-[0.88rem] leading-[1.6] text-ink-muted" key={cap.strong}>
            <strong className="text-ink-text">{cap.strong}</strong>
            {cap.rest}
          </span>
        ))}
      </div>
    </div>
  )
}
