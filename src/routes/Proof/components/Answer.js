import React from 'react'

export const Answer = (props) => {
  const handleChange = (event) => {} // this is placeholder to prevent the inaccurate onChange warning
  const handleFocus = (event) => {
    event.target.select()
  }
  const handleKeyPress = (event) => {
    let results = ((/\d/).test(event.key))
    if (!results) {
      event.preventDefault()
    } else {
      // values set by html5 data-{anything} are found in dataset
      props.onAnswerChanged({ position: event.target.dataset.id, value:event.key })
    }
  }

  let { answer, equation } = props
  if (!answer) {
    return <div /> // the values has not been initialized yet
  }

  let columnsNeeded = equation.columnCount
  let cells = answer.map((value, index) => {
    let cell = <input key={index} data-id={index} type='text' className='answer'
      maxLength='1'
      value={value}
      tabIndex={(columnsNeeded - index) * 2} // set tabIndex to even numbers by 2.
      onFocus={handleFocus}
      onChange={handleChange}
      onKeyUp={handleKeyPress} />
    return cell
  })

  let filler = []
  for (let index = answer.length; index < columnsNeeded; index++) {
    filler.push(<div className='filler' key={index} />)
  }
  return <div className='rowWrapper'>
    {filler}
    {cells}
  </div>
}

Answer.propTypes = {
  answer: React.PropTypes.array.isRequired,
  equation: React.PropTypes.object.isRequired
}
export default Answer
