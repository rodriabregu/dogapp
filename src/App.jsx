import { useState } from 'react'
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  )
}

export default App
