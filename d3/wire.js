
const moveRight = (vector, { x, y }) => {
  x += vector.distance
  return { x, y }
}

const moveLeft = (vector, { x, y }) => {
  x -= vector.distance
  return { x, y }
}

const moveUp = (vector, { x, y }) => {
  y += vector.distance
  return { x, y }
}

const moveDown = (vector, { x, y }) => {
  y -= vector.distance
  return { x, y }
}

const directions = {
  R: moveRight,
  L: moveLeft,
  U: moveUp,
  D: moveDown
}

const parse = instructions => {
  return instructions.split(', ').map(arg => {
    return {
      magnitude: arg[0],
      distance: parseInt(arg.slice(1))
    }
  })
}

const plot = vectors => {
  let oldPos = { x: 0, y: 0 }
  const coords = []

  vectors.forEach(v => {
    const newPos = directions[v.magnitude](v, oldPos)
    coords.push(newPos)
    oldPos = newPos
  })
  return coords
}

const getWire = (name, input) => {
  const vectors = parse(input)
  return {
    name,
    vectors,
    coords: plot(vectors)
  }
}

module.exports = getWire
