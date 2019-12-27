const { bound, test, isSixDigits, isInRange, hasAdjacent, isAscending } = require('./test')

const findPasswords = ({ lower, upper }) => {
  const passwords = []
  for (let i = lower + 1; i < upper; i++) {
    const isValid = test(i)
    if (isValid) passwords.push(i)
  }
  console.log('passwords', passwords, passwords.length)
}

// findPasswords({ lower: 134564, upper: 134564 + 1000 })
findPasswords(bound)

// console.log('135567', test(135567))
// console.log('isSixDigits(135567)', isSixDigits(135567))
// console.log('isInRange(135567)', isInRange(135567))
// console.log('hasAdjacent(135567)', hasAdjacent(134556))
// console.log('isAscending(135567)', isAscending(135567))
