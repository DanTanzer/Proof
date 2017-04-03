import React from 'react'

class BorrowCarry extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  handleChange = (event) => {} // this is placeholder to prevent the inaccurate onChange warning
  handleFocus = (event) => {
    event.target.select()
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let index = Number(event.target.tabIndex) + 1
      setTimeout(() => {
        this.props.answerRef.refs[`input${index}`] && this.props.answerRef.refs[`input${index}`].focus()
      }, 0)
      return
    }
    let results = ((/\d/).test(event.key))
    if (!results) {
      event.preventDefault()
    } else {
      // values set by html5 data-{anything} are found in dataset
      this.props.onBCChanged({ position: event.target.dataset.id, value:event.key })
      let index = Number(event.target.tabIndex) + 1
      // this timeout
      setTimeout(() => {
        this.props.answerRef.refs[`input${index}`] && this.props.answerRef.refs[`input${index}`].focus()
      }, 0)
    }
  }
  render () {
    let { bc, equation } = this.props
    let columnsNeeded = equation.columnCount
    let cells = bc.map((value, index) => {
      let tabIndex = (columnsNeeded - index) * 2 - 1 // set tabIndex to odd numbers by 2.
      let cell = <input key={index} data-id={index} type='text' className='borrowCarry' maxLength='1'
        tabIndex={tabIndex}
        ref={`input${tabIndex}`}
        onChange={event => this.handleChange(event)}
        onFocus={event => this.handleFocus(event)}
        onKeyDown={event => this.handleKeyPress(event)}
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
}

export default BorrowCarry

BorrowCarry.propTypes = {
  equation: React.PropTypes.object.isRequired,
  bc: React.PropTypes.array.isRequired,
  onBCChanged: React.PropTypes.func.isRequired,
  answerRef: React.PropTypes.any
}
