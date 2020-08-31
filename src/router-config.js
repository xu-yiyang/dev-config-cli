// import Loadable from 'react-loadable'
import { AsyncLoading } from './utils'

let routesConfig = [
  {
    path: '/HelloWorld',
    component: AsyncLoading({
      componentName: 'HelloWorld',
      componentConfig: 'HelloWorld',
    }),
  },
]

export {routesConfig}
