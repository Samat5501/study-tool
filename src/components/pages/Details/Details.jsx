import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './details.css'

const Details = () => {
    const { title, id} = useParams()
    console.log( title, id);
    const info = useSelector(state => state.info)
   
    const item = info.filter((f) => f.id === id)[0]
    console.log(item.description);

    const [title1, setTitle] = useState('')
    const [list, setList] = useState('')

    const onAdd = () => {
        setTitle('')
        setList('')
    }
    return (
        <div>
            <div>
                <p className='title'>{item.title}</p>
                {item.description ? (
                <span>description: </span> ):("")}
                <p>{item.description}</p>
                {item.code ? (
                  <span>your code:</span>   
                ):("")}
                <p>{item.code}</p>
                {item.linkTitle ? (
                  <span>Link Title:</span>   
                ):("")}
                <p>{item.linkTitle}</p>
                {item.link ? (
                <span>Link:</span>
                ):("")}
                <a href={item.link}>{item.linkTitle}</a>
                <span>{title1}</span>
                <p>{list}</p>
            </div>
            
            <span>Enter title</span>
            <input value={title1} onChange={(e) => setTitle(e.target.value)} type="text" />
            <span>Enter List</span>
            <input value={list} onChange={(e) => setList(e.target.value)}  type="text" />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}

export default Details
