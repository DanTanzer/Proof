import React from 'react'
import Row from './Row'
import BorrowCarry from './BorrowCarry'
import Answer from './Answer'
import './proof.scss'
export const Board = (props) => ({
  render () {
    let { equation } = this.props
    let { rows, columnCount } = equation
    let i = 0
    if (rows === undefined) return <div />
    let board = (
      <div className='board' >
        <BorrowCarry {... this.props} />
        {
          rows.map(row => {
            return <Row key={i++} {...row} id={i} columnCount={columnCount} />
          })
        }
        <Answer {...this.props} />
      </div>)
    return board
  }
})

export default Board

Board.propTypes = {
  equation: React.PropTypes.object,
  rows:React.PropTypes.array,
  columnCount:React.PropTypes.number,
  onAnswerChanged: React.PropTypes.func.isRequired
}
