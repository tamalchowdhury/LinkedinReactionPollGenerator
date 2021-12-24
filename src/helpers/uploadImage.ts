import React, { ChangeEvent, ChangeEventHandler } from 'react'
import getBase64 from './getBase64'

// Take file from the computer and store it into the state
export default function uploadImage(
  event: ChangeEvent<HTMLImageElement>,
  previewIcon: PreviewIcon,
  setPreviewIcon: () => void,
  icon: string
) {
  getBase64(event.currentTarget.files[0]).then((imageData) => {
    let state = { ...previewIcon }
    state[icon].image = imageData
    return setPreviewIcon(state)
  })
}
