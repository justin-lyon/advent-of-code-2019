const codes = require('./codes')

const restoreCodes = (input1 = 12, input2 = 2) => {
  codes[1] = input1
  codes[2] = input2
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

const codeReader = ([...code]) => {
  for (let i = 4; i < code.length; i+=4) {
    const instruction = code.slice(i - 4, i)
    execute(instruction, code)
  }
  return code[0]
}

restoreCodes()
const intCode = codeReader(codes)
console.log('intCode', intCode)

const findGravitySetting = () => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      restoreCodes(noun, verb)
      const value = codeReader(codes)

      if (value === 19690720) return 100 * noun + verb
    }
  }
}

const gravSetting = findGravitySetting()
console.log('gravSetting', gravSetting)