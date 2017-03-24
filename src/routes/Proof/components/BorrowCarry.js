import React from 'react'

export const BorrowCarry = (props) => ({
  render () {
    let { columnCount } = this.props.equation
    let cells = []
    for (let i = 0; i < columnCount; i++) {
      cells.push(i)
    }
    return (
      <div className='rowWrapper'>
        {
          cells.map((cell, index) => {
            return <input key={index} type='text' className='borrowCarry' maxLength='1' />
          })
        }
      </div>
    )
  }
})

export default BorrowCarry

BorrowCarry.propTypes = {
  equation: React.PropTypes.object.isRequired
}
