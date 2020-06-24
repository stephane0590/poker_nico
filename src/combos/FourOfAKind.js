class FourOfAKind extends Combo {
  static isAvailable(cards) {
    let occureds = Combo.occureds(cards)

    return Object.values(occureds).map(o => o.length).includes(4)
  }
}