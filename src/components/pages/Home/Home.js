import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CustomButton } from '../../CustomButton'
import routes from '../../routes'
import In from '../Sign/In'
import './Home.css'

const Home = () => {
  const history = useHistory()
  return (
    <div className="main">
      <div className="block__2">
        <h1>Learn to code with Us</h1>
        <button onClick={() => history.push("/content")}>get started</button>
        <div className="modal">
          <CustomButton>
            <Link to={routes.sign_up}>Sign UP</Link>
          </CustomButton>
          <CustomButton>
            <Link to={routes.login}>Sign In</Link>
          </CustomButton>
        </div>
      </div>
      <div className="black__block">
        <h1>This site is developed with react and redux</h1>
      </div>
    </div>
  );
}

export default Home
