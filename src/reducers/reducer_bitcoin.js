
import { UPDATE_BITCOIN_VALUE } from '../actions/action_bitcoin';

export default function( state = { data: {} }, action) {

	switch (action.type){

		case UPDATE_BITCOIN_VALUE:

		if (state instanceof Object){
			return Object.assign({}, state, { data: action.data })
		}
		break;

		case '@@redux/INIT':
			return Object.assign({}, state, { data : {} })

		default:
	}

	return state;

}