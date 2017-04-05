import React from 'react'

class Answer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }
  handleChange (event) {}
  handleFocus (event) {
    event.target.select()
  }
  setFocus = (refs, inputId) => {
    event.preventDefault()
    setTimeout(() => {
      refs[`input${inputId}`] && refs[`input${inputId}`].focus()
    }, 0)
  }
  handleDirection (event) {
    let handled = true
    switch (event.key) {
      case 'Enter':
        this.setFocus(this.props.bcRef.refs, Number(event.target.tabIndex) + 1)
        break
      case 'ArrowDown':
        this.setFocus(this.props.bcRef.refs, Number(event.target.tabIndex) + 1)
        break
      case 'ArrowUp':
        this.setFocus(this.props.bcRef.refs, Number(event.target.tabIndex) - 1)
        break
      case 'ArrowLeft':
        this.setFocus(this.refs, Number(event.target.tabIndex) + 2)
        break
      case 'ArrowRight':
        this.setFocus(this.refs, Number(event.target.tabIndex) - 2)
        break
      default:
        handled = false
        break
    }
    return handled
  }
  handleKeyPress (event) {
    if (this.handleDirection(event)) {
      return
    }
    let results = ((/\d/).test(event.key))
    if (!results) {
      event.preventDefault()
    } else {
      this.props.onAnswerChanged({ position: event.target.dataset.id, value:event.key })
      this.setFocus(this.props.bcRef.refs, Number(event.target.tabIndex) + 1)
    }
  }
  render () {
    let { answer, equation } = this.props
    if (!answer) {
      return <div /> // the values has not been initialized yet
    }

    let columnsNeeded = equation.columnCount
    let cells = answer.map((value, index) => {
      let tabIndex = (columnsNeeded - index) * 2  // set tabIndex to even numbers by 2.
      let cell = <input key={index} data-id={index} type='text' className='answer'
        maxLength='1'
        ref={`input${tabIndex}`}
        value={value}
        tabIndex={tabIndex}
        onFocus={event => this.handleFocus(event)}
        onChange={event => this.handleChange(event)}
        onKeyDown={event => this.handleKeyPress(event)} />
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
}

Answer.propTypes = {
  answer: React.PropTypes.array.isRequired,
  equation: React.PropTypes.object.isRequired,
  onAnswerChanged: React.PropTypes.func.isRequired,
  bcRef: React.PropTypes.any
}
export default Answer
