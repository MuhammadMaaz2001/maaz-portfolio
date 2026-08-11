const LAYERS = [
  { label: "UI", value: "React · Next.js" },
  { label: "API", value: "Node.js · Express" },
  { label: "DATA", value: "MongoDB · PostgreSQL" },
]

export default function StackLayers() {
  return (
    <>
      {LAYERS.map((layer) => (
        <div className="stack-layer" key={layer.label}>
          <b>{layer.label}</b>
          <span>{layer.value}</span>
        </div>
      ))}
    </>
  )
}
