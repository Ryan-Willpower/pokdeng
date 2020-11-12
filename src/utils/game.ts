import { Value } from "../types/deck"
import { IGameStatus, IPlayer } from "../types/game"
import Deck from "./deck"

class Game {
  deck: Deck
  player: IPlayer
  bot: IPlayer

  constructor() {
    this.deck = new Deck()

    this.player = {
      inhand: [],
    }

    this.bot = {
      inhand: [],
    }
  }

  init() {
    this.player.inhand.push(...this.deck.draws(2))
    this.bot.inhand.push(...this.deck.draws(2))

    return this.status()
  }

  status(): IGameStatus {
    return {
      player: this.player,
      bot: this.bot,
    }
  }

  calculatePoint(player: IPlayer): number {
    return player.inhand.reduce((prev, current) => {
      const cardValue = this.checkValue(current.value)

      return prev + cardValue
    }, 0)
  }

  checkValue(value: Value) {
    switch (value) {
      case "A":
        return 1
      case "10":
      case "J":
      case "Q":
      case "K":
        return 0
      default:
        return Number(value)
    }
  }
}

export default Game
