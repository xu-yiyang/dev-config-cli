import { createStructuredSelector } from 'reselect'

const demo_get = state => {
  return state.externalData.getIn(['demo_get'])?.toJS()
}

export default createStructuredSelector({
  demo_get
})
