import React from 'react'
import './sidebar.css'
import { Link, useRouteMatch } from 'react-router-dom'
import  routes  from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { remove_info } from '../../store/actions';
import TagList from './TagList';

function Sidebar() {
    const dispatch = useDispatch()
    const info = useSelector(state => state.info)

    const remove = () => {
        info.filter((f) => f.id !== info.id)
    }
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link className="link" to='/html'>HTML</Link>
                </li>
                <li>
                    <Link className="link" to='/css'>css</Link>
                </li>
            
            <li>{info.map((tag, idx) => {
                return <Link className='button-detail' to={`/details/${tag.id}`} key={idx}>
                    <ul  key={idx}>
                        <TagList tag={tag} idx={idx} key={idx}/>
                    </ul>
                    <button onClick={() => dispatch(remove_info(idx))}>x</button>
                </Link>
            })} </li>
            </ul>
        </div>
    )
}

export default Sidebar
