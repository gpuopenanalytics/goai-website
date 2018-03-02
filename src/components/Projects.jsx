import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/projects";

import GOAigdf from "../img/GOAI-group-gdf.png";
import HexagonIcon from "mdi-react/arrowRightBoldHexagonOutlineIcon";
import GithubIcon from "mdi-react/githubCircleIcon";
import SlackIcon from "mdi-react/slackIcon";
import StackOverflowIcon from "mdi-react/stackOverflowIcon";
import NotebookIcon from "mdi-react/bookOpenPageVariantIcon";

class Projects extends React.Component {
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
							<h1 styleName="title"> GOAi Projects </h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Projects Overview</div>
							<p>
								Our projects are based around an open platform, which is the foundation of the GPU analytics ecosystem.
								Members will help guide the development of projects, but anyone can be a contributor. And because its open, 
								anyone can freely use the projects. 
							</p>
							<p>
								Currently, GoAi is supporting the GPU Data Frame
								project (GDF), which will enable tabular data to be
								directly exchanged between libraries and
								applications on the GPU. We expect other
								projects to be added in the future, such as a
								graph standard for the GDF.
							</p>
						</div>

						<div styleName="section-content-right">
							<div styleName="subheader">
								GPU Data Frame (GDF)
							</div>
							<p>
								The basic approach for the GPU Data Frame (GDF)
								is pretty simple: if applications and libraries
								agree on an in-memory data format for tabular
								data and associate metadata, then just a device
								pointer to the data structure need be exchanged.
								Additionally, the IPC mechanism built into the
								CUDA driver allows device pointers to be moved
								between processes.
							</p>
							<p>
								<img src={GOAigdf} styleName="img-full" />
							</p>
							<p>
								The GDF uses the <a href="https://arrow.apache.org/docs/memory_layout.html" onClick={() => {this.trackLink('LinkClickTo', 'https://arrow.apache.org/docs/memory_layout.html')}} styleName="link" target="_blank">Apache Arrow</a> columnar 
								format to represent data on the GPU. Some Arrow features are not yet supported.
							</p>
							<p>
								<a href="https://github.com/gpuopenanalytics/demo-docker/tree/master/notebook-demo-docker/demo/notebooks" onClick={() => {this.trackLink('LinkClickTo', 'https://github.com/gpuopenanalytics/demo-docker/tree/master/notebook-demo-docker/demo/notebooks')}} styleName="link" target="_blank">
									<NotebookIcon styleName="link-icon" /> Try our iPython Notebook Demos.
								</a>
							</p>
							<p>
								<a href="https://github.com/gpuopenanalytics/libgdf/wiki/Technical-Overview" onClick={() => {this.trackLink('LinkClickTo', 'https://github.com/gpuopenanalytics/libgdf/wiki/Technical-Overview')}}  styleName="link" target="_blank">
									<GithubIcon styleName="link-icon" /> Learn more at the Github Technical Overview.
								</a>
							</p>
							<p>
								<a href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" onClick={() => {this.trackLink('LinkClickTo', 'https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA')}} styleName="link" target="_blank">
									<SlackIcon styleName="link-icon" /> Ask questions on our Slack team.
								</a>
							</p>
							<p>
								<a href="https://stackoverflow.com/questions/tagged/gdf" onClick={() => {this.trackLink('LinkClickTo', 'https://stackoverflow.com/questions/tagged/gdf')}} styleName="link" target="_blank">
									<StackOverflowIcon styleName="link-icon" /> Or resort to StackOverflow.
								</a>
							</p>

							<br/><br/>
							<div styleName="subheader">
								GDF Graph
							</div>
							<p>
								In the planning stages.
							</p>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(Projects, styles);
