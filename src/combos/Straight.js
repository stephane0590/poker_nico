class Straight extends Combo {
  static isAvailable(cards) {
    let values = cards.map(card => card.value())
    let found = 
      Straight.all().find(straight => JSON.stringify(values) === JSON.stringify(straight))

    return !!found
  }

  static all() {
    let straights = [['A', '5', '4', '3', '2']]

    Card.values().gemEachCons(5).forEach(straight => {
      straights.push(straight.reverse())
    })

    return straights
  }

}