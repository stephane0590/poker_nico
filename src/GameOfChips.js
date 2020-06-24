const COMBOS = [
  {name: "RoyalFlush", class:RoyalFlush },
  {name: "StraightFlush", class: StraightFlush},
  {name: "FourOfAKind", class: FourOfAKind},
  {name: "FullHouse", class: FullHouse},
  {name: "Flush", class: Flush},
  {name: "Straight", class: Straight},
  {name: "ThreeOfAKind", class: ThreeOfAKind},
  {name: "TwoPairs", class: TwoPairs},
  {name: "Pair", class: Pair},
  {name: "HighCard", class: HighCard}
]

const HEROES = ['arya', 'jon', 'tyrion', 'daenerys']
const VILLAINS = ['jack', 'daenerys-on-tilt', 'cersei']

let heroIndex = 0
let villainIndex = 0

let avatarHero = document.getElementById("hero")
let avatarVillain = document.getElementById("villain") 

let imgHero = document.createElement('img')
imgHero.src = `./assets/images/players/${HEROES[heroIndex]}.png`

avatarHero.append(imgHero)

let imgVillain = document.createElement('img')
imgVillain.src = `./assets/images/players/${VILLAINS[villainIndex]}.png`

avatarVillain.append(imgVillain)

let heroHand, villainHand, flop, turn, river


document.getElementById("deal").addEventListener('click', () => {
  let deal = document.getElementById("deal")
  let deck = new Deck()
  deck.shuffle();

  let playerOneCombo = 
    Combo.best(
      Combo.toCombos(
        [
          deck.cards[0], deck.cards[1], deck.cards[4], 
          deck.cards[5], deck.cards[6], deck.cards[7], 
          deck.cards[8]
        ], COMBOS
      )
    )

  let playerTwoCombo = 
    Combo.best(
      Combo.toCombos(
        [
          deck.cards[2], deck.cards[3], deck.cards[4], 
          deck.cards[5], deck.cards[6], deck.cards[7], 
          deck.cards[8]
        ], COMBOS
      )
    )

  let heroMessage = document.getElementById("hero-message");
  let villainMessage = document.getElementById("villain-message");
  let win = document.getElementById("win");
  let loose = document.getElementById("loose");

  heroMessage.innerText = playerOneCombo.name();
  villainMessage.innerText = playerTwoCombo.name();
  
  let victory = Combo.compareScore(playerOneCombo.score(), playerTwoCombo.score())
  let highlightCards 

  if (victory == 0) {
    heroMessage.className = 'combo';
    villainMessage.className = 'combo';
    win.className = 'button hide is-success';
    loose.className = 'button hide is-danger';
    highlightCards = [playerOneCombo.cards, playerTwoCombo.cards].flat().gemUniq()
  } else if (victory == 1) {
    heroMessage.className = 'combo combo-win';
    villainMessage.className = 'combo combo-loose';
    win.className = 'button is-success';
    loose.className = 'button hide is-danger';
    highlightCards = playerOneCombo.cards
  } else {
    heroMessage.className = 'combo combo-loose';
    villainMessage.className = 'combo combo-win';
    win.className = 'button hide is-success';
    loose.className = 'button is-danger';
    highlightCards = playerTwoCombo.cards
  }

  ['player-1', 'player-2', 'player-3', 'player-4', 'flop-1', 'flop-2', 'flop-3', 'turn', 'river'].forEach(
    function(name, i) {
      let p = document.getElementById(name);
      p.className = "card bg-white"

      let img = document.createElement('img');
      let card = deck.cards[i];

      if(highlightCards.includes(card)) {
        p.className = "card bg-white focus"
      }

      img.src = `assets/images/cards/${card.valueCard()}_of_${card.fullType()}s.png`;
  
      deal.innerText = "Rejouer"
      p.textContent = "";
      p.append(img);
  })
})
