import React from 'react'
import './PokerGame.css'

const PokerGame: React.FC = () => {
  return (
    <div className="poker-game">
      <div className="game-area">
        <div className="table">
          <div className="community-cards">
            <h3>Community Cards</h3>
            <div className="cards-container">
              {/* Cards will go here */}
            </div>
          </div>
          
          <div className="pot">
            <h3>Pot: $0</h3>
          </div>
        </div>
        
        <div className="player-area">
          <div className="player-hand">
            <h3>Your Hand</h3>
            <div className="cards-container">
              {/* Player cards will go here */}
            </div>
          </div>
          
          <div className="player-actions">
            <h3>Actions</h3>
            <div className="action-buttons">
              <button className="btn btn-primary">Fold</button>
              <button className="btn btn-secondary">Call</button>
              <button className="btn btn-success">Raise</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokerGame
