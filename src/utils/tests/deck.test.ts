import Deck from "../deck"

const deck = new Deck()

describe("utils/deck", () => {
  it("should has value within the deck's value", () => {
    const card = deck.draw()

    expect(deck.values.includes(card.value)).toBeTruthy()
  })

  it("should has symbol within the deck's symbol", () => {
    const card = deck.draw()

    expect(deck.symbols.includes(card.symbol)).toBeTruthy()
  })

  it("should draw two cards and return with expected range", () => {
    const cards = deck.draws(2)

    expect(cards).toHaveLength(2)
  })

  it("should draw three cards that have symbol and value in it", () => {
    const cards = deck.draws(3)

    cards.forEach(card => {
      expect(deck.values.includes(card.value)).toBeTruthy()
    })
  })
})
