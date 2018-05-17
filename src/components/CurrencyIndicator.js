import React from 'react';

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

export default CurrencyIndicator;