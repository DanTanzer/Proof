import { combineReducers } from 'redux'
import locationReducer from './location'
import { equationReducer, formulaReducer, answerReducer, isValidAnswerReducer } from '../routes/Proof/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    equation: equationReducer,
    formula: formulaReducer,
    answer: answerReducer,
    valid: isValidAnswerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
