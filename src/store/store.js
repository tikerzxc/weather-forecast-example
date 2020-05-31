import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducer";
import rootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
