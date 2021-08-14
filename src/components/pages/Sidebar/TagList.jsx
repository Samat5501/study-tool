import React from 'react'
import { useHistory } from 'react-router-dom';

const TagList = ({ tag, idx }) => {
    let history = useHistory()
    return (
        <div key={idx}>
            <li onClick={() => history.push(tag.id)}>{tag.title} </li>
            {/* <button onClick={()=> remove()}>x</button> */}
            {/* <button onClick={()=> dispatch(remove_info(tag.id))}>x</button> */}
        </div>
    )
}

export default TagList
