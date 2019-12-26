// Read Command Alpha|Number
// Magnitude:
// R = right, move N indexes right
// U = Up, move N indexes up
// D = Down, move N indexes down
// L = Left, move N indexes left
// Number = Distance
// Plot Wire on Matrix
// Calculate total Manhattan Distance
// Find shortest Manhattan Distance to Central Port

const getWire = require('./wire')
const getGrid = require('./grid')
const { sampleOne, sampleTwo, input } = require('./input')

const getSample1 = () => {
  console.log('sample 1 => 159')

  const wire1 = getWire('wire1', sampleOne.wireOne)
  const wire2 = getWire('wire2', sampleOne.wireTwo)

  getGrid([wire1, wire2])
}

const getSample2 = () => {
  console.log('sample 2 => 135')

  const wire1 = getWire('wire1', sampleTwo.wireOne)
  const wire2 = getWire('wire2', sampleTwo.wireTwo)

  getGrid([wire1, wire2])
}

getInput = () => {
  console.log('-- input -- => ?')

  const wire1 = getWire('wire1', input.wireOne)
  const wire2 = getWire('wire2', input.wireTwo)

  getGrid([wire1, wire2])
}

getSample1()
getSample2()
getInput()
