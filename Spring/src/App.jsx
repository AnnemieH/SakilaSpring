import { useState } from 'react'
import './assets/APICalls/Spring.jsx'
import './App.css'
import ActorForm from './assets/Forms/ActorForm.jsx'
import FilmForm from './assets/Forms/FilmForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ActorForm />
    </div>
    <br />
    <div>
      <FilmForm />
    </div>
    
    </>
  )
}

export default App
