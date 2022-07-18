import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Title from './components/Title'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import { Element } from 'react-scroll'

function App() {  
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [collapse, setCollapse] = useState(false)

  const handleOpen = () => {
    setSidebarOpen(prev => !prev)
  }

  const handleResize = () => {
    const {innerWidth, innerHeight} = window;
    innerWidth > 880 ? setCollapse(false) : setCollapse(true)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  useEffect(() => {
    if (!collapse) {
      setSidebarOpen(false)
    }
  }, [collapse])

  const sections = ["Skills", "About", "Gallery", "Contact"]

  const components = {
    'Skills': Skills,
    'About': About,
    'Gallery': Gallery,
    'Contact': Contact
  }

  const content = sections.map(s => {
    const Name = components[s]
    return (
      <Element id={s}>
        <Title text={s} />
        <Name collapse={collapse}/>
      </Element>
    )
  })

  return (
    <div>
      <Header title="鏘." items={sections} handleOpen={handleOpen} collapse={collapse}/>
      <Sidebar isOpen={sidebarOpen} items={sections} handleOpen={handleOpen}/>
      <div className='page'>
        <Intro text={'Hello!\nI\'m Kevin Luo,\na developer and bodybuilder\nbased in Boston, MA'}/>
        {content}
      </div>
    </div>
  );
}

export default App;
