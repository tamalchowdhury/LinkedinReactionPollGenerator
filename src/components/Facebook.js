import like from '../img/fb/like.png'
import love from '../img/fb/love.png'
import haha from '../img/fb/haha.png'
import wow from '../img/fb/wow.png'
import sad from '../img/fb/sad.png'
import angry from '../img/fb/angry.png'
import care from '../img/fb/care.png'

const icons = {
  like,
  love,
  haha,
  wow,
  sad,
  angry,
  care,
}

const PreviewIconDiv = ({ icon }) => {
  return (
    <div className="fbpreview__icons__icon">
      <img src={icons[icon]} alt={icon} />
    </div>
  )
}

const reactions = ['angry', 'love']

export default function Facebook() {
  return (
    <div>
      <aside className="fboption">Poll Options will go here</aside>
      {/* The preview will go here.. */}
      <div className="fbpreview">
        <div className="fbpreview__title">Title will go here</div>
        <div className="fbpreview__icons">
          {reactions.map((icon) => (
            <PreviewIconDiv icon={icon} />
          ))}
        </div>
        <div className="fbpreview__watermark">ReactionPoll.com</div>
      </div>
    </div>
  )
}
