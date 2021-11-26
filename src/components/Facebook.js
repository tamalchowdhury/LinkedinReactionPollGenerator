import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import like from '../img/fb/like.png'
import love from '../img/fb/love.png'
import haha from '../img/fb/haha.png'
import wow from '../img/fb/wow.png'
import sad from '../img/fb/sad.png'
import angry from '../img/fb/angry.png'
import care from '../img/fb/care.png'

import bg from '../img/fb/ken.jpg'
const icons = {
  like,
  love,
  haha,
  wow,
  sad,
  angry,
  care,
}

function downloadImage() {
  const nodeElement = document.querySelector('.fbpreview')
  domtoimage
    .toBlob(nodeElement)
    .then(function (blob) {
      window.saveAs(blob, `poll-SOME_TITLE`)
    })
    .catch((err) => {
      // Track the error
    })
}

const PreviewIconDiv = ({ icon }) => {
  return (
    <div
      className="fbpreview__icons__icon"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img src={icons[icon]} alt={icon} />
    </div>
  )
}

const reactions = ['like', 'love', 'care']

export default function Facebook() {
  return (
    <div className="content">
      <aside className="fboption">
        Poll Options will go here
        <button onClick={downloadImage}>Download image</button>
      </aside>
      {/* The preview will go here.. */}
      <div className="fbpreview">
        <div className="fbpreview__title">
          Who is your favorite GTA Character?
        </div>
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
