import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'
import './nav.css'
import { BiSearch } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const Nav = () => {
    const state = useSelector(state => state.success)
    // const state = useSelector(state => state.infoReducer.success)
    return (
        <nav className="navbar navbar__fixed-top">
            <div className="navbar__inner">
                <div className="navbar__items">
                    <Link className='home1' to={routes.home}>Study Tool</Link>
                    <Link className='home1' to='/content'>Content</Link>
                </div>
            </div>
            <div className="navbar__items navbar__items-right">
                {/* <Link to={routes.home} className="navbar__item navbar__link">Getting Started</Link> */}
                {state ? (
                    <>
                <div to={routes.search} className="navbar__item search"><b><BiSearch/></b>  Search</div>
                <Link className="navbar__item navbar__link" to={routes.list}>Add +</Link>
                <Link to={routes.help} className="navbar__item navbar__link">get help</Link>
                <Link className="navbar__item navbar__link" to={routes.user_profile}>Profile</Link>
                </>
                 ): (
                         <> 
                    <Link to={routes.help} className="navbar__item navbar__link">get help</Link>
                    <Link className="navbar__item navbar__link" to={routes.login}>Login</Link>
                    <Link className="navbar__item navbar__link" to={routes.sign_up}>Sign_Up</Link>
                
                        {/* </div> */}
             </> )} 
                
            </div>
        </nav>
    )
}

export default Nav
