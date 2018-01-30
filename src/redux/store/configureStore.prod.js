import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "src/redux/reducers";
import sagas from "src/sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
}
