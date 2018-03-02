import React, { Component } from "react";
import { Link } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "./scss/footer";

import EmailIcon from "mdi-react/emailIcon";
import GoogleGroupIcon from "mdi-react/forumIcon";
import TwitterIcon from "mdi-react/twitterIcon";
import GithubIcon from "mdi-react/githubCircleIcon";
import SlackIcon from "mdi-react/slackIcon";
import StackOverflowIcon from "mdi-react/stackOverflowIcon"

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.trackNav = this.trackNav.bind(this)
		this.trackLink = this.trackLink.bind(this)

	}

	trackNav(title, path) {
	//https://developers.google.com/analytics/devguides/collection/gtagjs/pages
		gtag('config', 'UA-114387697-1', {
		  'page_title' : title,
		  'page_path': path
		});

	}

	trackLink(action, link) {
	//https://developers.google.com/analytics/devguides/collection/gtagjs/events
		gtag('event', action, {
		  'event_category' : 'clicked',
		  'event_label' : link
		});

	}


	render() {
		return (
			<footer styleName="foot">
				<div styleName="container">
					<div styleName="content">
						<Link styleName="item" to="/" onClick={() => {this.trackNav('NavClickTo', 'HOME')}} >GOAi</Link>
						<Link styleName="item" to="/MISSION" onClick={() => {this.trackNav('NavClickTo', 'MISSION')}} >MISSION</Link>
						<Link styleName="item" to="/COMMUNITY" onClick={() => {this.trackNav('NavClickTo', 'COMMUNITY')}} >COMMUNITY</Link>
						<Link styleName="item" to="/PROJECTS" onClick={() => {this.trackNav('NavClickTo', 'PROJECTS')}} >PROJECTS</Link>
						<Link styleName="item" to="/NEWS" onClick={() => {this.trackNav('NavClickTo', 'NEWS')}} >NEWS</Link>
						<br/>
						<a styleName="item" href="https://twitter.com/gpuoai" onClick={() => {this.trackLink('LinkClickTo', 'https://twitter.com/gpuoai')}} title="twitter" target="_blank"><TwitterIcon styleName="icon" /></a>
						<a styleName="item" href="https://stackoverflow.com/questions/tagged/goai" onClick={() => {this.trackLink('LinkClickTo', 'https://stackoverflow.com/questions/tagged/goai')}}  title="stack overflow" target="_blank"><StackOverflowIcon styleName="icon" /></a>
						<a styleName="item" href="https://github.com/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://github.com/gpuopenanalytics')}}  title="github" target="_blank"><GithubIcon styleName="icon" /></a>
						<a styleName="item" href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" onClick={() => {this.trackLink('LinkClickTo', 'https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA')}}  title="slack" target="_blank"><SlackIcon styleName="icon"/></a>
						<a styleName="item" href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}}  title="google groups" target="_blank"><GoogleGroupIcon styleName="icon"/></a>
						<a styleName="item" href="mailto:admin@gpuopenanalytics.com?Subject=GOAI" onClick={() => {this.trackLink('LinkClickTo', 'email')}}  title="email" target="_blank"><EmailIcon styleName="icon"/></a>
					</div>
				</div>
			</footer>
		);
	}
}

export default CSSModules(Footer, styles);
