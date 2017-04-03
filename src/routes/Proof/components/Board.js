import React from 'react'
import Rows from './Rows'
import BorrowCarry from './BorrowCarry'
import Answer from './Answer'
import './proof.scss'
class Board extends React.Component {
  render () {
    return (
      <div className='board' >
        <BorrowCarry {...this.props} ref={bc => this.bcRefs = bc} answerRef={this.answerRefs} />
        <Rows {...this.props} />
        <Answer {...this.props} ref={answer => this.answerRefs = answer} bcRef={this.bcRefs} />
      </div>
    )
  }
}

export default Board

Board.propTypes = {}
