import { useState } from 'react'
import { pngs, webps } from './images'
import ImgWithFallback from './ImgWithFallback'

const OptionCheckboxIcon = ({
  previewIcon,
  setPreviewIcon,
  icon,
}: OptionItemPropType) => {
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

export default OptionCheckboxIcon
