import { List } from 'antd/lib/form/Form'
import React from 'react'
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import Css from './pages/SidebarPage/Css/Index'
import Html from './pages/SidebarPage/Html/Index'
import './app.css'

const Content1 = () => {
    // let {contentId} = useParams();
      let { path, url } = useRouteMatch();
    return (
        <div className='content'>
            <Switch>
                <Route exact path={`${path}:/html`} component={Html} />
                <Route path={`${path}:/css`} component={Css} />
            {/* <Html />
            <Css/> */}
            </Switch>
        </div>
    )
}

export default Content1
