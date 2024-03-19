import { useState } from 'react'
import './assets/APICalls/Spring.jsx'
import './App.css'
import ActorForm from './assets/Forms/ActorForm.jsx'
import FilmForm from './assets/Forms/FilmForm.jsx'
import FilmGame from './assets/FilmGame.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='actorFormMain'>
      <h2>Edit/add actors</h2>
      <ActorForm />
    </div>
    <br /><br /><br /><br />
    <div>
      <h2>Edit/add films</h2>
      <FilmForm />
    </div>
    <br /><br /><br /><br />
    <div>
      <h2>Would you like to play a game?</h2>
      <FilmGame />
    </div>
    </>
  )
}

export default App
