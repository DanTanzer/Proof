import React from 'react'
import Board from './Board'
import './proof.scss'
export const Proof = (props) => ({
  render () {
    let { formula, generateEquation, equation, onAnswerChanged } = this.props
    return (
      <div className='proof' >
        <button className='btn btn-default' onClick={generateEquation}>
          Reset
        </button> <h2>{ formula }</h2>
        <Board equation={equation} onAnswerChanged={onAnswerChanged} />
      </div>
    )
  }
})

// export const Proof = (props) => (
//  <div className='proof' >
//    <button className='btn btn-default' onClick={props.generateEquation} >
//      Reset
//    </button> <h2>{ props.formula }</h2>
//    <Board equation={props.equation} onAnswerChanged={props.onAnswerChanged} />
//  </div>
// )


Proof.propTypes = {
  formula: React.PropTypes.string.isRequired,
  equation: React.PropTypes.object.isRequired,
  generateEquation: React.PropTypes.func.isRequired,
  onAnswerChanged: React.PropTypes.func.isRequired
}

export default Proof
