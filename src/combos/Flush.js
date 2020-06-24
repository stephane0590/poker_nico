class Flush extends Combo {
  static isAvailable(cards) {
    let types = cards.map(card => card.type()).gemUniq()

    return types.length === 1
  }
}