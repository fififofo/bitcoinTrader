import React, { Component } from 'react';
import CurrencyIndicator from './CurrencyIndicator';
import { connect } from 'react-redux';
import { makeBitcoinDataCall } from '../actions/action_bitcoin';
import { bindActionCreators } from 'redux';

// Styles
import styles from './App.css';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			usdValue: 156.12,
			btcValue: 0.00000000
		}
	}

	componentDidMount(){
		this.props.makeBitcoinDataCall(this.props.bitcoin);
		//makeBitcoinDataCall();
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
    	console.log('value prop ', this.props.bitcoin);
        return (
        	<div className={styles.container}>
        		<h3 className={styles.text}>Account Balance</h3>

        		{ this.renderCurrencyIndicator() }

        		<h2 className={styles.text}>Trade</h2>

        		<label className={styles.coinTrade}>USD</label>
        		<input type="text" placeholder='Enter your amount'/>

        		<p className={styles.text}>For</p>

        		<label className={styles.coinTrade}>BTC</label>
        		<p className={styles.coinTrade}>Display Quote</p>

        		<input type="button" value="Trade" onClick ={this.onTradeClick.bind(this)} />

        	</div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		bitcoin: state.bitcoin
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ makeBitcoinDataCall: makeBitcoinDataCall },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)