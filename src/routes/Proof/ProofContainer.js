import { connect } from 'react-redux'
import { generateEquation,
  onAnswerChanged,
  onDifficultyLevelChange,
  onMathTypeChange
} from './actions'
import Proof from './components/Proof'

const mapDispatchToProps = {
  generateEquation,
  onAnswerChanged,
  onDifficultyLevelChange,
  onMathTypeChange
}

const mapStateToProps = (state) => ({
  equation: state.equation,
  formula: state.formula,
  valid: state.valid,
  answer: state.answer,
  config: {
    difficultyLevel: state.config.difficultyLevel,
    mathType: state.config.mathType
  },
  answers: {
    input0: state.answers.input0,
    input1: state.answers.input1,
    input2: state.answers.input2,
    input3: state.answers.input3
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Proof)
