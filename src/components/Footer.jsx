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
						<Link styleName="item" to="/">goai</Link>
						<Link styleName="item" to="/about">about</Link>
						<Link styleName="item" to="/community">community</Link>
						<Link styleName="item" to="/projects">projects</Link>
						<Link styleName="item" to="/news">news</Link>
						<a styleName="item" href="https://twitter.com/hashtag/GOAI?src=hash" title="twitter"><TwitterIcon styleName="icon" /></a>
						<a styleName="item" href="https://stackoverflow.com/questions/tagged/goai" title="stack overflow"><StackOverflowIcon styleName="icon" /></a>
						<a styleName="item" href="https://github.com/gpuopenanalytics" title="github"><GithubIcon styleName="icon" /></a>
						<a styleName="item" href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" title="slack"><SlackIcon styleName="icon"/></a>
						<a styleName="item" href="https://groups.google.com/forum/#!forum/gpuopenanalytics" title="google groups"><GoogleGroupIcon styleName="icon"/></a>
						<a styleName="item" href="mailto:admin@gpuopenanalytics.com?Subject=GOAI" title="email"><EmailIcon styleName="icon"/></a>
					</div>
				</div>
			</footer>
		);
	}
}

export default CSSModules(Footer, styles);
