import React, { Component } from "react"
import CSSModules from 'react-css-modules'
import styles from './scss/app'

import Nav from "../components/Nav"
import Main from "../components/Main"
import Footer from "../components/Footer"

import Image from "../img/h2o-ai-logo-small.png"

class App extends React.Component {
	render() {
		return (
			<div styleName="app-container">
				<Nav />
				<Main />
				<div styleName="columns">
					<div styleName="column">A</div>
					<div styleName="column">B</div>
					<div styleName="column">C</div>
					<div styleName="column"><img src={Image} /></div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default CSSModules(App, styles);
