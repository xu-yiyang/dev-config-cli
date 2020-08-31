/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ConfigContext, addAbilityOnEnter } from 'dc-utils'
import { styled, Button } from 'dc-ui';
import selectors from './external-data-selector'
import { prepareSceneData, actions } from './external-data-action'
import LogoImg from 'assets/logo.png'

const Wrap = styled.div`
  text-align: center;
  p {
    color: #000;
  }
  img {
    width: 100px;
  }
`

class Home extends Component {
  static contextType = ConfigContext;

  render() {
    console.log(this.props);
    return (
      <Wrap>
        <br/>
        <p>{this.context.text}</p>
        <br/>
        <img src={LogoImg} alt=""/>
        <br/>
        <div dangerouslySetInnerHTML={{ __html:this.props?.demo_get?.text}}></div>
        <br/>
        <Button onClick={() => {
          this.props.updata_demo_get()
        }}>更新</Button>
      </Wrap>
    )
  }
}

export default connect(
  selectors,
  actions
)(
  addAbilityOnEnter(
    prepareSceneData()
  )(Home)
)