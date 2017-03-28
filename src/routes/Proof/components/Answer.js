import React from 'react'

export const Answer = (props) => ({
  handleChange (event) {}, // this is placeholder to prevent the inaccurate onChange warning
  handleFocus (event) {
    event.target.select()
  },
  handleKeyPress (event) {
    let results = ((/\d/).test(event.key))
    if (!results) {
      event.preventDefault()
    } else {
      // values set by html5 data-{anything} are found in dataset
      props.onAnswerChanged(event.target.dataset.id, event.key)
    }
  },
  render () {
    let { answers } = this.props
    if (!answers) {
      return <div /> // the values has not been initialized yet
    }
    let keys = Object.keys(answers)
    return (
      <div className='rowWrapper'>
        {
          keys.map((cell, index) => {
            return <input key={index} data-id={index} type='text' className='answer'
              maxLength='1'
              value={answers[cell]}
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyPress} />
          })
        }
      </div>
    )
  }
})
Answer.propTypes = {
  answers: React.PropTypes.object.isRequired
}
export default Answer
