import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer2.js/index.js'
// import thunk from 'redux-thunk'
import mySagas from './mySaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))


const store = createStore(reducer,enhancer);
sagaMiddleware.run(mySagas);

export default store