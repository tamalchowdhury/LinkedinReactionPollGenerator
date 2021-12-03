import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import ImgWithFallback from './ImgWithFallback'
import { HelmetProvider, Helmet } from 'react-helmet-async'

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

import { useEffect, useRef, useState } from 'react'
import DownloadButton from './DownloadButton'
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

// Take file from the computer and store it into the state
function uploadImage(event, previewIcon, setPreviewIcon, icon) {
  getBase64(event.currentTarget.files[0]).then((imageData) => {
    let state = { ...previewIcon }
    state[icon].image = imageData
    return setPreviewIcon(state)
  })
}

const OptionItemDiv = ({ previewIcon, setPreviewIcon, icon }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="fboption__item">
      <div className="fboption__item__label">
        <label htmlFor={`image_${icon}`}>Background image for {icon}</label>
        <ImgWithFallback
          src={webps[icon]}
          fallback={pngs[icon]}
          alt={`Mini icon for ${icon}`}
          setLoaded={setLoaded}
          height={20}
          width={20}
        />
      </div>
      {previewIcon[icon].image ? (
        <>
          <div
            className="fboption__item__img"
            style={{ backgroundImage: `url(${previewIcon[icon].image})` }}
          >
            <button
              type="button"
              className="fboption__item__img__close"
              onClick={() => {
                const state = { ...previewIcon }
                state[icon].image = undefined
                return setPreviewIcon(state)
              }}
            >
              &times;
            </button>
          </div>
        </>
      ) : (
        <input
          type="file"
          name={`image_${icon}`}
          id={`image_${icon}`}
          onChange={(e) => uploadImage(e, previewIcon, setPreviewIcon, icon)}
        />
      )}

      <label htmlFor={`label_${icon}`}>Label for {icon} (optional)</label>
      <input
        type="text"
        id={`label_${icon}`}
        value={previewIcon[icon].label}
        onChange={(e) => {
          const state = { ...previewIcon }
          state[icon].label = e.target.value
          return setPreviewIcon(state)
        }}
      />
    </div>
  )
}

const OptionCheckboxIcon = ({ previewIcon, setPreviewIcon, icon }) => {
  const [loaded, setLoaded] = useState(false)
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
        <div className={`icon box ${loaded ? 'loaded' : 'empty'}`}>
          <ImgWithFallback
            src={webps[icon]}
            fallback={pngs[icon]}
            alt={`Icon for ${icon}`}
            width={48}
            height={48}
            setLoaded={setLoaded}
            title={`Icon for ${icon}`}
          />
        </div>
      </label>
    </div>
  )
}

const PreviewIconDiv = ({ previewIcon, align, icon }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`fbpreview__icons__icon fbpreview__icons__icon__${icon} ${align}`}
      style={{ backgroundImage: `url(${previewIcon[icon].image})` }}
    >
      <div className={`image box ${loaded ? 'loaded' : 'empty'} ${icon}`}>
        <img
          src={pngs[icon]}
          alt={`Reaction icon for ${icon}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <p>{previewIcon[icon].label}</p>
    </div>
  )
}

export default function Facebook() {
  const [pollTitle, setPollTitle] = useState('Who is your favorite?')
  const [textColor, setTextColor] = useState('dark')
  const [align, setAlign] = useState('middle') // bottom, middle, and top
  const [previewIcon, setPreviewIcon] = useState({
    like: {
      isShowing: true,
      label: undefined,
      image: undefined,
    },
    love: {
      isShowing: true,
      label: undefined,
      image: undefined,
    },
    haha: {
      isShowing: false,
      label: undefined,
      image: undefined,
    },
    sad: {
      isShowing: false,
      label: undefined,
      image: undefined,
    },
    wow: {
      isShowing: false,
      label: undefined,
      image: undefined,
    },
    angry: {
      isShowing: false,
      label: undefined,
      image: undefined,
    },
    care: {
      isShowing: true,
      label: undefined,
      image: undefined,
    },
  })

  return (
    <>
      <Helmet>
        <title>Facebook Reaction Poll Generator | ReactionPoll.com</title>
        <link rel="canonical" href="https://reactionpoll.com/facebook" />
      </Helmet>
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
              value={pollTitle}
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
                <OptionCheckboxIcon
                  previewIcon={previewIcon}
                  setPreviewIcon={setPreviewIcon}
                  icon={icon}
                  key={`option_${icon}`}
                />
              ))}
            </div>
          </section>
          <section>
            <label htmlFor="">Text Color:</label>
            <div className="fboption__radio__items">
              <input
                type="radio"
                name="text_color"
                id="dark"
                value="dark"
                checked={textColor === 'dark'}
                onChange={(e) => setTextColor(e.target.value)}
              />
              <label htmlFor="dark">Dark</label>
              <input
                type="radio"
                name="text_color"
                id="light"
                value="light"
                checked={textColor === 'light'}
                onChange={(e) => setTextColor(e.target.value)}
              />
              <label htmlFor="light">Light</label>
            </div>
          </section>
          <section>
            <label htmlFor="">Align Icons:</label>
            <div className="fboption__radio__items">
              <input
                type="radio"
                name="align"
                id="bottom"
                value="bottom"
                checked={align === 'bottom'}
                onChange={(e) => setAlign(e.target.value)}
              />
              <label htmlFor="bottom">Bottom</label>
              <input
                type="radio"
                name="align"
                id="middle"
                value="middle"
                checked={align === 'middle'}
                onChange={(e) => setAlign(e.target.value)}
              />
              <label htmlFor="middle">Middle</label>
              <input
                type="radio"
                name="align"
                id="top"
                value="top"
                checked={align === 'top'}
                onChange={(e) => setAlign(e.target.value)}
              />
              <label htmlFor="top">Top</label>
            </div>
          </section>
          {/* Each icon input options */}
          <section>
            <h3>Enter Poll Option Details</h3>
            {checkboxItems
              .filter((item) => previewIcon[item].isShowing)
              .map((icon) => (
                <OptionItemDiv
                  previewIcon={previewIcon}
                  setPreviewIcon={setPreviewIcon}
                  icon={icon}
                  key={`checkbox_${icon}`}
                />
              ))}
          </section>
          {/* Download Button */}
          <section>
            <DownloadButton title={pollTitle} element=".fbpreview" />
          </section>
        </aside>
        {/* The preview div */}

        <div
          className={`fbpreview ${textColor === 'light' ? 'light' : 'dark'}`}
        >
          <div className="fbpreview__title">{pollTitle}</div>
          <div className="fbpreview__icons">
            {checkboxItems
              .filter((item) => previewIcon[item].isShowing)
              .map((icon) => (
                <PreviewIconDiv
                  previewIcon={previewIcon}
                  align={align}
                  icon={icon}
                  key={`preview_${icon}`}
                />
              ))}
          </div>
          <div className="fbpreview__watermark">ReactionPoll.com</div>
        </div>
      </div>
    </>
  )
}
