describe('gemNumber', () => {
  describe('.gemPad', () => {
    it('return number with expected leading', () => {
      let nb = 9
      expect(nb.gemPad(2)).toEqual('09')
    })
  })
})