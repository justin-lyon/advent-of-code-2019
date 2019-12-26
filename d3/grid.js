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
  let totalDistance = 0
  let oldPos = { ...start }
  const coords = [].concat(...wire.vectors.map(v => {
    const vectorCoords = []
    for (let i = 1; i <= v.distance; i++) {
      totalDistance++
      const vPos = incrementPos(v, oldPos)
      vPos.distance = totalDistance
      oldPos = vPos
      vectorCoords.push(vPos)
    }
    return vectorCoords
  }))
  wire.coords = coords
  return wire
}

const findIntersections = wires => {
  const walkedNodes = new Map()
  const intersections = []
  wires.forEach(w => {
    w.coords.forEach(c => {
      const node = `${c.x},${c.y}`
      if (walkedNodes.has(node) && walkedNodes.get(node) !== w.name) {
        intersections.push(c)
      } else {
        walkedNodes.set(node, w.name)
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

  const shortest = Math.min(...distances.map(d => d.coord.distance))
  console.log('shortest', shortest)
}

module.exports = getGrid
