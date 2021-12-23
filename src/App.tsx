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
import './styles/style.scss'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import GitHubButton from 'react-github-btn'

import { useEffect, useState } from 'react'
import Facebook from './components/pages/Facebook'
import Linkedin from './components/pages/Linkedin'
import LinkedinOld from './components/pages/legacy/LinkedinOld'
import { HelmetProvider, Helmet } from 'react-helmet-async'

function App() {
  return (
    <>
      <Router>
        <HelmetProvider>
          <Helmet>
            <title>Linkedin Reaction Poll Generator | ReactionPoll.com</title>
            <link rel="canonical" href="https://reactionpoll.com/" />
          </Helmet>
          <header className="header">
            <div className="wrapper">
              <div>
                <h1>
                  <Link to="/">ReactionPoll.com</Link>
                  <span id="beta">(Beta)</span>
                </h1>
                <p className="tagline">
                  Get more engagements with reaction polls
                </p>
              </div>
              <div className="nav">
                <Link to="/linkedin">Linkedin</Link>
                <Link to="/facebook">Facebook</Link>
                <Link to="/linkedin-old">Linkedin (legacy)</Link>
              </div>
            </div>
          </header>
          <div className="container">
            <Routes>
              <Route path="/" element={<Linkedin />} />
              <Route path="/linkedin-old" element={<LinkedinOld />} />
              <Route path="/linkedin" element={<Linkedin />} />
              <Route path="/facebook" element={<Facebook />} />
            </Routes>

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
        </HelmetProvider>
      </Router>
    </>
  )
}
export default App
