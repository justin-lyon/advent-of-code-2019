const parse = instructions => {
  return instructions.split(',').map(arg => {
    arg = arg.trim()
    return {
      magnitude: arg[0],
      distance: parseInt(arg.slice(1))
    }
  })
}

const getWire = (name, input) => {
  const vectors = parse(input)
  return {
    name,
    vectors
  }
}

module.exports = getWire
