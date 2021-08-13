import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_info } from '../../store/actions'
import { Button } from 'antd';

import './List.css'
var uniqid = require('uniqid');
const List = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [linkTitle, setLinkTitle] = useState('');
    const [link, setLink] = useState('');

    const onAdd = () => {
dispatch(add_info({
            title,
            description,
            code,
            linkTitle,
            link,
            id: uniqid(),
        }))
        setTitle('');
        setDescription('')
        setCode('')
        setLinkTitle('')
        setLink('')
    }
    return (
        <div className="list">
            title
            <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="title" type="text" />
            Description <textarea value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="10"></textarea>
            code <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder='write code' name="" id="" cols="30" rows="10"></textarea>
            useful links
            title <input value={linkTitle} onChange={(e) => setLinkTitle(e.target.value)} type="text" />
            link <textarea value={link} onChange={(e) => setLink(e.target.value)} placeholder='write link' name="" id="" cols="30" rows="10"></textarea>
            <Button type='primary' onClick={onAdd}>add Input</Button>
        </div>
    )
}

export default List
