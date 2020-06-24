Number.prototype.gemPad = function(size) {
  var nbTos = String(this)
  while (nbTos.length < size) { nbTos = "0" + nbTos }
  return nbTos
}