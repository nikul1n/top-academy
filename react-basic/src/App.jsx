import Counter from './components/Counter/Counter.jsx'
import { useState } from 'react'
import './App.css'

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
