import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CustomButton } from '../../CustomButton'
import routes from '../../routes'
import './Home.css'
import { homeData } from './HomeData'

const Home = () => {
  const history = useHistory()
  return (
    <div className="main">
      <div className="block__2">
        <h1>Learn coding with Us</h1>
        <button className='home__button' onClick={() => history.push("/content")}>Get Started</button>
      </div>
      <div className="black__block">
        <h2>This site is developed</h2>
        <h1>with</h1>
        <div className='homeData'>
          {homeData.map((el, idx) => {
            const {img, text} = el
            return (
              <div key={idx} className='main_homeData'>
          <div className='home__img'>
          <img src={img} alt=''/>
                </div>
                <div className='home__text'>
                  {text}
              </div>
              </div>
            )
          })}
        </div>
        
      </div>
    </div>
  );
}

export default Home
