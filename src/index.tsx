// import 'react-app-polyfill/ie9';
// import 'core-js'
import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { history, createRootReducer, middlewareWithHashHistory, isDev, isTest } from 'dc-utils'
import { CreateAppRouter } from './dc-components'
import { routesConfig } from './router-config'
import { ThemeProvider, defaultTheme } from './dc-ui/styled'
import { defaultState } from './default-state'
import './global.less';
import * as serviceWorker from './serviceWorker'

import { vconsole } from './vconsole';
if (isDev || isTest) {
  vconsole(routesConfig, history)
}

let store: any = createStore(createRootReducer(defaultState), middlewareWithHashHistory)
render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={defaultTheme}>
        <CreateAppRouter routesConfig={routesConfig} />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
