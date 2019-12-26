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

const sampleOne = {
  wireOne: 'R75, D30, R83, U83, L12, D49, R71, U7, L72', // r229 l84 d79 u90
  wireTwo: 'U62, R66, U55, R34, D71, R55, D58, R83' // r238 l0 d129 u117
}

const wire1 = getWire('wire1', sampleOne.wireOne)
const wire2 = getWire('wire2', sampleOne.wireTwo)

const grid = getGrid([wire1, wire2])
