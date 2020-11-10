import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { throttle } from 'lodash';

import { Provider } from 'react-redux';
import { createStore} from 'redux';
import AllReducers from './Reducers/Index';

import { loadState, saveState} from './localStorage';

const persistedState = loadState();

const store = createStore(
  AllReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

function AppComponent(){
  return (
    <Provider store={store}>
    <App/>
  </Provider>
  )
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
