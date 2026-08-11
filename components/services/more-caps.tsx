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
    <div className="more-caps" data-reveal="">
      <span className="more-caps-label">Also available, on request</span>
      <div className="more-caps-row">
        {CAPS.map((cap) => (
          <span className="cap-item" key={cap.strong}>
            <strong>{cap.strong}</strong>
            {cap.rest}
          </span>
        ))}
      </div>
    </div>
  )
}
