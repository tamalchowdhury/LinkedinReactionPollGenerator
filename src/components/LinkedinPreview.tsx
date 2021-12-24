//
/**
 * This is an unused file taken from the App.js
 * Reason to drop this so that users don't get confused about the preview
 */

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

export default function LinkedinPreview() {
  return (
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
  )
}
