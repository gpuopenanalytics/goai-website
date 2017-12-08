import React, { Component } from "react"
import CSSModules from 'react-css-modules'
import styles from './scss/app'

import Nav from "../components/Nav"
import Main from "../components/Main"
import Footer from "../components/Footer"


class App extends React.Component {
	render() {
		return (
			<main styleName="full-container">
				<Nav />
				<Main />
				<Footer />
			</main>
		);
	}
}

export default CSSModules(App, styles);
