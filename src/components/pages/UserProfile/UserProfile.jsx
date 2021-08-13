import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import routes from '../../routes';
import { log_out } from '../../store/actions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    return (
        <div>
            <input type="text" />
            logout
            <button onClick={() => {
                dispatch(log_out(history.push(routes.home)))
            }}>logout</button>
        </div>
    )
}

export default UserProfile
