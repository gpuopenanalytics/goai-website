import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/home";

// Icons from https://github.com/levrik/mdi-react
import MatrixIcon from "mdi-react/matrixIcon";
import GithubIcon from "mdi-react/githubCircleIcon";
import SlackIcon from "mdi-react/slackIcon";
import GroupPlusIcon from "mdi-react/accountMultiplePlusIcon";
import GoogleGroupIcon from "mdi-react/forumIcon";
import SourceForkIcon from "mdi-react/sourceForkIcon";
import SourceMergeIcon from "mdi-react/sourceMergeIcon";
import SourcePullIcon from "mdi-react/sourcePullIcon";

import GOAIlogo from "../img/GOAI-logo-v1.png";
import anacondalogo from "../img/anaconda_Logo.jpg";
import arrowlogo from "../img/apacheArrow_logo.jpg";
import blazingdblogo from "../img/blazingDB_logo.jpg";
import graphistrylogo from "../img/graphistry_logo.jpg";
import gunrocklogo from "../img/gunrock_logo.jpg";
import h2ologo from "../img/h2oai_logo.jpg";
import mapdlogo from "../img/mapd_logo.jpg";

class Home extends React.Component {
	render() {
		return (
			<article>
				<section styleName="hero-body">
					<div styleName="container">
						<div styleName="hero-logo-row">
							<div styleName="hero-tile">
								<img src={GOAIlogo} styleName="hero-logo" />
							</div>
						</div>

						<div styleName="hero-action-row">
							<div styleName="action-col">
								<a href="#/community">
									<div styleName="action-tile">
										<div styleName="action-header">
											<GroupPlusIcon styleName="btn-icon-large" />
										</div>
										<div styleName="action-footer">
											join goai
										</div>
									</div>
								</a>
							</div>

							<div styleName="action-col">
								<a href="https://github.com/gpuopenanalytics">
									<div styleName="action-tile">
										<div styleName="action-header">
											<SourcePullIcon styleName="btn-icon-large" />
										</div>
										<div styleName="action-footer">
											adopt goai
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section styleName="section-container">

					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title"> About GOAI </h1>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<span>
								Anaconda, H2O.ai, and MapD Technologies have
								announced the formation of the GPU Open
								Analytics Initiative (GOAI) to create common
								data frameworks enabling developers and
								statistical researchers to accelerate data
								science on GPUs.
								<br/> <br/>
								GOAI will foster the development of a data
								science ecosystem on GPUs by allowing resident
								applications to interchange data seamlessly and
								efficiently.
							</span>
							<p>
								<a href="#/about" styleName="link">
									 Learn more in our About section.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<div styleName="content-fill">
								EFFICIENT DATA PROCESSING GRAPHIC (5-10x, 25-100x)
							</div>
						</div>
					</div>

				</section>

				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title"> GOAI Projects </h1>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="content-fill">
								DATA FRAME GRAPHIC
							</div>
						</div>
						<div styleName="section-content-right">
							<div styleName="subheader">
								Inital Project: GPU Data Frame
							</div>
							<span>
								Our first project: an open source GPU Data Frame
								(GDF) with a corresponding Python API. The GPU
								Data Frame is a common API that enables
								efficient interchange of data between processes
								running on the GPU. End-to-end computation on
								the GPU avoids transfers back to the CPU or
								copying of in-memory data reducing compute time
								and cost for high-performance analytics common
								in artificial intelligence workloads.
								<br/><br/>
								Users of the MapD Core database can output the
								results of a SQL query into the GPU Data Frame,
								which then can be manipulated by the Anaconda
								NumPy-like Python API or used as input into the
								H2O suite of machine learning algorithms without
								additional data manipulation.
							</span>
							<p>
								<a href="#/projects" styleName="link">
									 Learn more in our Projects section.
								</a>
							</p>
						</div>
					</div>

				</section>

				<section styleName="section-container">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title"> GOAI Community </h1>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<span>
								We are just starting with GOAI. Help build our
								community by becoming an adopter, member,
								committer, or by getting in touch.
							</span>
							<p>
								<a href="#/community" styleName="link">
									Learn more in our Community section.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<a href="#/community">
								<div styleName="action-tile">
									<div styleName="action-header">
										<GroupPlusIcon styleName="btn-icon" />
									</div>
									<div styleName="action-footer">
										become a member
									</div>
								</div>
							</a>
							<a href="https://github.com/gpuopenanalytics">
								<div styleName="action-tile">
									<div styleName="action-header">
										<SourcePullIcon styleName="btn-icon" />
									</div>
									<div styleName="action-footer">
										become an adopter
									</div>
								</div>
							</a>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							
							<a href="https://github.com/gpuopenanalytics/libgdf/wiki/Technical-Overview">
								<div styleName="action-tile">
									<div styleName="action-header">
										<MatrixIcon styleName="btn-icon" />
									</div>
									<div styleName="action-footer">
										learn more about gdf
									</div>
								</div>
							</a>

							<a href="https://github.com/gpuopenanalytics">
								<div styleName="action-tile">
									<div styleName="action-header">
										<SourceMergeIcon styleName="btn-icon" />
									</div>
									<div styleName="action-footer">
										help develop
									</div>
								</div>
							</a>
						</div>

						<div styleName="section-content-right">

							<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics">
								<div styleName="action-tile">
									<div styleName="action-header">
										<GoogleGroupIcon styleName="btn-icon" />
									</div>
									<div styleName="action-footer">
										join google groups
									</div>
								</div>
							</a>

							<a href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA">
								<div styleName="action-tile">
									<div styleName="action-header">
										<SlackIcon styleName="btn-icon" />
									</div>
									<div styleName="action-footer">
										chat on slack teams
									</div>
								</div>
							</a>
						</div>
					</div>

					<div styleName="member-row">
						<div styleName="member-row-item">
							<a href="https://arrow.apache.org/">
								<img src={arrowlogo} styleName="member-logo"/>
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://anaconda.org/">
								<img src={anacondalogo} styleName="member-logo"/>
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://blazingdb.com/">
								<img src={blazingdblogo} styleName="member-logo"/>
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://gunrock.github.io/gunrock/doc/latest/index.html">
								<img src={gunrocklogo} styleName="member-logo"/>
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://www.graphistry.com/">
								<img src={graphistrylogo} styleName="member-logo"/>
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://www.mapd.com/">
								<img src={mapdlogo} styleName="member-logo"/>
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://www.h2o.ai/">
								<img src={h2ologo} styleName="member-logo"/>
							</a>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(Home, styles);
