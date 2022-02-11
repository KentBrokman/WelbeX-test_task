import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import thunkMiddleware from 'redux-thunk';




declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store