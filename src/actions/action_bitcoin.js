
import axios from 'axios';

export const UPDATE_BITCOIN_VALUE = 'UPDATE_BITCOIN_VALUE';

export function fetchBitcoinData(){

axios.get(`https://api.bitfinex.com/v1/pubticker/btcusd`)
	.then(res => {
		console.log(res.data);
		return res.data;
  	})
  	.catch( (error) => {
  		console.log( error.toString() );
  	})
}

