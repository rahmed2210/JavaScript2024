// Challenge area
// a 25% on $40 would be $10



console.log('Example One')

let getTipOne = function (total, tipPercent = .2) {
  return total * tipPercent
}

let tipOne = getTipOne(40, .25)
console.log(tipOne)