import { useState } from 'react'
import { pngs } from './images'

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
export default PreviewIconDiv
