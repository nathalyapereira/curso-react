import { useState } from 'react'
import './App.css'
import  dance  from './assets/dance.gif'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  function showContent() {
    setShow(true)
  }
  return (
    <>
      <h1>Challenge 01</h1>
      <div className="card">
      {!show &&
        <button onClick={() => showContent()}>Supresa</button>
      }
      {show && 
      <div className='hidden'>
      <h2>Dance...</h2>
      <img src={dance} alt="" width="300" height="300" />
      </div>}
        <button onClick={() => setCount((count) => count + 1)}>
        Like {count} {count? ' 💜': ''}
        </button>
      </div>
      <p className="read-the-docs">
        Click if u like!
      </p>
    </>
  )
}

export default App
