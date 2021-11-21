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

import { useState } from 'react'
import like from './img/like.png'
import celebrate from './img/celebrate.png'
import love from './img/love.png'
import insightful from './img/insightful.png'
import curious from './img/curious.png'

import mark from './img/mark.jpg'
import lori from './img/lori.jpg'
import kevin from './img/kevin.jpg'
import barbara from './img/barbara.jpg'

// These are the demo people we see as Linkedin users
const profiles = [
  { img: mark, name: 'Mark Cuban', byline: 'American entrepreneur' },
  { img: lori, name: 'Lori Greiner', byline: 'TV personality' },
  { img: kevin, name: "Kevin O'Leary", byline: 'Canadian businessman' },
  {
    img: barbara,
    name: 'Barbara Corcoran',
    byline: 'American businesswoman',
  },
]

// This is used to pick the person for linkedin avatar
const random = Math.floor(Math.random() * profiles.length)

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

  function downloadImage() {
    const options = { width: 540 }
    const nodeElement = document.querySelector('.preview')
    domtoimage.toBlob(nodeElement, options).then(function (blob) {
      window.saveAs(blob, `poll-${pollTitle}`)
    })
  }

  function DownloadButton() {
    return (
      <button id="download" onClick={downloadImage}>
        Download Image <i class="fas fa-download"></i>
      </button>
    )
  }

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <h1>
            <a href="/">LinkedIn Reaction Poll Generator </a>
            <span id="beta">(Beta)</span>
          </h1>
        </div>
      </header>
      <div className="container">
        <DownloadButton />
        <div className="demo">
          <div className="demo__wrap">
            <div className="demo__linkedin">
              <div className="demo__linkedin__image">
                <img
                  src={profiles[random].img}
                  alt={profiles[random].name}
                  width="48"
                  height="48"
                />
              </div>
              <div className="demo__linkedin__author">
                <div className="demo__linkedin__author__name">
                  {profiles[random].name}
                </div>
                <div className="demo__linkedin__author__byline">
                  {profiles[random].byline}
                </div>
              </div>
            </div>
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
        <form className="poll">
          <div className="title">
            <label htmlFor="poll_title" className="step_text">
              1. Poll Title:
            </label>
            <br />
            <input
              type="text"
              name="poll_title"
              id="poll_title"
              onChange={(e) => setPollTitle(e.target.value)}
            />
          </div>
          <p className="step_text">2. Select icons & text to appear</p>
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
        <p className="step_text">3. Preview & Download </p>
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

        <footer className="footer">
          <p className="text_center">
            &copy; 2021 Put Together by Tamal Web, Alex Chiou, Rahul Pandey,
            Luke Hovee & Tech Career Growth Community
          </p>
        </footer>
      </div>
    </>
  )
}
export default App
