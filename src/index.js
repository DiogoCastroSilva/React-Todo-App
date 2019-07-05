import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

import App from './App';
import * as serviceWorker from './serviceWorker';

let currentValue;
function handleChange() {
    let previousValue = currentValue;
    currentValue = store.getState();

    if (previousValue !== currentValue) {
        localStorage.setItem('todoList', JSON.stringify(currentValue));
    }
}

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(handleChange);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
