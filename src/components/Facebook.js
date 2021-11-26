export default function Facebook() {
  return (
    <div>
      <aside className="fboption">Poll Options will go here</aside>
      {/* The preview will go here.. */}
      <div className="fbpreview">
        <div className="fbpreview__title">Title will go here</div>
        <div className="fbpreview__icons">
          <div className="fbpreview__icons__icon">Love</div>
          <div className="fbpreview__icons__icon">Haha</div>
          <div className="fbpreview__icons__icon">Care</div>
        </div>
        <div className="fbpreview__watermark">ReactionPoll.com</div>
      </div>
    </div>
  )
}
