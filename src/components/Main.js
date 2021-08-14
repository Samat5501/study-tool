import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.css'
import List from './pages/AddList/Index'
import Details from './pages/Details/Details'
import Sidebar from './pages/Sidebar/Sidebar'
import Css from './pages/SidebarPage/Css/Index'
import Html from './pages/SidebarPage/Html/Index'
import In from './pages/Sign/In'
import Login from './pages/Sign/Login'
import routes from './routes'


const Main = () => {
    const state = useSelector(state => state.button);
  return (
    <Router>
      
        <div className="main__content">
          <Sidebar />
          <Switch>
            <div className="main__content-right">
              <Route path={routes.html} component={Html} />
              <Route path="/css" component={Css} />
            {state ? (
              <>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path={routes.list} component={List} />
              <Route path={routes.sign_up} component={In} />
                <Route path={routes.login} component={Login} />
              </>
            ) : (
        <img
          src="https://www.pngfind.com/pngs/m/122-1228829_calendar-png-download-image-calendar-icon-png-transparent.png"
                  alt=""
                  // exact коюш керек 
                  // img ордуна button need help img 
                  // component тин ичине жазып бул жерге чакырыш керек
        />
      )}
            </div>
          </Switch>
        </div>
      
      </Router>
  );
}

export default Main
