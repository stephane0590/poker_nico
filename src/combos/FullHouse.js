class FullHouse extends Combo {
  static isAvailable(cards) {
    let occureds = Combo.occureds(cards)
    let nbVals = Object.values(occureds).map(o => o.length)

    return nbVals.includes(3) && nbVals.includes(2)
  }
}