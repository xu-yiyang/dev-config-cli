import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

class CreateAppRouter extends React.Component {
  genRouteComponent = route => {
    const { path, component: RouteComp } = route;
    return(
      <Route
        key={path}
        path={path}
        render={props => {
          return <RouteComp {...props} />
        }}
      />
    );
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Redirect exact from='/' to='/' />
          {this.props.routesConfig.map((route) => (this.genRouteComponent(route)))}
        </Switch>
      </React.Fragment>
    )
  }
}

export {
  CreateAppRouter
}
