import React, { Component } from 'react';
import CurrencyIndicator from './CurrencyIndicator';

// Styles
import styles from './App.css';

export default class App extends Component {

    render() {
        return (
        	<div className={styles.container}>
        		<h3 className={styles.text}>Account Balance</h3>

        		<CurrencyIndicator />

        		<h2 className={styles.text}>Trade</h2>

        		<label className={styles.coinTrade}>USD</label>
        		<input type="text" placeholder='Enter your amount' />

        		<p className={styles.text}>For</p>

        		<label className={styles.coinTrade}>BTC</label>
        		<p className={styles.coinTrade}>Display Quote</p>

        		<input type="button" value="Trade" />

        	</div>
        );
    }
}