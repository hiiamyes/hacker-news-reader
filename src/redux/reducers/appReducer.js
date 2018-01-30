import { handleActions } from "redux-actions";

import set from "lodash/fp/set";
import cloneDeep from "lodash/fp/cloneDeep";
import compose from "lodash/fp/compose";

import {
  initRequest,
  initSuccess,
  initFail,
  loadMoreStoriesRequest,
  loadMoreStoriesSuccess,
  loadMoreStoriesFail,
  pushIntoStories
} from "src/redux/actions/appActions";

const defaultState = {
  isInited: false,
  isIniting: false,
  new500storyIds: [],
  stories: [],
  hasMoreStories: true,
  isMoreStoriesLoading: false,
  loadMoreStoriesBatchSize: 30,
  loadMoreStoriesScrollThresholdHeight: 100
};

const reducer = handleActions(
  {
    [initRequest.toString()](state) {
      return compose(set("isIniting", true), cloneDeep)(state);
    },
    [initSuccess.toString()](state, { payload: { new500storyIds } }) {
      return compose(
        set("new500storyIds", new500storyIds),
        set("isIniting", false),
        set("isInited", true),
        cloneDeep
      )(state);
    },
    [initFail.toString()](state) {
      return compose(set("isIniting", false), cloneDeep)(state);
    },
    [loadMoreStoriesRequest.toString()](state) {
      return compose(set("isMoreStoriesLoading", true), cloneDeep)(state);
    },
    [loadMoreStoriesSuccess.toString()](state) {
      return compose(set("isMoreStoriesLoading", false), cloneDeep)(state);
    },
    [loadMoreStoriesFail.toString()](state) {
      return compose(set("isMoreStoriesLoading", false), cloneDeep)(state);
    },
    [pushIntoStories.toString()](state, { payload: { story } }) {
      const newState = compose(cloneDeep)(state);
      newState.stories.push(story);
      return newState;
    }
  },
  defaultState
);

export default reducer;
