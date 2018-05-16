import React, { Component } from 'react';

// Styles
import styles from './CurrencyIndicator.css';

export class CurrencyIndicator extends React.Component {

    render() {
        return (
        	<div className={styles.currencyIndicator}>

        		<div className={styles.usdindicator}>
        			<div className={styles.currencyName}>USD</div>
        			<div className={styles.currencyAmount}>00</div>
        		</div>

        		<div className={styles.btcIndicator}>
        			<div className={styles.currencyName}>BTC</div>
        			<div className={styles.currencyAmount}>00000000</div>
        		</div>

        	</div>
        );
    }
}

export default CurrencyIndicator;