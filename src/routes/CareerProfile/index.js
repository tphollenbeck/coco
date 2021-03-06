import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'careers(/:career)',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const CareerProfile = require('./containers/CareerProfile').default
      const reducer = require('./modules/CareerProfile').default

      injectReducer(store, { key: 'careerProfile', reducer })

      /*  Return getComponent   */
      cb(null, CareerProfile)

      /* Webpack named bundle   */
    }, 'careers')
  }
})
