import {
  COUNTER_ADD,
  SET_FORMULA,
  ADD_ERROR,
  SET_EQUATION,
  SET_ANSWER,
  VALIDATE_ANSWER
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

export const answerReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_ANSWER:
      let temp = [...state]
      temp[action.payload.position] = action.payload.value
      return temp
    default:
      return state
  }
}

export const validateAnswerReducer = (state = 0, action) => {
  switch (action.type) {
    case VALIDATE_ANSWER:
      return action.payload
    default:
      return state
  }
}


export default equationReducer
