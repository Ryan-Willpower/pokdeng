export type Value =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"

export type CardSymbol = "SPADE" | "HEART" | "CLUB" | "DIAMOND"

export interface ICard {
  value: Value
  symbol: CardSymbol
}
