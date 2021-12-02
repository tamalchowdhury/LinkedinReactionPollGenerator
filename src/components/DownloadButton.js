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
  // Trim the long title to 80 chars to avoid saving bug
  let title = pollTitle.substring(0, 80)
  // Replace any dots (.) in title
  title = title.replace('.', '-')

  const nodeElement = document.querySelector(element)
  domtoimage
    .toBlob(nodeElement)
    .then(function (blob) {
      window.saveAs(blob, `poll-${title}`)
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
