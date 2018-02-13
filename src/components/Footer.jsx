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
	render() {
		return (
			<footer styleName="foot">
				<div styleName="container">
					<div styleName="content">
						<Link styleName="item" to="/">GOAi</Link>
						<Link styleName="item" to="/MISSION">MISSION</Link>
						<Link styleName="item" to="/COMMUNITY">COMMUNITY</Link>
						<Link styleName="item" to="/PROJECTS">PROJECTS</Link>
						<Link styleName="item" to="/NEWS">NEWS</Link>
						<br/>
						<a styleName="item" href="https://twitter.com/gpuoai" title="twitter" target="_blank"><TwitterIcon styleName="icon" /></a>
						<a styleName="item" href="https://stackoverflow.com/questions/tagged/goai" title="stack overflow" target="_blank"><StackOverflowIcon styleName="icon" /></a>
						<a styleName="item" href="https://github.com/gpuopenanalytics" title="github" target="_blank"><GithubIcon styleName="icon" /></a>
						<a styleName="item" href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" title="slack" target="_blank"><SlackIcon styleName="icon"/></a>
						<a styleName="item" href="https://groups.google.com/forum/#!forum/gpuopenanalytics" title="google groups" target="_blank"><GoogleGroupIcon styleName="icon"/></a>
						<a styleName="item" href="mailto:admin@gpuopenanalytics.com?Subject=GOAI" title="email" target="_blank"><EmailIcon styleName="icon"/></a>
					</div>
				</div>
			</footer>
		);
	}
}

export default CSSModules(Footer, styles);
