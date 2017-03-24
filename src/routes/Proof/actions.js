import * as utils from './utils'
// ------------------------------------
// Constants
// ------------------------------------
export const GENERATE_EQUATION = 'GENERATE_EQUATION'
export const SET_FORMULA = 'SET_FORMULA'
export const SET_EQUATION = 'SET_EQUATION'
export const ADD_ERROR = 'ADD_ERROR'
export const SET_ANSWER = 'SET_ANSWER'
export const VALIDATE_ANSWER = 'VALIDATE_ANSWER'
// ------------------------------------
// Actions
// ------------------------------------
export const generateEquationold = (dispatch) => {
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
    }
  })
}

export const generateEquation = () => (dispatch) => {
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
    }
  })
}

export const onAnswerchangedOld = (dispatch, x, obj) => {
  dispatch({
    type: SET_ANSWER,
    payload: obj
  })
  // console.log(state)
  dispatch({
    type: VALIDATE_ANSWER,
    payload: obj.answer
  })
}
export const on1 = (obj) => {
  return (dispatch, getState) => {
    console.log(obj, getState)
    return new Promise((resolve) => {
      console.log('made it')
      resolve()
    })
  }
}

export const onAnswerChanged = (obj) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ANSWER,
      payload: obj
    })
    console.log(getState)
    dispatch({
      type: VALIDATE_ANSWER,
      payload: obj
    })
  }
}
