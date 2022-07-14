import React from 'react'

export default function Intro(props) {
    
    const [typed, setTyped] = React.useState('')
    const [blink, setBlink] = React.useState(true)

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setTyped(props.text.slice(0, typed.length+1))
        }, 150)
        
        return () => clearTimeout(timeout)
    }, [typed, props.text])

    React.useEffect(() => {
        window.addEventListener('scroll', stopBlink);
    
        return () => {
          window.removeEventListener('scroll', stopBlink);
        };
    }, []);

    const stopBlink = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 424 ? setBlink(false) : setBlink(true)
        }
    }

    return (
        <div className={`linebreak intro ${typed === props.text && blink ? 'typed' : 'typing'}`}>
            {typed}
        </div>
    )
}