class RoyalFlush extends Combo {
  static isAvailable(cards) {
    let values = cards.map(card => card.value())
    let types = cards.map(card => card.type()).gemUniq()

    return (JSON.stringify(values) === JSON.stringify(["A", "K", "Q", "J", "10"])) && (types.length === 1)
  }
}