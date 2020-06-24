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

describe('Combo', () => {
  describe('#factory', () => {
    it('return RoyalFlush class for a RoyalFlush combo', () => {
        let cards = [
          new Card("Jd"), 
          new Card("Ad"), 
          new Card("Kd"), 
          new Card("Qd"), 
          new Card("10d")
        ];

        expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('RoyalFlush')
    })

    it('return StraightFlush class for a StraightFlush combo', () => {
      let cards = [
        new Card("Jd"), 
        new Card("Kd"), 
        new Card("Qd"), 
        new Card("10d"), 
        new Card("9d")
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('StraightFlush')
    })

    it('return FourOfAKind class for a FourOfAKind combo', () => {
      let cards = [
        new Card("Jd"), 
        new Card("Jh"), 
        new Card("Jc"), 
        new Card("Js"), 
        new Card("2h") 
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('FourOfAKind')
    })

    it('return FullHouse class with FullHouse combo', () => {
        let cards = [
          new Card("2d"), 
          new Card("Ad"), 
          new Card("As"), 
          new Card("2s"), 
          new Card("2h") 
        ];

        expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('FullHouse')
    })

    it('return Flush class for a Flush combo', () => {
      let cards = [
        new Card("Kh"), 
        new Card("Jh"), 
        new Card("10h"), 
        new Card("9h"), 
        new Card("2h") 
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('Flush')
    })

    it('return Straight class for a Straight combo', () => {
      let cards = [
        new Card("Kh"), 
        new Card("Jh"), 
        new Card("Qc"), 
        new Card("10d"), 
        new Card("9h")
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('Straight')
    })

    it('return ThreeOfAKind class for a ThreeOfAKind combo', () => {
      let cards = [
        new Card("Qc"), 
        new Card("10s"), 
        new Card("8d"), 
        new Card("2h"), 
        new Card("2d"), 
        new Card("2c") 
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('ThreeOfAKind')
    })

    it('return TwoPairs class for a TwoPairs combo', () => {
      let cards = [
        new Card("Ah"), 
        new Card("Ac"), 
        new Card("Qc"), 
        new Card("10s"), 
        new Card("2d"), 
        new Card("2c") 
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('TwoPairs')
    })

    it('return Pair class for a Pair combo', () => {
      let cards = [
        new Card("Ah"), 
        new Card("Ac"), 
        new Card("Qc"), 
        new Card("10s"), 
        new Card("8d"), 
        new Card("5h")
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('Pair')
    })

    it('return HighCard class for a HighCard combo', () => {
      let cards = [
        new Card("Ah"), 
        new Card("Kc"), 
        new Card("Qc"), 
        new Card("10s"), 
        new Card("8d"), 
        new Card("5h")
      ];

      expect(Combo.factory(cards, COMBOS).constructor.name).toEqual('HighCard')
    })
  })

  describe('.typeScore', () => {
    it('return expected quads type score', () => {
      let cards = [
        new Card("Ac"), 
        new Card("Ad"), 
        new Card("Ah"), 
        new Card("As"), 
        new Card("8h"), 
        new Card("2s"), 
        new Card("2h") 
      ];

      expect(Combo.factory(cards, COMBOS).typeScore()).toEqual(8)
  })

    it('return expected full type score', () => {
        let cards = [
          new Card("2d"), 
          new Card("Ad"), 
          new Card("Ks"), 
          new Card("As"), 
          new Card("8h"), 
          new Card("2s"), 
          new Card("2h") 
        ];

        expect(Combo.factory(cards, COMBOS).typeScore()).toEqual(7)
    })
  })

  describe('.evenScore', () => {
    it('return 1402 with AxAxAx2x2x', () => {
        let cards = [
          new Card("2d"), 
          new Card("Ad"), 
          new Card("Ks"), 
          new Card("As"), 
          new Card("8h"), 
          new Card("2s"), 
          new Card("Ah") 
        ];

        let combos = Combo.toCombos(cards, COMBOS);
        let bestCombo = Combo.best(combos);

        expect(bestCombo.evenScore()).toEqual(1402)
    })

    it('return 214 with 2x2x2xAxAx', () => {
      let cards = [
        new Card("2d"), 
        new Card("Ad"), 
        new Card("Ks"), 
        new Card("As"), 
        new Card("8h"), 
        new Card("2s"), 
        new Card("2h") 
      ];

      let combos = Combo.toCombos(cards, COMBOS);
      let bestCombo = Combo.best(combos);

      expect(bestCombo.evenScore()).toEqual(214)
    })

    it('return 1412100806 with AxQc10x8x6x4x2x', () => {
      let cards = [
        new Card("Ad"), 
        new Card("Qd"), 
        new Card("10s"), 
        new Card("8s"), 
        new Card("6h"), 
        new Card("4s"), 
        new Card("2h") 
      ];

      let combos = Combo.toCombos(cards, COMBOS);
      let bestCombo = Combo.best(combos);

      expect(bestCombo.evenScore()).toEqual(1412100806)
    })
  })

  describe('.best', () => {
    it('return the best combo', () => {
        let cards = [
          new Card("2d"), 
          new Card("Ad"), 
          new Card("Ks"), 
          new Card("As"), 
          new Card("8h"), 
          new Card("2s"), 
          new Card("2h") 
        ];

        let combos = Combo.toCombos(cards, COMBOS)

        expect(Combo.best(combos).cards).toEqual(
          [
            new Card("As"),  
            new Card("Ad"),  
            new Card("2s"), 
            new Card("2h"), 
            new Card("2d")
          ]
        )
    })

    it('return AxQc10x8x6x with AxQc10x8x6x4x2x', () => {
      let cards = [
        new Card("Ad"), 
        new Card("Qd"), 
        new Card("10s"), 
        new Card("8s"), 
        new Card("6h"), 
        new Card("4s"), 
        new Card("2h") 
      ]

      let expected = [
        new Card("Ad"), 
        new Card("Qd"), 
        new Card("10s"), 
        new Card("8s"), 
        new Card("6h")
      ]

      let combos = Combo.toCombos(cards, COMBOS);

      expect(Combo.best(combos).cards).toEqual(expected)
    })
  })

  describe('.score', () => {
    it('return expected score for HighCard combo', () => {
      let cards = [
        new Card("Ad"), 
        new Card("Qd"), 
        new Card("10s"), 
        new Card("6h"),
        new Card("2s")
      ]

      let combo = Combo.toCombos(cards, COMBOS);

      expect(combo.score()).toEqual([1, 1412100602])
    })

    it('return expected score for HighCard combo', () => {
      let cards = [
        new Card("Ad"), 
        new Card("Qd"), 
        new Card("10s"), 
        new Card("8s"),
        new Card("4s")
      ]

      let combo = Combo.toCombos(cards, COMBOS);

      expect(combo.score()).toEqual([1, 1412100804])
    })
  })
})