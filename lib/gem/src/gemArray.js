Array.prototype.gemEachCons = function (num) {
  return Array.from(
    { length: this.length - num + 1 }, 
    (_, i) => this.slice(i, i + num)
  )
}

Array.prototype.gemCombination = function (num) {	
	if (num > this.length || num <= 0) { return [] }
	if (num == this.length) { return [this] }
	
	if (num == 1) {
    let combos = []
    
		for (let i = 0; i < this.length; i++) {
			combos.push([this[i]])
    }
    
		return combos
	}

  let combos = []
  
	for (let i = 0; i < this.length - num + 1; i++) {
		let head = this.slice(i, i + 1);
		let tailCombos = this.slice(i + 1).gemCombination(num - 1)

		for (let j = 0; j < tailCombos.length; j++) {
			combos.push(head.concat(tailCombos[j]))
		}
  }
  
	return combos
}

Array.prototype.gemUniq = function () {
  return [...new Set(this)]
}