import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import gtag from 'ga-gtag'

function DownloadButton({ title, element }) {
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

function downloadImage(pollTitle, element) {
  let title
  if (pollTitle) {
    // Trim the long title to 80 chars to avoid saving bug
    title = pollTitle.substring(0, 80)
    // Replace any dots (.) in title
    title = title.replace('.', '-')
  } else {
    title = `poll-${Date.now()}`
  }

  const nodeElement = document.querySelector(element)
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
