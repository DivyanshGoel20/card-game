import { Card } from '../types/poker'

// Hand rankings from highest to lowest
export enum HandRank {
  HIGH_CARD = 0,
  PAIR = 1,
  TWO_PAIR = 2,
  THREE_OF_A_KIND = 3,
  STRAIGHT = 4,
  FLUSH = 5,
  FULL_HOUSE = 6,
  FOUR_OF_A_KIND = 7,
  STRAIGHT_FLUSH = 8,
  ROYAL_FLUSH = 9
}

export interface HandResult {
  rank: HandRank
  name: string
  value: number
  cards: Card[]
}

// Evaluate the best 5-card hand from 7 cards (2 hole + 5 community)
export function evaluateHand(holeCards: Card[], communityCards: Card[]): HandResult {
  const allCards = [...holeCards, ...communityCards]
  const combinations = getCombinations(allCards, 5)
  
  let bestHand: HandResult | null = null
  
  for (const combination of combinations) {
    const result = evaluateFiveCardHand(combination)
    if (!bestHand || result.value > bestHand.value) {
      bestHand = result
    }
  }
  
  return bestHand!
}

// Get all possible combinations of n cards from the given cards
function getCombinations(cards: Card[], n: number): Card[][] {
  if (n === 0) return [[]]
  if (cards.length === 0) return []
  
  const [first, ...rest] = cards
  const withoutFirst = getCombinations(rest, n)
  const withFirst = getCombinations(rest, n - 1).map(combo => [first, ...combo])
  
  return [...withoutFirst, ...withFirst]
}

// Evaluate a 5-card hand
function evaluateFiveCardHand(cards: Card[]): HandResult {
  // This is a placeholder - we'll implement the full hand evaluation logic later
  return {
    rank: HandRank.HIGH_CARD,
    name: 'High Card',
    value: Math.max(...cards.map(c => c.value)),
    cards
  }
}

// Get hand rank name
export function getHandRankName(rank: HandRank): string {
  return HandRank[rank].replace(/_/g, ' ').toLowerCase()
}
