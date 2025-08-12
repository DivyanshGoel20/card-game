import React from 'react'
import './App.css'
import PokerGame from './components/PokerGame'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>♠️ Poker Game ♥️</h1>
        <p>Get ready for some fun!</p>
      </header>
      <main>
        <PokerGame />
      </main>
    </div>
  )
}

export default App
