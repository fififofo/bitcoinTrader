import React, { Component } from 'react';
import CurrencyIndicator from './CurrencyIndicator';

// Styles
import styles from './App.css';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			usdValue: 156.12,
			btcValue: 0.00000000
		}
	}

	renderCurrencyIndicator(){

		const currencyProps = {
			usdValue: this.state.usdValue,
			btcValue: this.state.btcValue
		}

		return <CurrencyIndicator {...currencyProps}/>
	}

	onTradeClick(event){
		console.log('Button pressed!');
	}

    render() {
        return (
        	<div className={styles.container}>
        		<h3 className={styles.text}>Account Balance</h3>

        		{ this.renderCurrencyIndicator() }

        		<h2 className={styles.text}>Trade</h2>

        		<label className={styles.coinTrade}>USD</label>
        		<input type="text" placeholder='Enter your amount' />

        		<p className={styles.text}>For</p>

        		<label className={styles.coinTrade}>BTC</label>
        		<p className={styles.coinTrade}>Display Quote</p>

        		<input type="button" value="Trade" onClick ={this.onTradeClick.bind(this)} />

        	</div>
        );
    }
}