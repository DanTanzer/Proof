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
  handleKeyPress (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      let index = Number(event.target.tabIndex) + 1
      setTimeout(() => {
        this.props.bcRef.refs[`input${index}`] && this.props.bcRef.refs[`input${index}`].focus()
      }, 200)
      return
    }
    let results = ((/\d/).test(event.key))
    if (!results) {
      event.preventDefault()
    } else {
      // values set by html5 data-{anything} are found in dataset
      this.props.onAnswerChanged({ position: event.target.dataset.id, value:event.key })
      let index = Number(event.target.tabIndex) + 1
      setTimeout(() => {
        this.props.bcRef.refs[`input${index}`] && this.props.bcRef.refs[`input${index}`].focus()
      }, 200)
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
