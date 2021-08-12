import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import './app.css'
import Content1 from './Content1'
import List from './pages/AddList/Index'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import Sidebar from './pages/Sidebar/Sidebar'
import Css from './pages/SidebarPage/Css/Index'
import Html from './pages/SidebarPage/Html/Index'
import In from './pages/Sign/In'
import Login from './pages/Sign/Login'
import UserProfile from './pages/UserProfile/UserProfile'
import routes from './routes'


const Main = () => {
    const state = useSelector(state => state.success);
    let { path, url } = useRouteMatch();
    return (
        <div>
            {/* fggggggggggggg */}
        {/* {state.success ? ( */}
            <>
                {/* <div> */}
                <div className='main__content'>
                    <Switch>
                    <Route exact path={path}>
                        <Sidebar />
                    </Route>
                    <Route path={path}>
                        <Content1 />
                    </Route>
                       
                    </Switch>
                </div>
                
                {/* <div className="app-content-wrapper"> */}
                <div className="a">
                    
              {/* <Route path={routes.list} component={List} />
              <Route path="/details/:id" component={Details} />
              <Route path={routes.user_profile} component={UserProfile} />
              
               */}
            </div>
          </>
        {/* ) : ( */}
          {/* <div>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.sign_up} component={In} />
            <Route path={routes.login} component={Login} />
          </div> */}
        {/* )} */}
      </div>
    );
}

export default Main
