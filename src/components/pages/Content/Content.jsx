import React from 'react'
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'
import  routes  from '../../routes'
import List from '../AddList/Index'
import Css from '../SidebarPage/Css/Index'
import Html12 from '../SidebarPage/Html/Index'
import './Content.css'


const Content = () => {
    
    return (
         <div className='content'>
            <Router>
                <Switch>
                    <Route path={routes.sign_up}>
                        <List/>
                        </Route> 
                         <Route path="/html">
                        <Html12/>
                    </Route>
                    <Route path="/css">
                        <Css/>
                    </Route>
                </Switch>
                </Router>
        </div>
        
    )
}

export default Content
