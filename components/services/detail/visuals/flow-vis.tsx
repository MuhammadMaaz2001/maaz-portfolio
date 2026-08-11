const NODES = [
  { num: "1", label: "Event", rest: "triggers" },
  { num: "2", label: "Webhook", rest: "fires" },
  { num: "3", label: "Record", rest: "synced" },
  { num: "4", label: "Team", rest: "notified" },
]

const TRIGGERS = ["New Lead", "Transaction", "Approval", "Form Submit"]

export default function FlowVis() {
  return (
    <>
      <div className="flow-vis">
        {NODES.map((node) => (
          <div className="flow-node" key={node.num}>
            <div className="flow-dot">{node.num}</div>
            <span>
              <b>{node.label}</b> {node.rest}
            </span>
          </div>
        ))}
      </div>
      <div className="flow-triggers">
        {TRIGGERS.map((t) => (
          <span className="trigger-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </>
  )
}
