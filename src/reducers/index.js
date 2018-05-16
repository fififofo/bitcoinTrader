import { combineReducers } from 'redux';
import BitcoinReducer from './reducer_bitcoin';

const rootReducer = combineReducers({
  bitcoin: BitcoinReducer
});

export default rootReducer;
