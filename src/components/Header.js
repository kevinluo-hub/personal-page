import React, { useState } from 'react'

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
            <div className='title'>
                <p><b>{title}</b></p>
            </div>
            <div className='menu-items'>
                {items.map(x => <p className='menu-item'>{x}</p>)}
            </div> 
        </div>
    )
}