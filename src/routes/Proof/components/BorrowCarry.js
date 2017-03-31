import React from 'react'

export const BorrowCarry = (props) => {
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
      props.onBCChanged({ position: event.target.dataset.id, value:event.key })
    }
  }

  let { bc, equation } = props
  let columnsNeeded = equation.columnCount
  let cells = bc.map((value, index) => {
    let cell = <input key={index} data-id={index} type='text' className='borrowCarry' maxLength='1'
      tabIndex={(columnsNeeded - index) * 2 - 1} // set tabIndex to odd numbers by 2.
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyPress={handleKeyPress}
      value={value}
    />
    return cell
  })

  let filler = []
  for (let index = bc.length; index < columnsNeeded; index++) {
    filler.push(<div className='filler' key={index} />)
  }

  return <div className='rowWrapper'>
    {filler}
    {cells}
  </div>
}

export default BorrowCarry

BorrowCarry.propTypes = {
  equation: React.PropTypes.object.isRequired,
  bc: React.PropTypes.array.isRequired
}
