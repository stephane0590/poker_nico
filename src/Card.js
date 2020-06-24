const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const VALUE_LABELS = 
  ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]
const TYPES = ["d", "c", "h", "s"]
const FULL_TYPES = ["diamond", "club", "heart", "spade"]

class Card {
  static values() {
    return VALUES
  }

  static valueLabels() {
    return VALUE_LABELS
  }

  static types() {
    return TYPES
  }

  static fullTypes() {
    return FULL_TYPES
  }

  static ordered(cards) {
    return cards.sort((x, y) => y.score() - x.score())
  }

  constructor(label) {
    this.label = label
  }

  value() {
    return this.label.split('').slice(0, this.label.length - 1).join('')
  }

  valueLabel() {
    return Card.valueLabels()[Card.values().indexOf(this.value())]
  }

  valueCard() {
    if(Card.values().indexOf(this.value()) > 8) {
      return this.valueLabel()
    } else {
      return this.value()
    }
  }

  type() {
    return this.label.split('')[this.label.length-1]
  }

  fullType() {
    let i = Card.types().indexOf(this.type())

    return Card.fullTypes()[i]
  }

  score() {
    return parseInt(`${this.valueScore()}${this.typeScore()}`)
  }

  valueScore() {
    return Card.values().indexOf(this.value()) + 2
  }

  valueScoreString() {
    return this.valueScore().gemPad(2)
  }

  typeScore() {
    return Card.types().indexOf(this.type()) + 1
  }
}

