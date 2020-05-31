import { all } from "redux-saga/effects";

import { appSaga } from "../modules/app/saga";

export default function* rootSaga() {
  yield all([
    appSaga()
  ]);
}
