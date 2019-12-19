const masses = require('./masses')

const calculateFuel = mass => Math.floor(mass / 3) - 2

console.log(calculateFuel(12))

const totalMass = masses.reduce((acc, val) => {
  return acc + calculateFuel(val)
}, 0);

console.log('totalMass', totalMass)

const getFuelOfFuel = fuelMass => {
  const extraFuel = calculateFuel(fuelMass)
  return extraFuel > 0 ? extraFuel + getFuelOfFuel(extraFuel) : 0
}

const part1 = input => {
  return input
    .map(calculateFuel)
    .reduce((acc, val) => acc + val, 0)
}

const part2 = input => {
  return input
    .map(calculateFuel)
    .map(val => val + getFuelOfFuel(val))
    .reduce((acc, val) => acc + val, 0)
}

console.log('part1', part1(masses))

console.log('part2', part2(masses))
