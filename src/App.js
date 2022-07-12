import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'

function App() {
  const arr = new Array(100).fill("hello")
  return (
    <div>
      <Header title="鏘." items={["Skills", "About", "Gallery", "Contact"]}/>
      <Intro />
      {arr.map(x => <h1>{x}</h1>)} 
    </div>
  );
}

export default App;
