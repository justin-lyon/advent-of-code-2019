const bound = {
  lower: 134564,
  upper: 585159
}

const toArray = val => val.toString().split('').map(v => Number(v))

const isSixDigits = val => {
  return val.toString().length === 6
}

const isInRange = val => {
  return val > bound.lower && val < bound.upper
}

const hasAdjacent = password => {
  return (password.toString().match(/(\d)\1+/g) || []).map(sequence => sequence.length).includes(2)
}

const isAscending = val => {
  const values = toArray(val)

  return values.reduce((acc, v, index) => {
    if (values[index - 1]) return acc && v >= values[index - 1]
    return acc
  }, true)
}

const tests = [
  isSixDigits,
  isInRange,
  hasAdjacent,
  isAscending
]

const test = password => {
  return tests.map(t => t(password)).every(t => t === true)
}

module.exports = {
  bound,
  test,
  isSixDigits,
  isInRange,
  hasAdjacent,
  isAscending
}
