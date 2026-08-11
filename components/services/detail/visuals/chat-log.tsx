export default function ChatLog() {
  return (
    <div className="chat-log">
      <div className="bubble user">Can you raise a ticket for my laptop issue?</div>
      <div className="bubble agent">Sure — I&apos;ve logged a ticket (#IT-2291) and assigned it to the hardware queue.</div>
      <div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
