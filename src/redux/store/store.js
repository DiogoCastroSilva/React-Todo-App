import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

import thunk from "redux-thunk";
import { forbiddenWordsMiddleware } from '../middleware/forbiddenWordsMiddleware ';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)));

let currentValue;
function handleChange() {
    let previousValue = currentValue;
    currentValue = store.getState();

    if (previousValue !== currentValue) {
        localStorage.setItem('todoList', JSON.stringify(currentValue));
    }
}


const unsubscribe = store.subscribe(handleChange);

export default store;