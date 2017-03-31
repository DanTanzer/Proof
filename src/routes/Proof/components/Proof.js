import React from 'react'
import Board from './Board'
import Config from './Config'
import './proof.scss'
import FaPlay from 'react-icons/lib/fa/play'
export const Proof = (props) => {
  let { formula, equation, valid, generateEquation } = props
  let isValid = valid ? equation.results : '?'
  return (
    <div className='proof border' >
      <Config {...props} />
      <button className='btn btn-default btn-play border' onClick={generateEquation}>
        <FaPlay /> Play
      </button>
      <h2 className='border'>{ formula }{ isValid }</h2>
      <Board className='border' {...props} />
    </div>
  )
}

Proof.propTypes = {
  formula: React.PropTypes.string.isRequired,
  valid: React.PropTypes.bool.isRequired,
  equation: React.PropTypes.object.isRequired,
  generateEquation: React.PropTypes.func.isRequired
}

export default Proof
