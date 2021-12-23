import ImgWithFallback from './ImgWithFallback'
import { pngs, webps } from './images'
import { useState } from 'react'

const OptionItemDiv = ({
  previewIcon,
  setPreviewIcon,
  icon,
}: OptionItemPropType) => {
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

export default OptionItemDiv
