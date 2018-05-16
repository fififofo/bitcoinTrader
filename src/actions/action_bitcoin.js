
//import axios from 'axios';

export const UPDATE_BITCOIN_VALUE = 'UPDATE_BITCOIN_VALUE';

function fetch_bitcoinData(data) {

    return {
        type: UPDATE_BITCOIN_VALUE,
        data: data
    }
}

export function makeBitcoinDataCall(){

// axios.get(`https://api.bitfinex.com/v1/pubticker/btcusd`)
// 	.then(res => {
// 		console.log(res.data);
// 		return fetch_bitcoinData(res.data);
//   	})
//   	.catch( (error) => {
//   		console.log( error.toString() );
//   	})

// For now faking the response
const data = {
		"mid":"8191.05",
		"bid":"8191.0",
		"ask":"8191.1",
		"last_price":"8191.1",
		"low":"8100.0",
		"high":"8855.7",
		"volume":"31814.952987439992",
		"timestamp":"1526448360.937606"
	}

	return fetch_bitcoinData(data);
}
