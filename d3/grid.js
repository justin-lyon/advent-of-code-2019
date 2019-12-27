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
  wire.coords = coords
  return wire
}

const findIntersections = wires => {
  const walkedNodes = new Map()
  const intersections = []
  wires.forEach(w => {
    w.coords.forEach((c, index) => {
      const node = `${c.x},${c.y}`
      if (walkedNodes.has(node) && walkedNodes.get(node).name !== w.name) {
        const distance = index + 1 + walkedNodes.get(node).distance
        intersections.push({
          distance,
          coord: c
        })
      } else {
        walkedNodes.set(node, { name: w.name, distance: index + 1 })
      }
    })
  })
  return intersections
}

const findManhattanDistances = intersections => {
  return intersections.map(node => {
    const manhattan = Math.abs(node.coord.x) + Math.abs(node.coord.y)
    node.manhattan = manhattan
    return node
  })
}

const getGrid = ([...wires]) => {
  const plottedWires = wires.map(w => plotWire(w))
  // console.log('names', names)
  const intersections = findIntersections(plottedWires)
  // console.log('intersections', intersections)
  const distances = findManhattanDistances(intersections)
  // console.log(distances)

  const closest = Math.min(...distances.map(d => d.manhattan))
  console.log('manhattan', closest)

  const shortest = Math.min(...distances.map(d => d.distance))
  console.log('path sum', shortest)
}

module.exports = getGrid
