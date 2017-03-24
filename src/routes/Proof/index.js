import { injectReducer } from '../../store/reducers'
import { equationReducer, formulaReducer, answerReducer } from './reducers'

export default (store) => ({
  path : 'proof',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Proof = require('./ProofContainer').default
      injectReducer(store, { key: 'equation', reducer: equationReducer })
      injectReducer(store, { key: 'formula', reducer: formulaReducer })
      injectReducer(store, { key: 'answer', reducer: answerReducer })
      /*  Return getComponent   */
      cb(null, Proof)

    /* Webpack named bundle   */
    }, 'proof')
  }
})
