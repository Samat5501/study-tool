import React from 'react'
import './sidebar.css'
import { Link, useHistory } from 'react-router-dom'
import  routes  from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { remove_info } from '../../store/actions';
import TagList from './TagList';

function Sidebar() {
    const dispatch = useDispatch()
    const info = useSelector(state => state.info)
    const success = useSelector(state => state.success)
    const history = useHistory()
    console.log(info);
    
    const check = () => {
        if (success) {
            history.push(routes.list)
        } else {
            history.push(routes.sign_up)
            alert('Please, Sign Up')
        }
    }

    return (
        <div className='sidebar side__bar-left'>
            <ul>
                <li>
                    <Link className="link" to='/html'>HTML</Link>
                </li>
                <li>
                    <Link className="link" to='/css'>css</Link>
                </li>
                {success ? (<>
                    <li>{info.map((tag, idx) => {
                        return <div className='sidebar__tag'>
                     <Link className='button-detail' to={`/details/${tag.id}`} key={idx}>
                    <li  key={idx}>
                        <TagList tag={tag} idx={idx} key={idx}/>
                    </li>
                   
                    </Link>
                    <div className='remove__btn' onClick={() => dispatch(remove_info(idx))}>x</div>
                   </div> 
            })} </li>
                </>) : ("")}
                    
            </ul>
            <button className='tag__btn' onClick={() => check()}>Tag ++</button>
        </div>
    )
}

export default Sidebar
