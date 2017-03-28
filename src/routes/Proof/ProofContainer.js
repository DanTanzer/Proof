import { connect } from 'react-redux'
import { generateEquation, onAnswerChanged, onAnswerChanged2 } from './actions'
import Proof from './components/Proof'

const mapDispatchToProps = {
  generateEquation: () => generateEquation(),
  onAnswerChanged: (obj) => onAnswerChanged(obj),
  onAnswerChanged2
}

const mapStateToProps = (state) => ({
  equation: state.equation,
  formula: state.formula,
  valid: state.valid,
  answer: state.answer,
  answers: {
    input0: state.answers.input0,
    input1: state.answers.input1,
    input2: state.answers.input2,
    input3: state.answers.input3
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Proof)
