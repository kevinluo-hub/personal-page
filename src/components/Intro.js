import React, { useState, useEffect } from 'react';

export default function Intro(props) {
    
    const [typed, setTyped] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTyped(props.text.slice(0, typed.length+1))
        }, 150)
        
        return () => clearTimeout(timeout)
    }, [typed, props.text])

    return (
        <div className={`linebreak intro ${typed === props.text ? 'typed' : 'typing'}`}>
            {typed}
        </div>
    )
}