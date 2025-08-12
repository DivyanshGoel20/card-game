import { Card, Suit, Rank } from '../types/poker'

// Create a standard 52-card deck
export function createDeck(): Card[] {
  const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades']
  const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  
  const deck: Card[] = []
  
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        suit,
        rank,
        value: getCardValue(rank)
      })
    }
  }
  
  return deck
}

// Get numeric value of a card
function getCardValue(rank: Rank): number {
  switch (rank) {
    case 'A': return 14
    case 'K': return 13
    case 'Q': return 12
    case 'J': return 11
    default: return parseInt(rank)
  }
}

// Shuffle the deck using Fisher-Yates algorithm
export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Deal cards from the deck
export function dealCards(deck: Card[], count: number): { cards: Card[], remainingDeck: Card[] } {
  const cards = deck.slice(0, count)
  const remainingDeck = deck.slice(count)
  return { cards, remainingDeck }
}
