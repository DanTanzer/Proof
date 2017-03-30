import React from 'react'

export const BorrowCarry = (props) => ({
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
      props.onBCChanged({ position: event.target.dataset.id, value:event.key })
    }
  },
  render () {
    let { bc, equation } = this.props
    let columnsNeeded = (equation.results + '').length
    let rows = bc.map((cell, index) => {
      let row = <input key={index} data-id={index} type='text' className='borrowCarry' maxLength='1'
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onKeyPress={this.handleKeyPress}
        value={cell}
      />
      return row
    })

    let filler = []
    for (let index = bc.length; index < columnsNeeded; index++) {
      filler.push(<div className='filler' key={index} />)
    }
    return <div className='rowWrapper'>
      {rows}
      {filler}
    </div>
  }
})

export default BorrowCarry

BorrowCarry.propTypes = {
  equation: React.PropTypes.object.isRequired
}
