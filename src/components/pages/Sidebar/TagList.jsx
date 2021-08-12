import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { remove_info } from '../../store/actions';

const TagList = ({ tag, idx }) => {
    let history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector(state => state.info)
    // const remove = () => {
    //     state.filter((f) => f.id !== idx)
    // }
    return (
        <div key={idx}>
            <li onClick={() => history.push(tag.id)}>{tag.title} </li>
            {/* <button onClick={()=> remove()}>x</button> */}
            {/* <button onClick={()=> dispatch(remove_info(tag.id))}>x</button> */}
        </div>
    )
}

export default TagList
