const codes = require('./codes')

const restoreCodes = () => {
  codes[1] = 12
  codes[2] = 2
}

const addCode = [1,0,0,0,99] // => 1 + 1 = 2
const multiplyCode = [2,3,0,3,99] // => 2 * 3 = 6
const mediumCode = [2,4,4,5,99,0] // => 99 * 99 = 9801
const hardCode = [1,1,1,4,99,5,6,0,99]
// => 1 + 1 = 2 to index 4
// => 5 * 6 = 30 to index 0
// exit => 30,1,1,4,2,5,6,0,99

const add = (a, b) => a + b
const multiply = (a, b) => a * b

const operations = {
  1: add,
  2: multiply
}

const execute = ([operator, pos1, pos2, target], code) => {
  if (!operations[operator]) {
    return
  }

  const value = operations[operator](code[pos1], code[pos2])
  code[target] = value
}

const codeReader = code => {
  for (let i = 4; i < code.length; i+=4) {
    const codeLine = code.slice(i - 4, i)
    execute(codeLine, code)
  }
}

restoreCodes()
codeReader(codes)
console.log('codes[0]', codes[0])
