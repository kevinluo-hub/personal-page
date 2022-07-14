import React from 'react'

export default function Skill(props) {
    return (
        <div className='skill'>
            <img className='skill-img' src={props.img} alt={props.title} />
            <h4 className='skill-title'>{props.title}</h4>
            <p className='skill-text'>{props.text}</p>
        </div>
    )
}