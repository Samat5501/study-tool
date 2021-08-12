import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router , Route, Switch, useParams,
  useRouteMatch } from 'react-router-dom'
import './app.css'
import List from './pages/AddList/Index'
import Content from './pages/Content/Content'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import MainHome from './MainHome'
import Nav from './pages/Navbar/Nav'
import Sidebar from './pages/Sidebar/Sidebar'
import Html from './pages/SidebarPage/Html/Index'
import In from './pages/Sign/In'
import Login from './pages/Sign/Login'
import UserProfile from './pages/UserProfile/UserProfile'
import routes from './routes'
import Main from './Main'
import Css from './pages/SidebarPage/Css/Index'


function App() {

const state = useSelector((state) => state);
const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(state));
  }, []);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(state));
  }, [currentUser]);
  //  -------------

const info = useSelector(state => state.info)
// window.localStorage.clear();
useEffect(() => {
    localStorage.setItem('info', JSON.stringify(state))
}, [info])
  

    return (
      <Router>
            <div className="app-wrapper">
          <Nav />
          <Switch>
          {state.success ? (
            <>
                <Sidebar info={info}/>
              <div className="app-content-wrapper">
                <Route path={routes.list} component={List}/>
                  <Route path='/details/:id'>
                    <Details info={info}/>
                  </Route> 
                <Route path={routes.user_profile} component={UserProfile} />
                <Route exact path='/html' component={Html} />
                <Route  path='/css' component={Css} />
          </div>
            </>
           ) : ( 
              <div>
                <Route exact path={routes.home} component={Home}/>
                <Route path={routes.sign_up} component={In}/>
                <Route path={routes.login} component={Login}/>
            </div> 
           )} 
           </Switch>
          </div>
      </Router>
    )
}

export default App