import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/APICalls/Spring.jsx'
import './App.css'
import Spring from './assets/APICalls/Spring.jsx'
import ActorForm from './assets/Forms/ActorForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ActorForm />

    <Spring />
    
    </>
  )
}

export default App
