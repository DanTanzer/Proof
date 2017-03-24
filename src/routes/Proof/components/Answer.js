import React from 'react'

export const Answer = (props) => ({
  handleInputChange (event) {
    props.onAnswerChanged({ position: event.target.dataset.id, value: event.target.value })
  },
  render () {
    let { columnCount, answer } = this.props.equation
    let cells = []
    for (let i = 0; i < columnCount; i++) {
      cells.push(i)
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
  equation: React.PropTypes.object.isRequired
}
export default Answer
