import React from 'react'
import Rows from './Rows'
import BorrowCarry from './BorrowCarry'
import Answer from './Answer'
import './proof.scss'
export const Board = (props) => {
  let board = (
    <div className='board' >
      <BorrowCarry {...props} />
      <Rows {...props} />
      <Answer {...props} />
    </div>)
  return board
}

export default Board

Board.propTypes = {
  equation: React.PropTypes.object,
  rows:React.PropTypes.array,
  columnCount:React.PropTypes.number
}
