import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

export default function Sidebar(props) {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar"
    const [fixed, setFixed] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', fixedSidebar);
    
        return () => {
          window.removeEventListener('scroll', fixedSidebar);
        };
    }, []);

    const fixedSidebar = () => {
    if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 40 ? setFixed('fixed') : setFixed('')
        }
    }

    return (
        <div className={sidebarClass + " " + fixed}>
            {props.items.map(x => 
            <div className='sidebar-item-container'>
                <Link to={x} spy={true} smooth={true} duration={500} offset={-100} className="menu-item sidebar-item pointer zoom" onClick={props.handleOpen}>
                    {x}
                </Link><br />
            </div>)}
        </div>
    )
}
