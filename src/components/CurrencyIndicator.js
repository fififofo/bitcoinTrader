import React from 'react';
import PropTypes from "prop-types";

// Styles
import styles from './CurrencyIndicator.css';

export function CurrencyIndicator(props: Object): React.Component {

    return (
    	<div className={styles.currencyIndicator}>

    		<div className={styles.usdindicator}>
    			<div className={styles.currencyName}>USD</div>
    			<div className={styles.currencyAmount}>{props.usdValue}</div>
    		</div>

    		<div className={styles.btcIndicator}>
    			<div className={styles.currencyName}>BTC</div>
    			<div className={styles.currencyAmount}>{props.btcValue}</div>
    		</div>

    	</div>
    );

}

CurrencyIndicator.propTypes = {
    usdValue: PropTypes.string,
    btcValue: PropTypes.string

}

CurrencyIndicator.defaultProps = {
    usdValue: "0",
    btcValue: "0.00000000"

}

export default CurrencyIndicator;