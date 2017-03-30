import React from 'react'
import './proof.scss'
export const Row = (props) => ({
  render () {
    let { term, operator, columnCount, id } = this.props
    let i = 0
    let filler = []
    for (let f = term.length; f < columnCount; f++) {
      if (filler.length === 0 && operator) {
        filler.push(operator)
      } else {
        filler.push('')
      }
    }
    let cells = [filler, ...term]

  /* let borrowCells = (id === 1)
      ? (
        <div className='rowWrapper' >
          {
            cells.map((cell, index) => {
              return index === 0 || index === columnCount - 1
                ? <div key={i++} className='borrow' />
                : <button key={i++} className='borrow' >borrow</button>
            })
          }
        </div>
        )
      : (
        <div className='rowWrapper' >
          {
            cells.map((x, index) => {
              return <div key={index} />
            })
          }
        </div>
        )
    */
    let rows = (
      <div className='rowWrapper' >
        {
          cells.map(x => {
            return <span key={i++} className='value' >{x}</span>
          })
        }
      </div>
    )

    return (
      <div >
        {/* {borrowCells} */}
        {rows}
      </div>
    )
  }
})

Row.propTypes = {
  id: React.PropTypes.number,
  term: React.PropTypes.array.isRequired,
  columnCount:React.PropTypes.number.isRequired,
  operator: React.PropTypes.string
}

export default Row
