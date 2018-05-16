
export const UPDATE_BITCOIN_VALUE = 'UPDATE_BITCOIN_VALUE';

function fetch_bitcoinData(data) {

    return {
        type: UPDATE_BITCOIN_VALUE,
        data: data
    }
}

export function makeBitcoinDataCall(){

 return dispatch => {
 	fetchBitcoinDataAndUpdateStore(dispatch);
 }
}

function fetchBitcoinDataAndUpdateStore(dispatch) {
	return new Promise((resolve, reject) => {
		fetch('http://localhost:3001/btcusd')
		 .then (resp => resp.json())
		 .then ((resp) => {
		 	console.log(resp);
		 	dispatch(fetch_bitcoinData(resp));
		 	resolve();
		 })
		 .catch ((error) => {
		 	console.log(error);
		 	reject(error.toString());
		 });
	});
}

