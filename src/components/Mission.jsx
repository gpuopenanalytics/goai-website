import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/mission";

import GoAigroup from "../img/GoAi-group-com.png";
import HexagonIcon from "mdi-react/arrowRightBoldHexagonOutlineIcon";
import SlackIcon from "mdi-react/slackIcon";
import EmailIcon from "mdi-react/emailIcon";

class Mission extends React.Component {
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
	
	/* so nav click always moves to top of page */
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<article styleName="full-content">
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">GoAi Mission</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Mission</div>
							<p>
								The GPU Open Analytics Initiative (GoAi) seeks
								to foster and develop open collaboration between
								GPU analytics projects and products to enable
								data scientists to efficiently combine the best
								tools for their workflows.
							</p>
							<div styleName="subheader">
								Why This is Necessary
							</div>
							<p>
								Most GPU-enabled software treats the GPU as an
								implementation detail to be hidden from their
								external interfaces. This is a sensible choice
								when only one project in a data science pipeline
								is GPU-accelerated, but it becomes less and less
								efficient as more applications and libraries in
								the pipeline gain GPU-accelerated
								implementations. The GoAi members recognized
								this difficulty, and are collaborating to create
								an open spec and set of tools for data exchange
								between libraries and applications without
								needing to move data off the GPU.
							</p>
							<p>
								<a href="#/community" onClick={() => {this.trackNav('NavClickTo', 'COMMUNITY')}} styleName="link" target="_blank">
									<HexagonIcon styleName="link-icon" /> Interested in becoming a member or joining
									in other ways? Learn more at our Community
									page.
								</a>
							</p>
							<p>
								<a href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" onClick={() => {this.trackLink('LinkClickTo', 'https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA')}} styleName="link" target="_blank">
									<SlackIcon styleName="link-icon" /> Have
									some questions? Ask us on our Slack team.
								</a>
							</p>
							<p>
								<a href="mailto:admin@gpuopenanalytics.com?Subject=GoAi" onClick={() => {this.trackLink('LinkClickTo', 'email')}} title="email" styleName="link" target="_blank">
									<EmailIcon styleName="link-icon" /> Or reach
									us at admin@gpuopenanalytics.com.
								</a>
							</p>
						</div>

						<div styleName="section-content-right">
							<img src={GoAigroup} styleName="img-med" />
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(Mission, styles);
