import { combineReducers } from 'redux'
import locationReducer from './location'
import { equationReducer, formulaReducer, isValidAnswerReducer,
  answerReducer,
  answerReducer0,
  answerReducer1,
  answerReducer2,
  answerReducer3,
  difficultyReducer,
  mathTypeReducer
} from '../routes/Proof/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    equation: equationReducer,
    formula: formulaReducer,
    answer: answerReducer,
    config: combineReducers({
      difficultyLevel: difficultyReducer,
      mathType: mathTypeReducer
    }),
    answers: combineReducers({
      input0: answerReducer0,
      input1: answerReducer1,
      input2: answerReducer2,
      input3: answerReducer3
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
