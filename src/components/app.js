import React, { Component } from "react";
import CurrencyIndicator from "./CurrencyIndicator";
import { connect } from "react-redux";
import { makeBitcoinDataCall } from "../actions/action_bitcoin";
import { bindActionCreators } from "redux";

// Styles
import styles from "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			usdValue: 156.12,
			btcValue: 0.0,
			tradeValueInUsd: "0",
			allowed: true
		};
	}

	componentDidMount() {
		this.props.makeBitcoinDataCall(this.props.bitcoin);
	}

	renderCurrencyIndicator() {
		const currencyProps = {
			usdValue: this.formatUsd(this.state.usdValue, true),
			btcValue: this.formatBtc(this.state.btcValue, true)
		};

		return <CurrencyIndicator {...currencyProps} />;
	}

	onTradeClick(event) {
		event.preventDefault();

		this.setState({
			usdValue: this.state.usdValue - this.formatUsd(this.state.tradeValueInUsd),
			btcValue: this.state.btcValue + this.formatUsd(this.state.tradeValueInUsd) / this.props.bitcoin.last_price,
			tradeValueInUsd: "0"
		});

		// Reset USD amount display
		this.refs.amountInput.value = "";
	}

	displayWarning(){
		let warningText = "";

		if (!this.state.allowed){
			warningText = "**Not enough funds";
		}

		return warningText;
	}

	updateInputValue(event) {
		event.preventDefault();

		let usdInputValue = event.target.value;
		let tradeValue = "";


		if(usdInputValue === ""){
			tradeValue = "0";
			this.setState({
				tradeValueInUsd: "0"
			});

		} else {
			// Remove all non-valid characters
			usdInputValue = usdInputValue.replace(/[^0-9.]/g,'');
			tradeValue = usdInputValue;
			event.target.value = usdInputValue;
		}

		if( usdInputValue.match(/^[0-9]+(\.[0-9]{1,2})?$/gm)){

			if (tradeValue <= this.state.usdValue){
				this.setState({
					tradeValueInUsd: tradeValue,
					allowed: true
				});

			} else {
				this.setState({
					allowed: false
				})
			}
		}
	}

	formatBtc(numberString, stringFormat = false) {
		if (stringFormat) {
			return parseFloat(numberString).toFixed(8);
		}

		return parseFloat(parseFloat(numberString).toFixed(8));
	}

	formatUsd(numberString, stringFormat = false) {
		if (stringFormat) {
			return parseFloat(Math.round(numberString * 100) / 100).toFixed(2);
		}

		return parseFloat(
			parseFloat(Math.round(numberString * 100) / 100).toFixed(2)
		);
	}

	getQuote(){
		const bitcoinPrice = this.props.bitcoin.last_price;
		let quote = 'Display Quote';

		if(bitcoinPrice && this.state.tradeValueInUsd !== "0" && this.state.allowed){
			const usdToBtc = this.formatBtc( ( this.state.tradeValueInUsd / bitcoinPrice), true );
			const currentBtc = this.formatUsd(this.state.tradeValueInUsd, true );
			quote = `${currentBtc} USD = ${usdToBtc} BTC`
		}

		return quote;
	}

	render() {
		const bitcoinPrice = this.props.bitcoin.last_price;
		const bitcoinInUs = bitcoinPrice? this.formatUsd(bitcoinPrice, true) : "0.00";

		return (
			<div className={styles.container}>
				<h3 className={styles.text}>Account Balance</h3>

				{this.renderCurrencyIndicator()}

				<h2 className={styles.text}>Trade</h2>

				<label className={styles.coinTrade}>USD</label>
				<input type="text" ref="amountInput" placeholder="Enter your amount" onChange={event => this.updateInputValue(event)}/>

				<p className={styles.text}>For</p>

				<label className={styles.coinTrade}>BTC</label>

				<p className={styles.coinTrade}>{this.getQuote()}</p>

				<p className={styles.warning}>{this.displayWarning()}</p>
				<input type="button" value="Trade" disabled={!this.state.allowed} onClick={this.onTradeClick.bind(this)}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		bitcoin: state.bitcoin.data
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ makeBitcoinDataCall: makeBitcoinDataCall },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
