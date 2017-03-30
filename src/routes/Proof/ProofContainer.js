import { connect } from 'react-redux'
import { generateEquation,
  onAnswerChanged,
  onDifficultyLevelChange,
  onOperatorChange,
  onBCChanged
} from './actions'
import Proof from './components/Proof'

const mapDispatchToProps = {
  generateEquation,
  onBCChanged,
  onAnswerChanged,
  onDifficultyLevelChange,
  onOperatorChange
}

const mapStateToProps = (state) => ({
  equation: state.equation,
  formula: state.formula,
  valid: state.valid,
  answer: state.answer,
  bc: state.bc,
  config: {
    difficultyLevel: state.config.difficultyLevel,
    operator: state.config.operator
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Proof)
