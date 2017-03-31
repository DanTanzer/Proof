import React from 'react'
import './proof.scss'
export const Row = (props) => {
  let { term, operator, columnCount } = props
  let filler = []
  for (let f = term.length; f < columnCount; f++) {
    if (filler.length === 0 && operator) {
      filler.push(operator)
    } else {
      filler.push('')
    }
  }
  let cells = [...filler, ...term]
  let row = (
    <div className='rowWrapper' >
      {
        cells.map((value, index) => {
          return <span key={index} className='value' >{value}</span>
        })
      }
    </div>
  )

  return row
}

Row.propTypes = {
  id: React.PropTypes.number,
  term: React.PropTypes.array.isRequired,
  columnCount:React.PropTypes.number.isRequired,
  operator: React.PropTypes.string
}

export default Row
