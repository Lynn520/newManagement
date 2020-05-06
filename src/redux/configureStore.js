import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers ,compose} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import events from './modules/events/index';
import { createBrowserHistory } from 'history';
var history = createBrowserHistory();
const location = history.location;
import { routerMiddleware } from 'react-router-redux';
function configureStore() {
    const initialState = {};
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
  
    const composeEnhancers =
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ // eslint-disable-line
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;
  
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  
    const store = createStore(events, initialState, enhancers);
  
    // run sagaMiddleware
    let sagaTask = sagaMiddleware.run(rootSaga);

    console.log(module);
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
      module.hot.accept('./modules/events/index', () => {
        const nextRootReducer = require('./modules/events/index').default; // eslint-disable-line
        store.replaceReducer(nextRootReducer);
      });
  
      module.hot.accept('./sagas/rootSaga', () => {
        const nextRootSaga = require('./sagas/rootSaga').default
        sagaTask.cancel();
        sagaTask.done.then(() => {
          sagaTask = sagaMiddleware.run(nextRootSaga);
        });
      });
    }
  
    // store.close = () => store.dispatch(END);
    return store;
  }
  
  export default configureStore();

