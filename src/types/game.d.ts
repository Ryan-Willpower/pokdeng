import { ICard } from "./deck"

export interface IPlayer {
  inhand: ICard[]
}

interface IGameStatus {
  player: IPlayer
  bot: IPlayer
}
