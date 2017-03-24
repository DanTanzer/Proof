import {
  COUNTER_ADD,
  SET_FORMULA,
  ADD_ERROR,
  SET_EQUATION,
  SET_ANSWER,
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

    //  injectReducer(store, { key: 'equation', reducer: equationReducer })
    //  injectReducer(store, { key: 'formula', reducer: formulaReducer })
    //  injectReducer(store, { key: 'answer', reducer: answerReducer })
    //  injectReducer(store, { key: 'valid', reducer: isValidAnswerReducer })

// export default combineReducers({
//  equation: equationReducer,
//  formula: formulaReducer,
//  answer: answerReducer,
//  valid: isValidAnswerReducer
// })
