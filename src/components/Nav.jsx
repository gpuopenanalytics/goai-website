import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "./scss/nav";

import GOAIlogoSmall from "../img/GOAI-square.png";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
						isToggleOn: false,
						navItems: ['HOME','MISSION','PROJECTS','COMMUNITY', 'NEWS'] // change nav items here
					}
		this.handleClick = this.handleClick.bind(this)
		this.trackNav = this.trackNav.bind(this)
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}))
	}

	trackNav(title, path) {
	//https://developers.google.com/analytics/devguides/collection/gtagjs/pages
		gtag('config', 'UA-114387697-1', {
		  'page_title' : title,
		  'page_path': path
		});
	}

	render() {

		// click functionality for touch menu button
		// https://bulma.io/documentation/components/navbar/
		let navbarMenu = 'navbar-menu'
		let navbarBurger = 'button-navbar-burger'
		if(this.state.isToggleOn){
			 navbarMenu = 'navbar-menu-is-active'
			 navbarBurger = 'button-navbar-burger-is-active'
		}

		// https://reacttraining.com/react-router/web/api/NavLink
		const navBarItems = this.state.navItems.map((item,i) => {
				return (<NavLink key={'NavLink'+i} styleName='navbar-item' activeStyle={{borderBottom: '2px solid rgba(129, 226, 102, 1)'}} to={'/'+item} onClick={() => {this.trackNav('NavClickTo', item)} }> {item} </NavLink>)
		})

		return (
			<nav styleName="navbar">
				<div styleName="navbar-brand">
					<a styleName="navbar-logo" href="http://gpuopenanalytics.com/"><img src={GOAIlogoSmall} styleName="navbar-logo-img"/> GOAi </a>

					<button styleName={navbarBurger} onClick={this.handleClick}>
						<span />
						<span />
						<span />
					</button>
				</div>

				<div styleName={navbarMenu}>
					<div styleName="navbar-end">
						{navBarItems}
					</div>
				</div>
			</nav>
		);
	}
}

export default CSSModules(Nav, styles);
