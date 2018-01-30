import { createAction } from "redux-actions";

export const init = createAction("app:init");
export const initRequest = createAction("app:initRequest");
export const initSuccess = createAction("app:initSuccess");
export const initFail = createAction("app:initFail");

export const loadMoreStories = createAction("app:loadMoreStories");
export const loadMoreStoriesRequest = createAction(
  "app:loadMoreStoriesRequest"
);
export const loadMoreStoriesSuccess = createAction(
  "app:loadMoreStoriesSuccess"
);
export const loadMoreStoriesFail = createAction("app:loadMoreStoriesFail");

export const pushIntoStories = createAction("app:pushIntoStories");
