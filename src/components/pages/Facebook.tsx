import { useState } from 'react'
import PreviewIconDiv from '../PreviewIconDiv'
import OptionItemDiv from '../OptionItemDiv'
import OptionCheckboxIcon from '../OptionCheckboxIcon'
import DownloadButton from '../DownloadButton'
import { Helmet } from 'react-helmet-async'

const checkboxItems = ['like', 'love', 'haha', 'wow', 'sad', 'angry', 'care']

type IconType = {
  isShowing: boolean
  label: string
  image: string
}

type PreviewIcon = {}

type OptionItemPropType = {
  previewIcon: PreviewIcon
  setPreviewIcon: () => void
  icon: string
}

export default function Facebook() {
  const [pollTitle, setPollTitle] = useState('Who is your favorite?')
  const [textColor, setTextColor] = useState('dark')
  const [align, setAlign] = useState('middle') // bottom, middle, and top

  type iconState = {
    isShowing: boolean
    label: string
    image: string
  }

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
