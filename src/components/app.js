import React, { Component } from 'react';
import styles from './app.css';

export default class App extends Component {
    render() {
        return (
        	<div className={styles.test}>
        		Hello There
        		<span className={styles.childtest}>Just a test</span>
        	</div>
        );
    }
}