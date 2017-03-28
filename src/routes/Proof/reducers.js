import {
  COUNTER_ADD,
  SET_FORMULA,
  ADD_ERROR,
  SET_EQUATION,
  SET_ANSWER,
  SET_ANSWER0,
  SET_ANSWER1,
  SET_ANSWER2,
  SET_ANSWER3,
  VALIDATE_ANSWER,
  SET_ANSWER_DEFAULT
} from './actions'

export const addReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_ADD:
      return state + action.payload
    default:
      return state
  }
}
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
export const isValidAnswerReducer = (state = false, action) => {
  switch (action.type) {
    case VALIDATE_ANSWER:
      return action.payload
    default:
      return state
  }
}
export const answerReducer0 = (state = ' ', action) => {
  switch (action.type) {
    case SET_ANSWER0:
      return action.payload
    default:
      return state
  }
}
export const answerReducer1 = (state = ' ', action) => {
  switch (action.type) {
    case SET_ANSWER1:
      return action.payload
    default:
      return state
  }
}
export const answerReducer2 = (state = ' ', action) => {
  switch (action.type) {
    case SET_ANSWER2:
      return action.payload
    default:
      return state
  }
}
export const answerReducer3 = (state = ' ', action) => {
  switch (action.type) {
    case SET_ANSWER3:
      return action.payload
    default:
      return state
  }
}
