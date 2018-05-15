import React, { Component } from 'react';
import CurrencyIndicator from './CurrencyIndicator.js';

// Styles
import styles from './App.css';

export default class App extends Component {

    render() {
        return (
        	<div className={styles.container}>
        		<h3 className={styles.header}>Account Balance</h3>

        		<CurrencyIndicator />
        	</div>
        );
    }
}