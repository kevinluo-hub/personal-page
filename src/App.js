import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Title from './components/Title'

function App() {
  const arr = new Array(100).fill("hello")
  return (
    <div>
      <Header title="鏘." items={["Skills", "About", "Gallery", "Contact"]}/>
      <Intro text={'Hello!\nI\'m Kevin Luo,\na developer and bodybuilder\nbased in Boston, MA'}/>
      <Title text="Skills" />
      <Skills />
      {arr.map(x => <h1>{x}</h1>)} 
    </div>
  );
}

export default App;
