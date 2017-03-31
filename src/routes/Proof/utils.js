import {
  EASY,
  MEDIUM,
  HARD,
  SUBTRACT
  } from './components/Config'

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
  let results = new Array(length - arr.length).fill('').concat(arr)
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
export const numberLength = num => (num + '').length

const getTerms = (config) => {
  let high = 0
  let low = 0
  switch (config.difficultyLevel) {
    case EASY:
      high = 10
      break
    case MEDIUM:
      high = 100
      low = 20
      break
    case HARD:
      high = 1000
      low = 100
      break
    default:
      low = 0
      high = 10
  }
  let left = getRandomIntInclusive(low, high)
  let right = getRandomIntInclusive(low, high)

  switch (config.operator) {
    case SUBTRACT:
      // swap to avoid negative values
      if (right > left) {
        let temp = right
        right = left
        left = temp
      }
      break
    default:
  }
  return { left, right, operator: config.operator }
}
export const generateEquation = (config, callback) => {
  let { left, right, operator } = getTerms(config)
  let formula = `${left}${operator}${right}=`
  let leftArray = convertToArray(left)
  let rightArray = convertToArray(right)
  rightArray.unshift(operator) // add operator to right array
  let results = CalculatorOperations[operator](left, right)
  let maxLength = Math.max(leftArray.length, rightArray.length, numberLength(results))
  let parsedEquation = (
    {
      formula: formula,
      columnCount: maxLength,
      rows: [
        {
          term: padArray(leftArray, maxLength)
        },
        {
          term: padArray(rightArray, maxLength),
          operator: operator
        }
      ],
      results: results
    }
  )
  callback(null, parsedEquation)
}
