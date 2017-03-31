import React from 'react'
import Row from './Row'

export const Rows = (props) => {
  let { rows, columnCount } = props.equation

  if (!rows) return <div />

  let _rows = rows.map((row, index) => {
    return <Row key={index++} {...row} id={index} columnCount={columnCount} />
  })

  return <div className='rowsContainer' >
    { _rows }
  </div>
}


export default Rows

Rows.propTypes = {
  equation: React.PropTypes.object.isRequired
}




