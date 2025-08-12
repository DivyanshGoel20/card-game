// Card types
export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades'
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export interface Card {
  suit: Suit
  rank: Rank
  value: number
}

// Player types
export interface Player {
  id: string
  name: string
  chips: number
  hand: Card[]
  isDealer: boolean
  isActive: boolean
  currentBet: number
}

// Game state types
export type GamePhase = 'preflop' | 'flop' | 'turn' | 'river' | 'showdown'

export interface GameState {
  phase: GamePhase
  pot: number
  currentBet: number
  communityCards: Card[]
  players: Player[]
  currentPlayerIndex: number
  deck: Card[]
}

// Action types
export type PlayerAction = 'fold' | 'check' | 'call' | 'raise' | 'all-in'

export interface GameAction {
  playerId: string
  action: PlayerAction
  amount?: number
}
