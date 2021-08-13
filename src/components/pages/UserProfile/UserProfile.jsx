import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import routes from '../../routes';
import { log_out } from '../../store/actions';
import "./profile.css"

const UserProfile = () => {
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const history = useHistory()
    return (
        <div className="logout">
            logout
            <button onClick={() => {
                dispatch(log_out(history.push(routes.home)))
            }}>logout</button>
        </div>
    )
}

export default UserProfile
