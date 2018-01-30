import { createAction } from "redux-actions";

export const signIn = createAction("user:signIn");
export const signOut = createAction("user:signOut");
export const set = createAction("user:set", (key, value) => ({ key, value }));
