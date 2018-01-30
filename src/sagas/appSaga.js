import firebaseApp from "firebase/app";
import { put, takeLatest, select } from "redux-saga/effects";
import {
  init,
  initRequest,
  initSuccess,
  initFail,
  loadMoreStories,
  loadMoreStoriesRequest,
  loadMoreStoriesSuccess,
  loadMoreStoriesFail,
  pushIntoStories
} from "src/redux/actions/appActions";
export default function* appSaga() {
  yield takeLatest(init.toString(), handleInit);
  yield takeLatest(loadMoreStories.toString(), handleLoadMoreStories);
}

function* handleInit(action) {
  try {
    yield put({ type: initRequest.toString() });
    const new500storyIds = (yield firebaseApp
      .database()
      .ref("/v0/newstories")
      .once("value")).val();
    yield put({
      type: initSuccess.toString(),
      payload: {
        new500storyIds
      }
    });
  } catch (error) {
    yield put({ type: initFail.toString(), payload: { error } });
  }
}

function* handleLoadMoreStories(action) {
  try {
    yield put({ type: loadMoreStoriesRequest.toString() });
    const { new500storyIds, loadMoreStoriesBatchSize } = yield select(
      state => state.appReducer
    );
    for (let i = 0; i < loadMoreStoriesBatchSize; i++) {
      const story = (yield firebaseApp
        .database()
        .ref(`/v0/item/${new500storyIds[i]}`)
        .once("value")).val();
      yield put({ type: pushIntoStories.toString(), payload: { story } });
    }
    yield put({ type: loadMoreStoriesSuccess.toString() });
  } catch (error) {
    yield put({ type: loadMoreStoriesFail.toString() });
  }
}
