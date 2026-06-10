import Counter from './components/Counter/Counter.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createElement } from 'react'

function App() {
  const [test, setTest] = useState(false);
  return (
    <section className="App__container">
      <Counter state={test}/>
      {/* {createElement('Counter', {state: test, a: "b"})} */}
      { test ? <Counter state={test}/> : null }
      <button onClick={() => setTest(!test)}>test</button>
    </section>)
}

export default App
