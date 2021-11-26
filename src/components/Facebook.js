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
import { useState } from 'react'
const icons = {
  like,
  love,
  haha,
  wow,
  sad,
  angry,
  care,
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

  const OptionCheckboxIcon = ({ icon }) => {
    return (
      <div className="fboption__checkbox">
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
          <img src={icons[icon]} alt={icon} />
        </label>
      </div>
    )
  }

  const demoData = {
    like: {
      isShowing: true,
      label: 'text',
      image: 'image url/data',
    },
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
          <input type="text" name="poll-title" id="poll-title" />
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
          <div className="fboption__item">
            <label htmlFor="">Like</label>
            <input type="text" />
            <input type="file" name="" id="" />
          </div>
        </section>
      </aside>
      {/* The preview div */}
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
