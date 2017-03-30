// ======================================================
// Consts
// ======================================================
import {
  SET_FORMULA,
  ADD_ERROR,
  SET_EQUATION,
  SET_ANSWER,
  VALIDATE_ANSWER,
  SET_DIFFICULTY,
  SET_ANSWER_DEFAULT,
  SET_OPERATOR,
  SET_BC,
  SET_BC_DEFAULT
} from './actions'
import {
  HARD as defaultDifficulty,
  ADD as defaultOperator
} from './components/Config'

// ======================================================
// Reducers
// ======================================================
export const equationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EQUATION:
      return action.payload
    default:
      return state
  }
}
export const formulaReducer = (state = '', action) => {
  switch (action.type) {

    case SET_FORMULA:
      return action.payload
    default:
      return state
  }
}
export const addError = (state = [], action) => {
  switch (action.type) {
    case ADD_ERROR:
      return [
        action.payload,
        ...state
      ]
    default:
      return state
  }
}

export const answerReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ANSWER_DEFAULT:
      return [...action.payload]
    case SET_ANSWER:
      let temp = [...state]
      temp[action.payload.position] = action.payload.value
      return temp
    default:
      return state
  }
}

export const bcReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BC_DEFAULT:
      return [...action.payload]
    case SET_BC:
      let temp = [...state]
      temp[action.payload.position] = action.payload.value
      return temp
    default:
      return state
  }
}
export const isValidAnswerReducer = (state = false, action) => {
  switch (action.type) {
    case VALIDATE_ANSWER:
      return action.payload
    default:
      return state
  }
}

export const difficultyReducer = (state = defaultDifficulty, action) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return action.payload
    default:
      return state
  }
}
export const operatorReducer = (state = defaultOperator, action) => {
  switch (action.type) {
    case SET_OPERATOR:
      return action.payload
    default:
      return state
  }
}
