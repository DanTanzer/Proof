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
export const SET_DIFFICULTY = 'SET_DIFFICULTY'
export const SET_OPERATOR = 'SET_OPERATOR'
export const SET_BC = 'SET_BC'
export const SET_BC_DEFAULT = 'SET_BC_DEFAULT'
// ------------------------------------
// Actions
// ------------------------------------
export const generateEquation = () => (dispatch, getState) => {
  let { config } = getState()
  utils.generateEquation(config, (error, equation) => {
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
      dispatch({
        type: SET_ANSWER_DEFAULT,
        payload: utils.padArray([], equation.columnCount)
      })
      dispatch({
        type: SET_BC_DEFAULT,
        payload: utils.padArray([], equation.columnCount)
      })
    }
  })
}
export const onDifficultyLevelChange = (level) => (dispatch) => {
  dispatch({
    type: SET_DIFFICULTY,
    payload: level
  })
}
export const onOperatorChange = (type) => (dispatch) => {
  dispatch({
    type: SET_OPERATOR,
    payload: type
  })
}

export const onAnswerChanged = (obj) => (dispatch, getState) => {
  dispatch({
    type: 'SET_ANSWER',
    payload: obj
  })
  const state = getState()
  const isValid = state.equation.results === utils.convertArrayToNumber(state.answer)
  dispatch({
    type: VALIDATE_ANSWER,
    payload: isValid
  })
}

export const onBCChanged = (obj) => (dispatch, getState) => {
  dispatch({
    type: SET_BC,
    payload: obj
  })
}
