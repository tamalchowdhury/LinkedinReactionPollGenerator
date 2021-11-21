import './App.css'
import { useState } from 'react'
import like from './img/like.png'
import celebrate from './img/celebrate.png'
import love from './img/love.png'
import insightful from './img/insightful.png'
import curious from './img/curious.png'

function App() {
  const [pollTitle, setPollTitle] = useState('Who is your favorite CEO?')

  return (
    <>
      <header class="header">
        <div class="wrapper">
          <h1>
            <a href="/">LinkedIn Reaction Poll Generator </a>
            <span id="beta">(Beta)</span>
          </h1>
        </div>
      </header>
      <div class="container">
        <div class="demo">
          <div class="demo__wrap">
            <div class="demo__linkedin">
              <div class="demo__linkedin__image">
                <img src="./img/tamal_web.jfif" alt="Tamal Web" />
              </div>
              <div class="demo__linkedin__author">
                <div class="demo__linkedin__author__name">Tamal Web</div>
                <div class="demo__linkedin__author__byline">
                  Frontend Engineer
                </div>
              </div>
            </div>
            <div class="preview">
              <div>
                <div class="preview__title">{pollTitle}</div>
                <div class="preview__icons">
                  <div class="preview__icon">
                    <img src={like} alt="insightful Button" />
                    <p>Java</p>
                  </div>
                  <div class="preview__icon">
                    <img src={curious} alt="curious Button" />
                    <p>Python</p>
                  </div>
                  <div class="preview__icon">
                    <img src={love} alt="love Button" />
                    <p>JavaScript</p>
                  </div>
                  <div class="preview__icon">
                    <img src="./img/insightful.png" alt="curious Button" />
                    <p>Kotlin</p>
                  </div>
                  <div class="preview__icon">
                    <img src="./img/celebrate.png" alt="curious Button" />
                    <p>Kotlin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form class="poll">
          <div class="title">
            <label for="poll_title" class="step_text">
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
          <p class="step_text">2. Select icons & text to appear</p>
          <div class="reaction">
            <div class="reaction__icon">
              <div class="reaction__icon__wrap">
                <input type="checkbox" name="like" id="like" />
                <label for="like">
                  <img src={like} alt="Like Button" />
                </label>
              </div>
              <input
                type="text"
                name="label_like"
                id="label_like"
                placeholder="Label for like"
              />
            </div>
            <div class="reaction__icon">
              <div class="reaction__icon__wrap">
                <input type="checkbox" name="celebrate" id="celebrate" />
                <label for="celebrate">
                  <img src={celebrate} alt="celebrate Button" />
                </label>
              </div>
              <input
                type="text"
                name="label_celebrate"
                id="label_celebrate"
                placeholder="Label for celebrate"
              />
            </div>
            <div class="reaction__icon">
              <div class="reaction__icon__wrap">
                <input type="checkbox" name="love" id="love" />
                <label for="love">
                  <img src={love} alt="love Button" />
                </label>
              </div>
              <input
                type="text"
                name="label_love"
                id="label_love"
                placeholder="Label for love"
              />
            </div>
            <div class="reaction__icon">
              <div class="reaction__icon__wrap">
                <input type="checkbox" name="insightful" id="insightful" />
                <label for="insightful">
                  <img src={insightful} alt="insightful Button" />
                </label>
              </div>
              <input
                type="text"
                name="label_insightful"
                id="label_insightful"
                placeholder="Label for insightful"
              />
            </div>
            <div class="reaction__icon">
              <div class="reaction__icon__wrap">
                <input type="checkbox" name="curious" id="curious" />
                <label for="curious">
                  <img src={curious} alt="curious Button" />
                </label>
              </div>
              <input
                type="text"
                name="label_curious"
                id="label_curious"
                placeholder="Label for curious"
              />
            </div>
          </div>
        </form>
        <p class="step_text">
          3. Preview & Download <button class="download">Download</button>
        </p>
        <h3>Tips for better engagements:</h3>
        <ul>
          <li>Use more than 2 poll options, 3 is better</li>
          <li>Make the choice obvious to pick for the reader (PC vs Mac)</li>
          <li>
            Set "heart", "celebrate", or "insightful" for the most popular
            choice, and "like" for the least favorite option
          </li>
        </ul>

        <footer class="footer">
          <p class="text_center">
            &copy; 2021 Put Together by Tamal Web, Alex Chiou, Rahul Pandey,
            Luke Hovee & Tech Career Growth Community
          </p>
        </footer>
      </div>
    </>
  )
}
export default App
