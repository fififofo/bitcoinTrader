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
			tradeValueInUsd: 0
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

		if (event.target.value === "") {
			event.target.value = 0;
		}

		this.setState({
			usdValue:
				this.state.usdValue -
				this.formatUsd(this.state.tradeValueInUsd),
			btcValue:
				this.state.btcValue +
				this.formatUsd(this.state.tradeValueInUsd) /
					this.props.bitcoin.last_price
		});
	}

	updateInputValue(event) {
		event.preventDefault();

		const tradeValue = event.target.value === "" ? "0" : event.target.value;

		this.setState({
			tradeValueInUsd: tradeValue
		});
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

		if(bitcoinPrice && this.state.tradeValueInUsd !== "0"){
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
				<input
					type="text"
					placeholder="Enter your amount"
					onChange={event => this.updateInputValue(event)}
				/>

				<p className={styles.text}>For</p>

				<label className={styles.coinTrade}>BTC</label>

				<p className={styles.coinTrade}>{this.getQuote()}</p>

				<input type="button" value="Trade" onClick={this.onTradeClick.bind(this)}/>
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
