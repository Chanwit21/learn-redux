import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { countReducer } from './countReducer';

export default combineReducers({
  count: countReducer,
  cart: cartReducer,
});
