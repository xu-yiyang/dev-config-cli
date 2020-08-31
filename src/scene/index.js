import React, { Component } from 'react';
import { ConfigContext } from 'dc-utils';

const indexScene = (Components, componentsConfig) => {
  return class Index extends Component {
    render() {
      return (
        <ConfigContext.Provider value={componentsConfig}>
          <Components {...this.props} />
        </ConfigContext.Provider>
      );
    }
  }
}

const index = (Components, componentsConfig) => {
  return indexScene(Components,componentsConfig)
}

export default index