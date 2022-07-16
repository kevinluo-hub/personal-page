import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Title from './components/Title'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import { Element } from 'react-scroll'

function App() {
  const arr = new Array(100).fill("hello")
  return (
    <div>
      <Header title="鏘." items={["Skills", "About", "Gallery", "Contact"]}/>
      <Intro text={'Hello!\nI\'m Kevin Luo,\na developer and bodybuilder\nbased in Boston, MA'}/>
        <Element id="Skills">
          <Title text="Skills" />
          <Skills />
        </Element>
        <Element id="About">
          <Title text="About" />
          <About />
        </Element>
        <Element id="Gallery">
          <Title text="Gallery" />
          <Gallery />
        </Element>
        <Element id="Contact">
          <Title text="Contact" />
          <Contact />
        </Element>
        {arr.map(x => <h1>{x}</h1>)} 
    </div>
  );
}

export default App;
