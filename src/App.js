/*
Copyright 2021 @tamalweb Tamal Anwar Chowdhury
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import './App.css'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import GitHubButton from 'react-github-btn'
import gtag, { install } from 'ga-gtag'

import { useEffect, useState } from 'react'
import like from './img/like.png'
import celebrate from './img/celebrate.png'
import love from './img/love.png'
import insightful from './img/insightful.png'
import curious from './img/curious.png'

function App() {
  const [pollTitle, setPollTitle] = useState('Who is your favorite CEO?')
  const [showLike, setShowLike] = useState({
    isShowing: true,
    text: 'Mark Zuckerberg',
  })
  const [showCelebrate, setShowCelebrate] = useState({
    isShowing: true,
    text: 'Sundar Pichai',
  })
  const [showLove, setShowLove] = useState({
    isShowing: true,
    text: 'Elon Musk',
  })
  const [showInsightful, setShowInsightful] = useState({
    isShowing: false,
    text: 'Insightful',
  })
  const [showCurious, setShowCurious] = useState({
    isShowing: false,
    text: 'Curious',
  })

  useEffect(() => {
    install('G-5R73T1TP2W')
  }, [])

  function trackDownloadEvent() {
    gtag('event', 'download_poll', {
      title: pollTitle,
    })
  }

  function downloadImage() {
    const options = { width: 540 }
    const nodeElement = document.querySelector('.preview')
    domtoimage.toBlob(nodeElement, options).then(function (blob) {
      window.saveAs(blob, `poll-${pollTitle}`)
    })
    trackDownloadEvent()
  }

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <h1>
            <a href="/">LinkedIn Reaction Poll Generator </a>
            <span id="beta">(Beta)</span>
          </h1>
          <p className="tagline">Get more engagements with reaction polls</p>
        </div>
      </header>
      <div className="container">
        <form className="poll">
          <div className="title">
            <label htmlFor="poll_title" className="step_text">
              Poll Title:
            </label>
            <br />
            <input
              type="text"
              name="poll_title"
              id="poll_title"
              onChange={(e) => setPollTitle(e.target.value)}
            />
          </div>
          <Preview />
          <p className="step_text">Select icons and text for poll options:</p>
          <div className="reaction">
            <div className="reaction__icon">
              <div className="reaction__icon__wrap">
                <input
                  type="checkbox"
                  checked={showLike.isShowing}
                  name="like"
                  id="like"
                  onChange={(e) =>
                    setShowLike({
                      isShowing: e.target.checked,
                      text: showLike.text,
                    })
                  }
                />
                <label htmlFor="like">
                  <img src={like} alt="Like Button" />
                </label>
              </div>
              <label htmlFor="label_like">Label for Like</label>
              <input
                type="text"
                name="label_like"
                id="label_like"
                onChange={(e) =>
                  setShowLike({
                    isShowing: showLike.isShowing,
                    text: e.target.value,
                  })
                }
              />
            </div>
            <div className="reaction__icon">
              <div className="reaction__icon__wrap">
                <input
                  type="checkbox"
                  checked={showCelebrate.isShowing}
                  name="celebrate"
                  id="celebrate"
                  onChange={(e) =>
                    setShowCelebrate({
                      isShowing: e.target.checked,
                      text: showCelebrate.text,
                    })
                  }
                />
                <label htmlFor="celebrate">
                  <img src={celebrate} alt="celebrate Button" />
                </label>
              </div>
              <label htmlFor="label_celebrate">Label for Celebrate</label>
              <input
                type="text"
                name="label_celebrate"
                id="label_celebrate"
                onChange={(e) =>
                  setShowCelebrate({
                    isShowing: showCelebrate.isShowing,
                    text: e.target.value,
                  })
                }
              />
            </div>
            <div className="reaction__icon">
              <div className="reaction__icon__wrap">
                <input
                  type="checkbox"
                  checked={showLove.isShowing}
                  name="love"
                  id="love"
                  onChange={(e) =>
                    setShowLove({
                      isShowing: e.target.checked,
                      text: showLove.text,
                    })
                  }
                />
                <label htmlFor="love">
                  <img src={love} alt="love Button" />
                </label>
              </div>
              <label htmlFor="label_love">Label for Love</label>
              <input
                type="text"
                name="label_love"
                id="label_love"
                onChange={(e) =>
                  setShowLove({
                    isShowing: showLove.isShowing,
                    text: e.target.value,
                  })
                }
              />
            </div>
            <div className="reaction__icon">
              <div className="reaction__icon__wrap">
                <input
                  type="checkbox"
                  checked={showInsightful.isShowing}
                  name="insightful"
                  id="insightful"
                  onChange={(e) =>
                    setShowInsightful({
                      isShowing: e.target.checked,
                      text: showInsightful.text,
                    })
                  }
                />
                <label htmlFor="insightful">
                  <img src={insightful} alt="insightful Button" />
                </label>
              </div>
              <label htmlFor="label_insightful">Label for Insightful</label>
              <input
                type="text"
                name="label_insightful"
                id="label_insightful"
                onChange={(e) =>
                  setShowInsightful({
                    isShowing: showInsightful.isShowing,
                    text: e.target.value,
                  })
                }
              />
            </div>
            <div className="reaction__icon">
              <div className="reaction__icon__wrap">
                <input
                  type="checkbox"
                  checked={showCurious.isShowing}
                  name="curious"
                  id="curious"
                  onChange={(e) =>
                    setShowCurious({
                      isShowing: e.target.checked,
                      text: showCurious.text,
                    })
                  }
                />
                <label htmlFor="curious">
                  <img src={curious} alt="curious Button" />
                </label>
              </div>
              <label htmlFor="label_curious">Label for Curious</label>
              <input
                type="text"
                name="label_curious"
                id="label_curious"
                onChange={(e) =>
                  setShowCurious({
                    isShowing: showCurious.isShowing,
                    text: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </form>
        <p className="step_text">Download The Picture:</p>
        <DownloadButton />
        <h3>Tips for better engagements:</h3>
        <ul>
          <li>Use more than 2 poll options, 3 is better</li>
          <li>Make the choice obvious to pick for the reader (PC vs Mac)</li>
          <li>
            Set "heart", "celebrate", or "insightful" for the most popular
            choice, and "like" for the least favorite option
          </li>
        </ul>

        <footer className="footer text_center">
          <p>
            &copy; 2021 Put Together by{' '}
            <a
              href="https://www.linkedin.com/in/tamalweb/"
              rel="noreferrer"
              target="_blank"
            >
              Tamal Web
            </a>
          </p>
          <p>
            Thanks to{' '}
            <a
              href="https://www.linkedin.com/in/alexander-chiou/"
              target="_blank"
              rel="noreferrer"
            >
              Alex Chiou
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/in/rpandey1234/"
              target="_blank"
              rel="noreferrer"
            >
              Rahul Pandey
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/in/luke-hovee-2433b7b4/"
              target="_blank"
              rel="noreferrer"
            >
              Luke Hovee
            </a>{' '}
            &{' '}
            <a
              href="https://www.linkedin.com/company/techcareergrowth/"
              target="_blank"
              rel="noreferrer"
            >
              Tech Career Growth Community
            </a>
          </p>
          <p>
            Star this repo on Github!{' '}
            <GitHubButton
              href="https://github.com/tamalweb/LinkedinReactionPollGenerator"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-show-count="true"
              aria-label="Star this repo on GitHub"
            >
              Star
            </GitHubButton>
          </p>
        </footer>
      </div>
    </>
  )

  // Download Button
  function DownloadButton() {
    return (
      <button id="download" onClick={downloadImage}>
        Download Image <i class="fas fa-download"></i>
      </button>
    )
  }

  // Preview Div
  function Preview() {
    return (
      <div className="demo">
        <div className="demo__wrap">
          <div className="preview">
            <div className="preview__title">{pollTitle}</div>
            <div className="preview__icons">
              {showLike.isShowing && (
                <div className="preview__icon">
                  <img src={like} alt="like Button" />
                  <p>{showLike.text}</p>
                </div>
              )}
              {showCelebrate.isShowing && (
                <div className="preview__icon">
                  <img src={celebrate} alt="curious Button" />
                  <p>{showCelebrate.text}</p>
                </div>
              )}
              {showLove.isShowing && (
                <div className="preview__icon">
                  <img src={love} alt="love Button" />
                  <p>{showLove.text}</p>
                </div>
              )}
              {showInsightful.isShowing && (
                <div className="preview__icon">
                  <img src={insightful} alt="insightful Button" />
                  <p>{showInsightful.text}</p>
                </div>
              )}
              {showCurious.isShowing && (
                <div className="preview__icon">
                  <img src={curious} alt="curious Button" />
                  <p>{showCurious.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
