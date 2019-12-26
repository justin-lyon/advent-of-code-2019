const getCoordOffset = (coords) => {
  return coords.reduce((acc, coord) => {
    if (coord.x < acc.x) acc.x = coord.x
    if (coord.y < acc.y) acc.y = coord.y
    return acc
  }, { x: 0, y: 0 })
}

const getWiresOffset = (wires) => {
  const offset = wires.reduce((acc, wire) => {
    const coord = getCoordOffset(wire.coords)
    if (coord.x < acc.x) acc.x = coord.x
    if (coord.y < acc.y) acc.y = coord.y
    return acc
  }, { x: 0, y: 0 })

  offset.x = Math.abs(offset.x)
  offset.y = Math.abs(offset.y)
  return offset
}

const applyOffset = (wires, offset) => {
  return wires.map(w => {
    w.coords = w.coords.map(c => {
      c.x += offset.x
      c.y += offset.y
      return c
    })
    return w
  })
}

const normalizeWires = ([...wires]) => {
  const offset = getWiresOffset(wires)
  return applyOffset(wires, offset)
}

const getBounds = wires => {
  const xCoords = wires
    .reduce((acc, wire) => {
      return acc.concat(wire.coords)
    }, [])
    .map(c => c.x)
  const yCoords = wires
    .reduce((acc, wire) => {
      return acc.concat(wire.coords)
    }, [])
    .map(c => c.y)

  return {
    x: Math.max(...xCoords),
    y: Math.max(...yCoords)
  }
}

const initGrid = bounds => {
  const grid = []

  for (let x = 0; x < bounds.x; x++) {
    grid[x] = []
    for (let y = 0; x < bounds.y; y++) {
      grid[x][y] = {
        img: '.'
      }
    }
  }

  return {
    bounds,
    nodes: grid
  }
}

const getGrid = ([...wires]) => {
  const normalWires = normalizeWires(wires)
  const bounds = getBounds(normalWires)

  console.log('wires', normalWires.map(w => w.coords))

  console.log('bounds', bounds)

  const grid = initGrid(bounds)
  console.log('grid', grid)
}

module.exports = getGrid
