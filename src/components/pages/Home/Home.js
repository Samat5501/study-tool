import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../CustomButton'
import routes from '../../routes'
import In from '../Sign/In'
import c from './Home.module.css'
import TransitionsModal from './Modal'


const Home = () => {
    return (
      <div className={c.main}>
        <img src="https://www.uni-passau.de/fileadmin/_processed_/9/4/csm_COLOURBOX15488278_9cf9a3b2c1.jpg" />
        <div className={c.block__2}>
          <h1>Learn to code with Us</h1>
          <div className={c.modal}>
            {/* <TransitionsModal/> */}
            <CustomButton>
              <Link to={routes.sign_up}>Sign UP</Link>
            </CustomButton>
            <CustomButton>
              <Link to={routes.login}>Sign In</Link>
            </CustomButton>
          </div>
        </div>
      </div>
    );
}

export default Home
