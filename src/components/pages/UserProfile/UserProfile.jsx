import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import routes from '../../routes';
import { log_out } from '../../store/actions';
import "./profile.css"
import { slide as Menu } from 'react-burger-menu'

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const currentUser = useSelector(state => state.currentUser)
    const info = useSelector(state => state.info)
    console.log(info.title);
    const on = (event) => {
        event.preventDefault();
    }
    return (
        <div className='profile'>
            <div className='empty__block'></div>
            <div className='profile__user'>
                <div className='user__item'>
                <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="" />
                <div>
                    <p className='p'> {currentUser.firstName} {" "} {currentUser.lastName}</p>
                    <p className='p'>{currentUser.userEmail}</p>
                </div>
                <button onClick={() => {
                    history.push(routes.home)
                }}>Go Home</button>
                <button onClick={() => {
                dispatch(log_out(history.push(routes.home)))
                }}>logout</button>
                </div>
            </div>
        </div>
    //     <Menu className='ss'>
    //     <a id="home" className="menu-item" href="/">Home</a>
    //     <a id="about" className="menu-item" href="/about">About</a>
    //     <a id="contact" className="menu-item" href="/contact">Contact</a>
    //     <a onClick={()=> on()} className="menu-item--small" href="">Settings</a>
    //   </Menu>
    )
}

export default UserProfile