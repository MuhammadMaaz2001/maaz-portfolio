export type MiniVisualKind = "stack" | "dash" | "chat" | "flow" | "table" | "check"

export default function MiniVisual({ kind }: { kind: MiniVisualKind }) {
  if (kind === "stack") {
    return (
      <div className="mv mv-stack">
        <i></i>
        <i></i>
        <i></i>
      </div>
    )
  }
  if (kind === "dash") {
    return (
      <div className="mv mv-dash">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    )
  }
  if (kind === "chat") {
    return (
      <div className="mv mv-chat">
        <i></i>
        <i></i>
        <i></i>
      </div>
    )
  }
  if (kind === "flow") {
    return (
      <div className="mv mv-flow">
        <i></i>
        <i></i>
        <i></i>
      </div>
    )
  }
  if (kind === "table") {
    return (
      <div className="mv mv-table">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    )
  }
  return (
    <div className="mv mv-check">
      <div>
        <span></span>
        <i></i>
      </div>
      <div>
        <span></span>
        <i></i>
      </div>
      <div>
        <i style={{ border: "1.5px solid var(--line)", background: "transparent" }}></i>
      </div>
    </div>
  )
}
