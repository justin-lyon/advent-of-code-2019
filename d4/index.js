const { bound, isValid } = require('./test')

const findPasswords = ({ lower, upper }) => {
  const passwords = []
  for (let i = lower + 1; i < upper; i++) {
    if (isValid(i)) passwords.push(i)
  }
  console.log('passwords', passwords, passwords.length)
}

// findPasswords({ lower: 134564, upper: 134564 + 1000 })
findPasswords(bound)
