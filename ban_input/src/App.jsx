import { useState } from 'react'
import './App.css'
import Ban from './components/Ban'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    <Ban/>
    </>

  )
}

export default App
