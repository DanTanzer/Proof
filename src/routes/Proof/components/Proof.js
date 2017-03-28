import React from 'react'
import Board from './Board'
import './proof.scss'
export const Proof = (props) => ({
  render () {
    let { formula, generateEquation, equation, valid } = this.props
    let isValid = valid ? equation.results : '?'
    return (
      <div className='proof' >
        <button className='btn btn-default' onClick={generateEquation}>
          Reset
        </button>
        <h2>{ formula }{ isValid }</h2>
        <Board {...this.props} />
      </div>
    )
  }
})

Proof.propTypes = {
  formula: React.PropTypes.string.isRequired,
  answers: React.PropTypes.object.isRequired,
  equation: React.PropTypes.object.isRequired,
  generateEquation: React.PropTypes.func.isRequired,
  onAnswerChanged: React.PropTypes.func.isRequired
}

export default Proof
