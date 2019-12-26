const moveRight = ({ x, y }) => {
  x++
  return { x, y }
}

const moveLeft = ({ x, y }) => {
  x--
  return { x, y }
}

const moveUp = ({ x, y }) => {
  y++
  return { x, y }
}

const moveDown = ({ x, y }) => {
  y--
  return { x, y }
}

const move = {
  R: moveRight,
  L: moveLeft,
  U: moveUp,
  D: moveDown
}

const incrementPos = (vector, pos) => {
  return move[vector.magnitude](pos)
}

const plotWire = wire => {
  const start = { x: 0, y: 0 }
  let oldPos = { ...start }
  const coords = [].concat(...wire.vectors.map(v => {
    const vectorCoords = []
    for (let i = 1; i <= v.distance; i++) {
      const vPos = incrementPos(v, oldPos)
      oldPos = vPos
      vectorCoords.push(vPos)
    }
    return vectorCoords
  }))
  return {
    name: wire.name,
    coords
  }
}

const findIntersections = wires => {
  const walkedTiles = new Map()
  const coords = new Set()
  const intersections = []
  wires.forEach(w => {
    w.coords.forEach(c => {
      const tile = JSON.stringify(c)
      if (coords.has(tile) && walkedTiles.get(tile) !== w.name) {
        intersections.push(c)
      } else {
        coords.add(tile)
        walkedTiles.set(tile, w.name)
      }
    })
  })
  return intersections
}

const findManhattanDistances = intersections => {
  return intersections.map(coord => {
    const distance = Math.abs(coord.x) + Math.abs(coord.y)
    return {
      distance,
      coord
    }
  })
}

const getGrid = ([...wires]) => {
  const plottedWires = wires.map(w => plotWire(w))
  // console.log('names', names)
  const intersections = findIntersections(plottedWires)
  // console.log('intersections', intersections)
  const distances = findManhattanDistances(intersections)
  console.log(distances)

  const closest = Math.min(...distances.map(d => d.distance))
  console.log('closest', closest)
}

module.exports = getGrid
