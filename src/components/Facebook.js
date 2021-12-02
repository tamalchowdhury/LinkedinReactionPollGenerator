import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import ImgWithFallback from './ImgWithFallback'

import like from '../img/fb/like.png'
import love from '../img/fb/love.png'
import haha from '../img/fb/haha.png'
import wow from '../img/fb/wow.png'
import sad from '../img/fb/sad.png'
import angry from '../img/fb/angry.png'
import care from '../img/fb/care.png'
import likep from '../img/fb/like.webp'
import lovep from '../img/fb/love.webp'
import hahap from '../img/fb/haha.webp'
import wowp from '../img/fb/wow.webp'
import sadp from '../img/fb/sad.webp'
import angryp from '../img/fb/angry.webp'
import carep from '../img/fb/care.webp'

import { useRef, useState } from 'react'
const icons = {
  like,
  love,
  haha,
  wow,
  sad,
  angry,
  care,
}

const pngs = {
  like,
  love,
  haha,
  wow,
  sad,
  angry,
  care,
}

const webps = {
  like: likep,
  love: lovep,
  haha: hahap,
  wow: wowp,
  sad: sadp,
  angry: angryp,
  care: carep,
}

const checkboxItems = ['like', 'love', 'haha', 'wow', 'sad', 'angry', 'care']

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

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      window.alert('Only jpg, png & gif image files are allowed!')
      return
    }
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const reactions = ['like', 'love', 'care']

export default function Facebook() {
  const [pollTitle, setPollTitle] = useState(
    'Who is your favorite GTA Character?'
  )
  const [previewIcon, setPreviewIcon] = useState({
    like: {
      isShowing: true,
      label: 'text',
      image: 'image url/data',
    },
    love: {
      isShowing: true,
      label: 'text',
      image: 'image url/data',
    },
    haha: {
      isShowing: true,
      label: 'text',
      image: 'image url/data',
    },
    sad: {
      isShowing: false,
      label: 'text',
      image: 'image url/data',
    },
    wow: {
      isShowing: false,
      label: 'text',
      image: 'image url/data',
    },
    angry: {
      isShowing: false,
      label: 'text',
      image: 'image url/data',
    },
    care: {
      isShowing: false,
      label: 'text',
      image: 'image url/data',
    },
  })

  const PreviewIconDiv = ({ icon }) => {
    return (
      <div
        className={`fbpreview__icons__icon fbpreview__icons__icon__${icon}`}
        style={{ backgroundImage: `url(${previewIcon[icon].image})` }}
      >
        <img src={icons[icon]} alt={icon} />
      </div>
    )
  }

  // Take file from the computer and store it into the state
  function uploadImage(event, icon) {
    getBase64(event.currentTarget.files[0]).then((imageData) => {
      let state = { ...previewIcon }
      state[icon].image = imageData
      return setPreviewIcon(state)
    })
  }

  const OptionItemDiv = ({ icon }) => {
    return (
      <div className="fboption__item">
        <label htmlFor="">{icon}</label>
        <input type="text" />
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => uploadImage(e, icon)}
        />
      </div>
    )
  }

  const OptionCheckboxIcon = ({ icon }) => {
    return (
      <div
        className={`fboption__checkbox ${
          previewIcon[icon].isShowing ? '' : 'grayscale'
        }`}
      >
        <input
          type="checkbox"
          name={icon}
          id={icon}
          checked={previewIcon[icon].isShowing}
          onChange={(e) => {
            let state = { ...previewIcon }
            state[icon].isShowing = e.target.checked
            return setPreviewIcon(state)
          }}
        />
        <label htmlFor={icon}>
          <ImgWithFallback
            src={webps[icon]}
            fallback={pngs[icon]}
            alt={`Icon for ${icon}`}
            width={48}
            height={48}
          />
        </label>
      </div>
    )
  }

  return (
    <div className="content">
      {/* The Options Div */}
      <aside className="fboption">
        {/* Poll Title */}
        <section>
          <label className="fboption__label" htmlFor="poll-title">
            Poll Title:
          </label>
          <input
            type="text"
            name="poll-title"
            id="poll-title"
            onChange={(e) => setPollTitle(e.target.value)}
          />
        </section>
        {/* Icon Checkboxes */}
        <section>
          <label htmlFor="" className="fboption__label">
            Icons:
          </label>
          <div className="fboption__checkboxes">
            {checkboxItems.map((icon) => (
              <OptionCheckboxIcon icon={icon} />
            ))}
          </div>
        </section>
        {/* Each icon input options */}
        <section>
          <h3>Enter Poll Option Details</h3>
          {checkboxItems
            .filter((item) => previewIcon[item].isShowing)
            .map((icon) => (
              <OptionItemDiv icon={icon} />
            ))}
        </section>
        {/* Download Button */}
        <section>
          <button onClick={downloadImage}>Download</button>
        </section>
      </aside>
      {/* The preview div */}
      <div className="fbpreview">
        <div className="fbpreview__title">{pollTitle}</div>
        <div className="fbpreview__icons">
          {checkboxItems
            .filter((item) => previewIcon[item].isShowing)
            .map((icon) => (
              <PreviewIconDiv icon={icon} />
            ))}
        </div>
        <div className="fbpreview__watermark">ReactionPoll.com</div>
      </div>
    </div>
  )
}
