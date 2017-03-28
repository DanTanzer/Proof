import * as utils from './utils'
// ------------------------------------
// Constants
// ------------------------------------
export const GENERATE_EQUATION = 'GENERATE_EQUATION'
export const SET_FORMULA = 'SET_FORMULA'
export const SET_EQUATION = 'SET_EQUATION'
export const ADD_ERROR = 'ADD_ERROR'
export const SET_ANSWER = 'SET_ANSWER'
export const SET_ANSWER0 = 'SET_ANSWER0'
export const SET_ANSWER1 = 'SET_ANSWER1'
export const SET_ANSWER2 = 'SET_ANSWER2'
export const SET_ANSWER3 = 'SET_ANSWER3'
export const VALIDATE_ANSWER = 'VALIDATE_ANSWER'
export const SET_ANSWER_DEFAULT = 'SET_ANSWER_DEFAULT'

// ------------------------------------
// Actions
// ------------------------------------
export const generateEquation = () => (dispatch, getState) => {
  utils.generateEquation((error, equation) => {
    if (error) {
      dispatch({
        type: ADD_ERROR,
        payload: error
      })
    } else {
      dispatch({
        type: SET_FORMULA,
        payload: equation.formula
      })
      dispatch({
        type: SET_EQUATION,
        payload: equation
      })
      let keys = Object.keys(getState().answers)
      keys.forEach((x, index) => {
        dispatch({
          type: `SET_ANSWER${index}`,
          payload: ' '
        })
      })
      dispatch({
        type: SET_ANSWER_DEFAULT,
        payload: utils.padArray([], (equation.results + '').length + 1)
      })
    }
  })
}
export const onAnswerChanged = (obj) => (dispatch, getState) => {
  dispatch({
    type: SET_ANSWER,
    payload: obj
  })
  const state = getState()
  const isValid = state.equation.results === utils.convertArrayToNumber(state.answer)
  dispatch({
    type: VALIDATE_ANSWER,
    payload: isValid
  })
}
export const onAnswerChanged2 = (index, value) => (dispatch, getState) => {
  dispatch({
    type: `SET_ANSWER${index}`,
    payload: value
  })
  const state = getState()
  let answers = Object.keys(state.answers).map(key => state.answers[key])
  const isValid = state.equation.results === utils.convertArrayToNumber(answers)
  dispatch({
    type: VALIDATE_ANSWER,
    payload: isValid
  })
}
