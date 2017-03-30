import React from 'react'

export const EASY = 'EASY'
export const MEDIUM = 'MEDIUM'
export const HARD = 'HARD'

export const ADD = '+'
export const SUBTRACT = '-'
export const DIVIDE = '/'
export const MULTIPLY = '*'

export const Config = props => ({
  handleDifficultyChange (event) {
    props.onDifficultyLevelChange(event.target.value)
  },
  handleOperatorChange (event) {
    props.onOperatorChange(event.target.value)
  },
  render () {
    let { difficultyLevel, operator } = this.props.config
    return (
      <div className='config'>
        <div className='difficulty-wrapper'>
          <label>
            <input type='radio' value={EASY}
              checked={difficultyLevel === EASY}
              onChange={this.handleDifficultyChange} />
              Easy
          </label>
          <label>
            <input type='radio' value={MEDIUM}
              checked={difficultyLevel === MEDIUM}
              onChange={this.handleDifficultyChange} />
              Medium
          </label>
          <label>
            <input type='radio' value={HARD}
              checked={difficultyLevel === HARD}
              onChange={this.handleDifficultyChange} />
              Hard
          </label>
        </div>
        <div className='math-types' data-toggle='buttons'>
          <label className=''>
            <input type='radio' value={ADD}
              checked={operator === ADD}
              onChange={this.handleOperatorChange} />
              Add
          </label>
          <label className=''>
            <input type='radio' value={SUBTRACT}
              checked={operator === SUBTRACT}
              onChange={this.handleOperatorChange} />
              Subtract
          </label>
          <label className=''>
            <input type='radio' value={DIVIDE}
              checked={operator === DIVIDE}
              onChange={this.handleOperatorChange} />
              Divide
          </label>
          <label className=''>
            <input type='radio' value={MULTIPLY}
              checked={operator === MULTIPLY}
              onChange={this.handleOperatorChange} />
              Multiply
          </label>
        </div>
      </div>
    )
  }
})
export default Config
