import Game from "../game"

describe("utils/game", () => {
  it("should initialize the game", () => {
    const game = new Game()

    const status = game.init()

    expect(status).toHaveProperty(["player", "inhand"])
    expect(status).toHaveProperty(["bot", "inhand"])
  })

  it("should validate the card value", () => {
    const game = new Game()

    expect(game.checkValue("A")).toBe(1)
    expect(game.checkValue("2")).toBe(2)
    expect(game.checkValue("3")).toBe(3)
    expect(game.checkValue("4")).toBe(4)
    expect(game.checkValue("5")).toBe(5)
    expect(game.checkValue("6")).toBe(6)
    expect(game.checkValue("7")).toBe(7)
    expect(game.checkValue("8")).toBe(8)
    expect(game.checkValue("9")).toBe(9)
    expect(game.checkValue("10")).toBe(0)
    expect(game.checkValue("J")).toBe(0)
    expect(game.checkValue("Q")).toBe(0)
    expect(game.checkValue("K")).toBe(0)
  })

  it("should calculate the score", () => {
    const game = new Game()

    game.player.inhand = [
      { value: "5", symbol: "HEART" },
      { value: "4", symbol: "DIAMOND" },
    ]
    game.bot.inhand = [
      { value: "10", symbol: "SPADE" },
      { value: "K", symbol: "CLUB" },
    ]

    expect(game.calculatePoint(game.player)).toBe(9)
    expect(game.calculatePoint(game.bot)).toBe(0)
  })
})
