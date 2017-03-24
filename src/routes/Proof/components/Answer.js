import React from 'react'

export const Answer = (props) => ({
  handleInputChange (event) {
    props.onAnswerChanged({ position: event.target.dataset.id, value: event.target.value })
  },
  render () {
    let { answer } = this.props
    if (!answer) {
      return <div /> // the values has not been initialized yet
    }
    return (
      <div className='rowWrapper'>
        {
          answer.map((cell, index) => {
            return <input key={index} data-id={index} type='text' className='answer'
              onChange={this.handleInputChange} maxLength='1' />
          })
        }
      </div>
    )
  }
})
Answer.propTypes = {
  answer: React.PropTypes.array.isRequired
}
export default Answer
