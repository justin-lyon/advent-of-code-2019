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

const sampleOne = {
  wireOne: 'R75, D30, R83, U83, L12, D49, R71, U7, L72',
  wireTwo: 'U62, R66, U55, R34, D71, R55, D58, R83'
}

const moveRight = (distance, { x, y }, grid) => {
  for (let i = 1; i <= distance; i++) {
    if (!grid[x + i]) grid[x + i] = []
    if (!grid[x + i][y]) grid[x + i][y] = '.'

    grid[x + i][y] = {
      id: 1
    }
  }
  return grid
}

const moveLeft = (distance, { x, y }, grid) => {
  for (let i = distance; i === 1; i--) {
    if (!grid[x - i]) grid[x - i] = []
    if (!grid[x - i][y]) grid[x - i][y] = '.'

    grid[x - i][y] = {
      id: 1
    }
  }
  return grid
}

const moveUp = (distance, { x, y }, grid) => {
  for (let i = 1; i <= distance; i++) {
    if (!grid[x]) grid[x] = []
    if (!grid[x][y + i]) grid[x][y + i] = '.'

    grid[x][y + i] = {
      id: 1
    }
  }
  return grid
}
const moveDown = (distance, { x, y }, grid) => {
  for (let i = distance; i === 1; i--) {
    if (!grid[x]) grid[x] = []
    if (!grid[x][y - i]) grid[x][y - i] = '.'

    grid[x][y - i] = {
      id: 1
    }
  }
  return grid
}

const directions = {
  R: moveRight,
  L: moveLeft,
  U: moveUp,
  D: moveDown
}

const parseWire = instructions => {
  return instructions.split(', ').map(arg => {
    return {
      magnitude: arg[0],
      distance: parseInt(arg.slice(1))
    }
  })
}

const initGrid = (wire1, wire2) => {}

const plotWire = instructions => {
  const vectors = parseWire(instructions)
  const grid = []
  vectors.reduce
}

sampleOne.wireOne = parseWire(sampleOne.wireOne)
sampleOne.wireTwo = parseWire(sampleOne.wireTwo)
console.log('sampleOne', sampleOne)

const grid = sampleOne.wireOne.reduce((acc, val) => {
  return acc.concat(directions[val.magnitude](val.distance, {x: 0, y: 0}, []))
}, [])
console.log('grid', grid)
