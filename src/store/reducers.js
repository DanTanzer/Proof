import { combineReducers } from 'redux'
import locationReducer from './location'
import {
  equationReducer,
  formulaReducer,
  isValidAnswerReducer,
  answerReducer,
  difficultyReducer,
  operatorReducer,
  bcReducer
} from '../routes/Proof/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    equation: equationReducer,
    formula: formulaReducer,
    answer: answerReducer,
    bc: bcReducer,
    config: combineReducers({
      difficultyLevel: difficultyReducer,
      operator: operatorReducer
    }),
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
