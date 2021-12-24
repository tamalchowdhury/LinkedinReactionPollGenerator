import { useState } from 'react'
import './home.scss'
import ImgWithFallback from '../../ImgWithFallback'

import fbDemoJpg from '../../../img/facebook-demo.jpg'
import fbDemoWebp from '../../../img/facebook-demo.webp'
import liDemoJpg from '../../../img/linkedin-demo.jpg'
import liDemoWebp from '../../../img/linkedin-demo.webp'
import { Link } from 'react-router-dom'

const Home = () => {
  const [fbLoaded, setFbLoaded] = useState(false)
  const [liLoaded, setLiLoaded] = useState(false)

  return (
    <div className="home">
      <div className="card__section">
        <div className="card">
          <div className="card__title">Linkedin</div>
          <div className="card__description">
            <p>Create a reaction poll with Linkedin reactions</p>
          </div>
          <Link to="/linkedin">
            <div className={`card__image ${liLoaded ? 'loaded' : 'empty'}`}>
              <ImgWithFallback
                src={liDemoWebp}
                fallback={liDemoJpg}
                setLoaded={setLiLoaded}
                alt="linkedin demo image"
                width="400"
                height="285"
              />
            </div>
          </Link>
        </div>
        <div className="card">
          <div className="card__title">Facebook</div>
          <div className="card__description">
            <p>Create a reaction poll with Facebook reactions</p>
          </div>
          <Link to="/facebook">
            <div className={`card__image ${fbLoaded ? 'loaded' : 'empty'}`}>
              <ImgWithFallback
                src={fbDemoWebp}
                fallback={fbDemoJpg}
                setLoaded={setFbLoaded}
                alt="facebook demo image"
                width="400"
                height="285"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
