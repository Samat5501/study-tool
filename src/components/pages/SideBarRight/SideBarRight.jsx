import React from 'react'
import { Link } from 'react-router-dom'
import routes  from '../../routes'
import './right.css'

const SideBarRight = () => {
    return (
        <div className='right'>
            <Link to='/attr'>attributes</Link>
            <Link to='/elements'>Elements</Link>
        </div>
    )
}

export default SideBarRight
