import React, { useState } from 'react'
import { Link } from 'react-scroll' 


export default function Header({title, items}) {
    const [sticky, setSticky] = useState('')

    React.useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
    if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 40 ? setSticky('sticky') : setSticky('')
        }
    }

    return (
        <div className={`Header ${sticky}`}>
            <div className='header-text'>
                <p><b>{title}</b></p>
            </div>
            <div className='flex'>
                {items.map(x => <Link to={x} spy={true} smooth={true} duration={500} offset={-100} className="menu-item">{x}</Link>)}
            </div> 
        </div>
    )
}