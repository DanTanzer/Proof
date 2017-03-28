import React from 'react'
export const Config = props => ({
  handleDifficultyChange (event) {
    props.onDifficultyLevelChange(event.target.value)
  },
  handleMathTypeChange (event) {
    props.onMathTypeChange(event.target.value)
  },
  render () {
    let { difficultyLevel, mathType } = this.props.config
    return (
      <div className='config'>
        <div className='difficulty-wrapper'>
          <label>
            <input type='radio' value='optionEasy'
              checked={difficultyLevel === 'optionEasy'}
              onChange={this.handleDifficultyChange} />
              Easy
          </label>
          <label>
            <input type='radio' value='optionMedium'
              checked={difficultyLevel === 'optionMedium'}
              onChange={this.handleDifficultyChange} />
              Medium
          </label>
          <label>
            <input type='radio' value='optionHard'
              checked={difficultyLevel === 'optionHard'}
              onChange={this.handleDifficultyChange} />
              Hard
          </label>
        </div>
        <div className='math-types' data-toggle='buttons'>
          <label className=''>
            <input type='radio' value='optionAdd'
              checked={mathType === 'optionAdd'}
              onChange={this.handleMathTypeChange} />
              Add
          </label>
          <label className=''>
            <input type='radio' value='optionSubtract'
              checked={mathType === 'optionSubtract'}
              onChange={this.handleMathTypeChange} />
              Subtract
          </label>
          <label className=''>
            <input type='radio' value='optionDivide'
              checked={mathType === 'optionDivide'}
              onChange={this.handleMathTypeChange} />
              Divide
          </label>
          <label className=''>
            <input type='radio' value='optionMultiply'
              checked={mathType === 'optionMultiply'}
              onChange={this.handleMathTypeChange} />
              Multiply
          </label>
        </div>
      </div>
    )
  }
})
export default Config
