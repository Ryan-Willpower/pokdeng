import { ICard } from "../types/deck"
import random from "./random"

class Deck {
  values: string[]
  symbols: string[]

  constructor() {
    this.values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ]
    this.symbols = ["SPADE", "HEART", "CLUB", "DIAMOND"]
  }

  draw(): ICard {
    const value = this.values[random(0, this.values.length - 1)]
    const symbol = this.symbols[random(0, this.symbols.length - 1)]

    return {
      value,
      symbol,
    }
  }

  draws(times: number): ICard[] {
    return [...Array(times)].map(() => this.draw())
  }
}

export default Deck
