import { all, call } from "redux-saga/effects";
import appSaga from "src/sagas/appSaga";

export default function* rootSaga() {
  yield all([call(appSaga)]);
}
