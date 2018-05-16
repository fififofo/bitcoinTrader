import { combineReducers } from 'redux';
import bitcoinReducer from './reducer_bitcoin';

const rootReducer = combineReducers({
  bitcoin: bitcoinReducer
});

export default rootReducer;
