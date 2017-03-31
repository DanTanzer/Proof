import React from 'react'

export const EASY = 'EASY'
export const MEDIUM = 'MEDIUM'
export const HARD = 'HARD'

export const ADD = '+'
export const SUBTRACT = '-'
export const DIVIDE = '/'
export const MULTIPLY = '*'

export const Config = props => {
  const handleDifficultyChange = event => {
    props.onDifficultyLevelChange(event.target.value)
  }
  const handleOperatorChange = event => {
    props.onOperatorChange(event.target.value)
  }
  let { difficultyLevel, operator } = props.config
  return (
    <div className='config'>
      <div className='difficulty-wrapper'>
        <label>
          <input type='radio' value={EASY}
            checked={difficultyLevel === EASY}
            onChange={handleDifficultyChange} />
            Easy
        </label>
        <label>
          <input type='radio' value={MEDIUM}
            checked={difficultyLevel === MEDIUM}
            onChange={handleDifficultyChange} />
            Medium
        </label>
        <label>
          <input type='radio' value={HARD}
            checked={difficultyLevel === HARD}
            onChange={handleDifficultyChange} />
            Hard
        </label>
      </div>
      <div className='math-types' data-toggle='buttons'>
        <label className=''>
          <input type='radio' value={ADD}
            checked={operator === ADD}
            onChange={handleOperatorChange} />
            Add
        </label>
        <label className=''>
          <input type='radio' value={SUBTRACT}
            checked={operator === SUBTRACT}
            onChange={handleOperatorChange} />
            Subtract
        </label>
        <label className=''>
          <input type='radio' value={DIVIDE}
            checked={operator === DIVIDE}
            onChange={handleOperatorChange} />
            Divide
        </label>
        <label className=''>
          <input type='radio' value={MULTIPLY}
            checked={operator === MULTIPLY}
            onChange={handleOperatorChange} />
            Multiply
        </label>
      </div>
    </div>
  )
}
export default Config
Config.propTypes = {
  onOperatorChange: React.PropTypes.func.isRequired,
  config: React.PropTypes.object
}
