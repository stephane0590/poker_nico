describe('gemArray', () => {
  describe('.gemEachCons', () => {
    it('return array with two sub arrays', () => {
      let alpha = ['a', 'b', 'c']

      expect(alpha.gemEachCons(2)).toEqual([['a', 'b'], ['b', 'c']])
    })
  })

  describe('.gemUniq', () => {
    it('return array with two sub arrays', () => {
      let alpha = ['a', 'b', 'c', 'b']

      expect(alpha.gemUniq()).toEqual(['a', 'b', 'c'])
    })
  })

  describe('.gemCombination', () => {
    it('return array with expected sub arrays', () => {
      let alpha = ['a', 'b', 'c', 'd', 'e', 'f']


      expect(alpha.gemCombination(4)).toEqual([
        ['a', 'b', 'c', 'd'], 
        ['a', 'b', 'c', 'e'],
        ['a', 'b', 'c', 'f'],
        ['a', 'b', 'd', 'e'],
        ['a', 'b', 'd', 'f'], 
        ['a', 'b', 'e', 'f'],
        ['a', 'c', 'd', 'e'], 
        ['a', 'c', 'd', 'f'],
        ['a', 'c', 'e', 'f'],
        ['a', 'd', 'e', 'f'],
        ['b', 'c', 'd', 'e'],
        ['b', 'c', 'd', 'f'],
        ['b', 'c', 'e', 'f'],
        ['b', 'd', 'e', 'f'],
        ['c', 'd', 'e', 'f']
      ])
    })
  })
})