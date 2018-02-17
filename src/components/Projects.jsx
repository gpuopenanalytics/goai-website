import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/projects";

import GOAigdf from "../img/GOAI-group-gdf.png";
import HexagonIcon from "mdi-react/arrowRightBoldHexagonOutlineIcon";
import GithubIcon from "mdi-react/githubCircleIcon";
import SlackIcon from "mdi-react/slackIcon";
import StackOverflowIcon from "mdi-react/stackOverflowIcon";


class Projects extends React.Component {
	
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
								The GDF uses the <a href="https://arrow.apache.org/docs/memory_layout.html" styleName="link" target="_blank">Apache Arrow</a> columnar 
								format to represent data on the GPU. Some Arrow features are not yet supported.
							</p>
							<p>
								<a href="https://github.com/gpuopenanalytics/libgdf/wiki/Technical-Overview" styleName="link" target="_blank">
									<GithubIcon styleName="link-icon" /> Learn more at the Github Technical Overview.
								</a>
							</p>
							<p>
								<a href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" styleName="link" target="_blank">
									<SlackIcon styleName="link-icon" /> Ask questions on our Slack team.
								</a>
							</p>
							<p>
								<a href="https://stackoverflow.com/questions/tagged/gdf" styleName="link" target="_blank">
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
