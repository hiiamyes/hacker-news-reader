import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Spin from "antd/lib/spin";

import Content from "src/container/App/Content";
import Header from "src/container/App/Header";
import * as appActions from "src/redux/actions/appActions";
import { Container, InitLoader } from "./styles";

class App extends Component {
  componentWillMount() {
    this.props.appActions.init();
  }

  render() {
    const { isInited, isIniting } = this.props.appReducer;
    return (
      <Container>
        <Header />
        {isIniting && (
          <InitLoader>
            <Spin />
          </InitLoader>
        )}
        {isInited && <Content />}
      </Container>
    );
  }
}

export default connect(
  ({ appReducer }) => ({ appReducer }),
  dispatch => ({ appActions: bindActionCreators(appActions, dispatch) })
)(App);
