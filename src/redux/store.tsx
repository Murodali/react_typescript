import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [reduxThunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))



export default store;