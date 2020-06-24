describe('Card', () => {
  describe('score', () => {
    it('return 21 with 2d', () => {
        let card = new Card("2d")
        expect(card.score()).toEqual(21)
    })

    it('return 32 with 3c', () => {
      let card = new Card("3c")
      expect(card.score()).toEqual(32)
    })

    it('return 43 with 4h', () => {
      let card = new Card("4h")
      expect(card.score()).toEqual(43)
    })

    it('return 54 with 5s', () => {
      let card = new Card("5s")
      expect(card.score()).toEqual(54)
    })
  })

  describe('valueScoreString', () => {
    it('return 02 with 2d', () => {
        let card = new Card("2d")
        expect(card.valueScoreString()).toEqual('02')
    })

    it('return 14 with Ad', () => {
      let card = new Card("Ad")
      expect(card.valueScoreString()).toEqual('14')
    })
  })

  describe('ordered', () => {
    it('return ordered cards', () => {
        let cards = [
          new Card("2d"), 
          new Card("Ad"), 
          new Card("Ks"), 
          new Card("As"), 
          new Card("8h"), 
          new Card("2s"), 
          new Card("2h") 
        ]

        let expected = [
          new Card("As"), 
          new Card("Ad"), 
          new Card("Ks"), 
          new Card("8h"), 
          new Card("2s"), 
          new Card("2h"),           
          new Card("2d") 
        ]
  
        expect(Card.ordered(cards)).toEqual(expected)
    })

    it('return 14 with Ad', () => {
      let card = new Card("Ad")
      expect(card.valueScoreString()).toEqual('14')
    })
  })
})