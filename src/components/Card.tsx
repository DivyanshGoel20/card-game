import React from 'react'
import { Card as CardType } from '../types/poker'
import './Card.css'

interface CardProps {
  card: CardType
  isHidden?: boolean
  onClick?: () => void
  className?: string
}

const Card: React.FC<CardProps> = ({ card, isHidden = false, onClick, className = '' }) => {
  const getSuitSymbol = (suit: string) => {
    switch (suit) {
      case 'hearts': return '♥'
      case 'diamonds': return '♦'
      case 'clubs': return '♣'
      case 'spades': return '♠'
      default: return ''
    }
  }

  const getSuitColor = (suit: string) => {
    return suit === 'hearts' || suit === 'diamonds' ? 'red' : 'black'
  }

  if (isHidden) {
    return (
      <div className={`card card-hidden ${className}`} onClick={onClick}>
        <div className="card-back">
          <div className="card-pattern">🂠</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`card ${className}`} onClick={onClick}>
      <div className="card-content">
        <div className="card-rank">{card.rank}</div>
        <div className={`card-suit ${getSuitColor(card.suit)}`}>
          {getSuitSymbol(card.suit)}
        </div>
      </div>
    </div>
  )
}

export default Card
