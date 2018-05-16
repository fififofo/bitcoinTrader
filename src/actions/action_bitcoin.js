
import axios from 'axios';

export const UPDATE_BITCOIN_VALUE = 'UPDATE_BITCOIN_VALUE';

export function fetchBitcoinData(){

	const header = {
		'Access-Control-Allow-Origin': '*'
	}

	axios({
		method:'get',
		url: 'https://api.bitfinex.com/v1/pubticker/btcusd',
		header: header
	})
	.then(res => {
			console.log( "Here is the response", res.json() );
    		return res.json();

  	})
  	.catch( (error) => {
  		console.log( error.toString() );
  	})

}
