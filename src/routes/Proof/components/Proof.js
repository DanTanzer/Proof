import React from 'react'
import Board from './Board'
import Config from './Config'
import Success from './Success'
import './proof.scss'
import FaPlay from 'react-icons/lib/fa/play'
class Proof extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidUpdate (prevProp, prevState, prevContext) {
    // place focus on playbtn when the queston is answered correctly
    if (this.props.valid && prevProp.valid === false) {
      this.playBtn.focus()
    }
  }
  onClick () {
    this.props.generateEquation()
    setTimeout(() => {
      this.board.bcRefs.refs['input1'] && this.board.bcRefs.refs['input1'].focus()
    }, 0)
  }
  render () {
    let { formula, equation, valid } = this.props
    let results = valid ? equation.results : '?'
    let boardVisble = valid ? 'none' : undefined
    let successVisble = valid ? undefined : 'none'
    return (
      <div className='proof border' >
        <Config {...this.props} />
        <button tabIndex='0' autoFocus className='btn btn-default btn-play border' 
          ref={play => this.playBtn = play}
          onClick={() => this.onClick()}>
          <FaPlay /> Play
        </button>
        <h2 className='border'>{ formula }{ results }</h2>
        <Board visible={boardVisble} {...this.props} ref={board => this.board = board} />
        <Success visible={successVisble} {...this.props} />
      </div>
    )
  }
}

Proof.propTypes = {
  formula: React.PropTypes.string.isRequired,
  valid: React.PropTypes.bool.isRequired,
  equation: React.PropTypes.object.isRequired,
  generateEquation: React.PropTypes.func.isRequired
}

export default Proof
