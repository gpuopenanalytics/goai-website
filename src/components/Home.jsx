import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/home";

// Icons from https://github.com/levrik/mdi-react
import GithubIcon from "mdi-react/githubCircleIcon";
import SlackIcon from "mdi-react/slackIcon";
import GoogleGroupIcon from "mdi-react/forumIcon";
import MatrixIcon from "mdi-react/matrixIcon";
import SourceForkIcon from "mdi-react/sourceForkIcon";
import SourceMergeIcon from "mdi-react/sourceMergeIcon";
import SourcePullIcon from "mdi-react/sourcePullIcon";
import HexagonIcon from "mdi-react/arrowRightBoldHexagonOutlineIcon";
import QuoteOpenIcon from "mdi-react/formatQuoteOpenIcon";
import QuoteCloseIcon from "mdi-react/formatQuoteCloseIcon";

import GOAIlogo from "../img/GOAI-logo.png";


import anacondalogo from "../img/anaconda_Logo.jpg";
import arrowlogo from "../img/apacheArrow_logo.jpg";
import blazingdblogo from "../img/blazingDB_logo.jpg";
import graphistrylogo from "../img/graphistry_logo.jpg";
import gunrocklogo from "../img/gunrock_logo.jpg";
import h2ologo from "../img/h2oai_logo.jpg";
import mapdlogo from "../img/mapd_logo.jpg";

class Home extends React.Component {
	
	/* so nav click always moves to top of page */
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<article styleName="full-content">
				<section styleName="hero-body">
					<div styleName="container">
						
						<div styleName="hero-logo-row">
							<div styleName="hero-tile">
								<img src={GOAIlogo} styleName="hero-logo" />
							</div>
						</div>

						<div styleName="action-row">
							<a href="https://github.com/gpuopenanalytics/demo-docker" styleName="action-col">
								<div styleName="action-header">
									<GithubIcon styleName="btn-icon-large" />
								</div>
								<div styleName="action-footer">
									jump right into our <br/> coding demo on github
								</div>
							</a>

							<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="action-col" >
								<div styleName="action-header">
									<GoogleGroupIcon styleName="btn-icon-large" />
								</div>
								<div styleName="action-footer">
									reach out to the community <br/> on google groups
								</div>
							</a>

						</div>

					</div>
				</section>

				<section styleName="section-container">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">Mission </h1>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<p>
								Our mission is to build a platform that allows data scientist to explore data, train machine learning algorithms, and build applications while primarily staying on the GPU
							</p>
							<p>
								<a href="#/about" styleName="link">
									<HexagonIcon styleName="link-icon" /> Learn more in our About
									section.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<p styleName="large-quote">
								<QuoteOpenIcon styleName="quote-icon" />
									We want to make accelerated, end-to-end GPU analytics easy.
								<QuoteCloseIcon styleName="quote-icon" />
							</p>
						</div>
					</div>
				</section>

				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">Community </h1>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<p>
								We are just starting with GOAI. Help make our community stronger by participating in the inititive.
							</p>
							<p>
								<a href="#/community" styleName="link">
									<HexagonIcon styleName="link-icon" /> Learn more in our Community
									section.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<p styleName="large-quote">
								<QuoteOpenIcon styleName="quote-icon" />
									Learn, try, and collaborate with us.
								<QuoteCloseIcon styleName="quote-icon" />
							</p>
						</div>
					</div>

					<div styleName="member-row">
						<div styleName="member-row-item">
							<a href="https://arrow.apache.org/">
								<img src={arrowlogo} styleName="member-logo" />
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://anaconda.org/">
								<img src={anacondalogo} styleName="member-logo" />
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://blazingdb.com/">
								<img src={blazingdblogo} styleName="member-logo" />
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://gunrock.github.io/gunrock/doc/latest/index.html">
								<img src={gunrocklogo} styleName="member-logo" />
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://www.graphistry.com/">
								<img src={graphistrylogo} styleName="member-logo" />
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://www.mapd.com/">
								<img src={mapdlogo} styleName="member-logo" />
							</a>
						</div>
						<div styleName="member-row-item">
							<a href="https://www.h2o.ai/">
								<img src={h2ologo} styleName="member-logo" />
							</a>
						</div>
					</div>
					
				</section>

				<section styleName="section-container">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">Projects </h1>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<p styleName="large-quote">
								<QuoteOpenIcon styleName="quote-icon" />
									We are developing our platform to be open, accessible, and available for broad adoption.
								<QuoteCloseIcon styleName="quote-icon" />
							</p>
						</div>
						<div styleName="section-content-right">
							<p>
								Our projects are based around an open platform, which is the foundation of the GPU analytics ecosystem.
								Members will help guide the development of projects, but anyone can be a contributor. And because its open, anyone can freely use the projects. 
							</p>
							<p>
								<a href="#/projects" styleName="link">
									<HexagonIcon styleName="link-icon" /> Learn more in our Projects
									section.
								</a>
							</p>
						</div>
					</div>
				</section>

			</article>
		);
	}
}

export default CSSModules(Home, styles);
