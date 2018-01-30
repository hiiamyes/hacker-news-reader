import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducers from "src/redux/reducers";
import sagas from "src/sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  sagaMiddleware.run(sagas);
  return store;
}
