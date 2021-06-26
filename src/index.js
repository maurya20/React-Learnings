import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./reducers";
import App from "./App";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(rootSaga);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
if (module.hot) {
  module.hot.accept(App);
}
