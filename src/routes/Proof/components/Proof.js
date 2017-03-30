import React from 'react'
import Board from './Board'
import Config from './Config'
import './proof.scss'
import FaPlay from 'react-icons/lib/fa/play'
export const Proof = (props) => ({
  render () {
    let { formula, equation, valid, generateEquation } = this.props
    let isValid = valid ? equation.results : '?'
    return (
      <div className='proof border' >
        <Config {...this.props} />
        <button className='btn btn-default btn-play border' onClick={generateEquation}>
          <FaPlay /> Play
        </button>
        <h2 className='border'>{ formula }{ isValid }</h2>
        <Board className='border' {...this.props} />
      </div>
    )
  }
})

Proof.propTypes = {
  formula: React.PropTypes.string.isRequired,
  valid: React.PropTypes.bool.isRequired,
  answer: React.PropTypes.array.isRequired,
  equation: React.PropTypes.object.isRequired,
  generateEquation: React.PropTypes.func.isRequired,
  onAnswerChanged: React.PropTypes.func.isRequired,
  onDifficultyLevelChange: React.PropTypes.func.isRequired
}

export default Proof
