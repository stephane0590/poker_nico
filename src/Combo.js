class Combo {
  static factory(cards, combos) {
    cards = Card.ordered(cards)
    
    let classes = combos.map(c => c.class)
    let classNames = combos.map(c => c.name)

    return new (Combo.find(cards, classes))(cards, classNames)
  }

  static toCombos(cards, combos) {
    if(cards.length <= 5) { return Combo.factory(cards, combos) }

    let allCombos = cards.gemCombination(5).map(cds => Combo.factory(cds, combos))

    return allCombos
  }

  static best(combos) {
    return Combo.ordered(combos)[combos.length - 1]
  }

  static ordered(combos) {
    let oCombos = combos.sort((ca, cb) => Combo.compareScore(ca.score(), cb.score()))

    return oCombos
  }

  static compareScore(scoreA, scoreB) {
    if(scoreA[0] == scoreB[0]) {
      if(scoreA[1] == scoreB[1]) {
        return 0
      } else {
        return scoreA[1] > scoreB[1] ? 1 : -1
      }
    } else {
      return scoreA[0] > scoreB[0] ? 1 : -1
    }
  }

  static find(cards, classes) {
    return classes.find(klass => klass.isAvailable(cards))
  }

  static occureds(cards) {
    let cardsKeys = {}

    cards
      .forEach(card => {
        let label = card.valueLabel() + "s"

        if(cardsKeys[label]) {
          cardsKeys[label].push(card)
        } else {
          cardsKeys[label] = [card]
        }
      })

    return cardsKeys
  }

  constructor(cards, classNames) {
    this.list = classNames.reverse()
    this.cards = Card.ordered(cards)
  }

  score() {
    return [this.typeScore(), this.evenScore()]
  }

  typeScore() {
    return this.list.indexOf(this.constructor.name) + 1
  }

  evenScore() {
    let orderedValues = 
      [4,3,2,1].map(nb => this.whereValueOccures(nb)).flat()

    return parseInt(orderedValues.map(card => card.valueScoreString()).gemUniq().join(''))
  }

  whereValueOccures(nb) {
    let cards = Combo.occureds(this.cards)

    let values = 
      Object
        .keys(cards)
        .map(k => cards[k].length == nb ? cards[k] : null)
        .flat()
        .filter(Boolean)

    return Card.ordered(values)
  }

  name() {
    return data.combos[this.constructor.name]
  }
}