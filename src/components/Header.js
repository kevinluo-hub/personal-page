import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import menu from '../images/menu.png'



export default function Header({title, items, handleOpen, collapse}) {
    const [sticky, setSticky] = useState('')
    

    useEffect(() => {
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
                <p className='pointer zoom' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}><b>{title}</b></p>
                
            </div>
            {
                collapse ?
                <img src={menu} alt="menu" className="pointer zoom" onClick={handleOpen}/>
                :
                items.map(x => <Link to={x} spy={true} smooth={true} duration={500} offset={-100} className="menu-item pointer zoom">{x}</Link>)
            }
        </div>
    )
}