import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import firebaseApp from "firebase/app";
import "firebase/database";

import "react-virtualized/styles.css";
import "antd/lib/spin/style/css";
import "src/index.css";

import App from "src/container/App";
import configureStore from "src/redux/store/configureStore";
import registerServiceWorker from "src/registerServiceWorker";

const store = configureStore();

firebaseApp.initializeApp({
  databaseURL: "https://hacker-news.firebaseio.com"
});

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("src/container/App", () => {
    render(App);
  });
}

registerServiceWorker();
