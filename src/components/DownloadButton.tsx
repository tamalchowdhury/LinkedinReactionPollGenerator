import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import gtag from 'ga-gtag'

type DownloadButtonProp = {
  title: string
  element: string
}

function DownloadButton({ title, element }: DownloadButtonProp) {
  return (
    <button
      id="download"
      className="download"
      type="button"
      onClick={() => downloadImage(title, element)}
    >
      Download Image
    </button>
  )
}

function downloadImage(pollTitle: string, element: string) {
  let title: string
  if (pollTitle) {
    // Trim the long title to 80 chars to avoid saving bug
    title = pollTitle.substring(0, 80)
    // Replace any dots (.) in title
    title = title.replace('.', '-')
  } else {
    title = `poll-${Date.now()}`
  }

  const nodeElement: HTMLElement = document.querySelector(
    element
  ) as HTMLHeadingElement

  domtoimage
    .toBlob(nodeElement)
    .then(function (blob) {
      window.saveAs(blob, title)
      gtag('event', 'download_poll_image', {
        poll_title: pollTitle,
      })
    })
    .catch((err) => {
      gtag('event', 'DOWNLOAD_FAILED', {
        poll_title: pollTitle,
        error_info: err.message,
      })
    })
}

export default DownloadButton
