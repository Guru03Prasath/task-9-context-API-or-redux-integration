// store.js
import { createstore } from 'redux';
import rootReducer from './reducers';

const store = createstore(rootReducer);

export default store;