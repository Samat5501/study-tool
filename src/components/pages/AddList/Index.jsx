import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_info } from '../../store/actions'
import { Button } from 'antd';
import routes from '../../routes'
import './List.css'
import { useHistory } from 'react-router-dom';
import { log_out } from '../../store/actions';

var uniqid = require('uniqid');
const List = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [linkTitle, setLinkTitle] = useState('');
    const [link, setLink] = useState('');
    const history = useHistory();

    const onAdd = (e) => {
        if(title !== "" && description!== "" || code !== "" || linkTitle!=="" || link !==""){
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
        else {
            alert('please fill the field')
        }
}
    const onCancel = () =>{
        history.push('/content')
    }
    return (
        <div className="list">
            title
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
                type="text" />
            Description
            <textarea
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30" rows="10"/>
            code <textarea className="input" value={code} onChange={(e) => setCode(e.target.value)} placeholder='write code' type='code' name="code"  cols="30" rows="10"></textarea>
            useful links
            title <input value={linkTitle} onChange={(e) => setLinkTitle(e.target.value)} type="text" />
            link <textarea className="input" value={link} onChange={(e) => setLink(e.target.value)} placeholder='write link' name="link" id="" cols="30" rows="10"></textarea>
            <div>
            <Button type='primary' onClick={onAdd}>add Input</Button>
            <Button type='primary' danger onClick={onCancel}>Cancel</Button>
            </div>
        </div>
    )
}

export default List
