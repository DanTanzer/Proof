import { connect } from 'react-redux'
import { generateEquation, onAnswerChanged } from './actions'
import Proof from './components/Proof'

const mapDispatchToProps = {
  generateEquation: () => generateEquation(),
  onAnswerChanged: (obj) => onAnswerChanged(obj)
}

const mapStateToProps = (state) => ({
  equation: state.equation,
  formula: state.formula,
  valid: state.valid,
  answer: state.answer
})

export default connect(mapStateToProps, mapDispatchToProps)(Proof)
