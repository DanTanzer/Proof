function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function convertToArray (value) {
  let results = []
  while (value > 0) {
    results.push(value % 10)
    value = Math.floor(value / 10)
  }
  return results.reverse()
}
export const padArray = (arr, length) => {
  let results = new Array(length - arr.length).fill(undefined).concat(arr)
  return results
}
export const convertArrayToNumber = (arr) => {
  let results = Number(arr.join(''))
  return results
}

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

// answer: padArray([], (results + '').length + 1),
export const generateEquation = (callback) => {
  // for now just return temporary equation, in the future
  // this function will be used to generate random equations at
  // different complexities
  let left = getRandomIntInclusive(100, 300)
  let right = getRandomIntInclusive(100, 300)
  let operator = '+'
  let formula = `${left}${operator}${right}=`
  let leftArray = convertToArray(left)
  let rightArray = convertToArray(right)
  let maxLength = Math.max(leftArray.length, rightArray.length)
  let results = CalculatorOperations[operator](left, right)
  let parsedEquation = (
    {
      formula: formula,
      columnCount: maxLength + 1,
      rows: [
        {
          term: padArray(leftArray, maxLength)
        },
        {
          term: padArray(rightArray, maxLength),
          operator:'+'
        }
      ],
      results: results
    }
  )
  callback(null, parsedEquation)
}
