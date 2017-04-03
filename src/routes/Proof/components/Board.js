import React from 'react'
import Rows from './Rows'
import BorrowCarry from './BorrowCarry'
import Answer from './Answer'
import './proof.scss'
class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }
  render () {
    let visible = this.props.visible ? this.props.visible : 'board'
    return (
      <div className={visible} >
        <BorrowCarry {...this.props} ref={bc => this.bcRefs = bc} answerRef={this.answerRefs} />
        <Rows {...this.props} />
        <Answer {...this.props} ref={answer => this.answerRefs = answer} bcRef={this.bcRefs} />
      </div>
    )
  }
}

export default Board

Board.propTypes = {
  visible: React.PropTypes.string
}
