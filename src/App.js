import React from 'react'
import Pokecard from './Pokecard'
import './App.css'
import './Pokecard.css'

function App () {
  return (
    <div className='App'>
      <Pokecard id={4} name='Charmander' type='fire' exp={62} />
    </div>
  )
}

export default App
