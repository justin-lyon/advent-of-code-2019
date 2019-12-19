const masses = require('./masses')

const fuelByMass = mass => Math.floor(mass / 3) - 2

console.log(fuelByMass(12))

const totalFuel = masses.reduce((acc, val) => {
  return acc + fuelByMass(val)
}, 0);

console.log(totalFuel)
