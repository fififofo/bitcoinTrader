import React, { Component } from 'react';

// Styles
import styles from './CurrencyIndicator.css';

export class CurrencyIndicator extends React.Component {

    render() {
        return (
        	<div>
        		<div> USD:</div>
        		<div> BTC:</div>
        	</div>
        );
    }
}

export default CurrencyIndicator;