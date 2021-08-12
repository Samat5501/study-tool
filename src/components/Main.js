import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom'
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
  return (
    <Router>
      <div className="main__content">
        <Sidebar />
        <Switch>
          <div className="main__content-right">
            <Route path={routes.html} component={Html} />
            <Route path='/css' component={Css} />
            <Route path="/details/:id">
              <Details/>
            </Route>
            <Route path={routes.list} component={List} />
            <Route path={routes.sign_up} component={In} />
            <Route path={routes.login} component={Login} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default Main
