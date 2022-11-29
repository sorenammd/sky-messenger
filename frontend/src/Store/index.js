import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./Reducers";
import makeSagaMiddleware from "redux-saga";
import sagaApi from './saga';
const sagaMiddleware = makeSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagaApi);

export default store;