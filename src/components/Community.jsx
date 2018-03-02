import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/community";

import GOAigroup from "../img/GOAI-group-com.png";
import GithubIcon from "mdi-react/githubCircleIcon";
import EmailIcon from "mdi-react/emailIcon";
import SlackIcon from "mdi-react/slackIcon";
import GoogleGroupIcon from "mdi-react/forumIcon";


class Community extends React.Component {
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
							<h1 styleName="title">GOAi Community</h1>
						</div>
					</div>

					<div styleName="section-content-row-first">
						<div styleName="section-content-left">
							<div styleName="subheader">Adopt, Contribute, Join!</div>
							<p>
								There are many ways for a project, group,
								individual, or company to join the GPU Open Analytics
								Initiative (GoAi). Below are details.
							</p>
							<p>
								If you have any questions, please reach out.
							</p>
							<p>
								<a href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" onClick={() => {this.trackLink('LinkClickTo', 'https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA')}} styleName="link" target="_blank"> 
									<SlackIcon styleName="link-icon" /> Slack Team
								</a>
							</p>
							<p>
								<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}} styleName="link" target="_blank">
									<GoogleGroupIcon styleName="link-icon" /> Google Groups
								</a>
							</p>
							<p>
								<a href="mailto:admin@gpuopenanalytics.com?Subject=GoAi" title="email" onClick={() => {this.trackLink('LinkClickTo', 'email')}} styleName="link" target="_blank">
									<EmailIcon styleName="link-icon" /> admin@gpuopenanalytics.com 
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<img src={GOAigroup} styleName="img-full" />
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Become an Adopter </div>
							<p>
								Adopters are projects, products or groups that
								are currently using or planning to use a GoAi
								project. For example, a database adding support for the GPU
								Data Frame can be a GoAi adopter.  
								Adopters should  <a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}} styleName="link" target="_blank">announce their plans on our
								public Google Groups, </a> and we will add a link
								to their project on the GoAi website. 
							</p>
							<p>
								<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}} styleName="link" target="_blank">
									<GoogleGroupIcon styleName="link-icon" /> Let us know you're using GoAi projects.
								</a>
							</p>
						</div>
						<div styleName="section-content-right-space">

							<div styleName="subheader"> </div>
								<ul styleName="list-compact">
									<li></li>
								</ul>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Become a Contributor </div>
							<p>
								Contributors are any projects, groups,
								or individuals that would like to help develop projects.
								Since the GoAi is based around open projects, 
								clone a repository on our GitHub channel and make a pull request.
								To help faciliate the process, <a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}} styleName="link" target="_blank">let us know of your plans on our public Google Groups. </a>
							</p>
							<p>
							<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}} styleName="link" target="_blank">
									<GoogleGroupIcon styleName="link-icon" /> Let us know that you want to contribute.
								</a>
							</p>
						</div>
						<div styleName="section-content-right-space">
							<div styleName="subheader">Our Contributors</div>
								<ul styleName="list-compact">
									<li><a href="https://arrow.apache.org/" onClick={() => {this.trackLink('LinkClickTo', 'https://arrow.apache.org/')}} styleName="link" target="_blank"> Apache Arrow </a> </li>
									<li><a href="http://www.simantex.com/" onClick={() => {this.trackLink('LinkClickTo', 'http://www.simantex.com/')}} styleName="link" target="_blank"> Simantex </a> </li>
									<li>Siu Kwan Lam</li>
									<li>Arno Candel</li>
									<li>Minggang Yu </li>
									<li>Stanley Seibert</li>
									<li>Jon Mckinney</li>
									<li>Bill Maimone</li>
									<li>Vinod Iyengar</li>
									<li>Todd Mostak</li>
								</ul>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Become a Member </div>
							<p>
								A member is responsible for stewardship of the
								GoAi organization, including decision-making
								about expanding GoAi to future projects,
								planning for events and outreach, and generally
								promoting the GoAi mission. Members will meet
								periodically to discuss and vote on GoAi
								management issues. However, technical decisions
								are handled by the open source developer
								communities around individual GoAi projects and
								<strong> membership is not a requirement for technical
								contributions</strong>. An organization can request
								membership from the existing members. Members
								are expected to:
							</p>

							<ul styleName="list">
								<li>
									<strong>
										Have demonstrated contributions toward
										open GPU analytics. 
									</strong> 
									This can be in the form of open source code
									contributions, community involvement,
									education, etc. (Members do not have to be
									exclusively open source, of course.)
								</li>
								<li>
									<strong>
										Engage constructively with the
										community.
									</strong>
									Members should have a constructive and
									friendly attitude toward others in the GoAi
									community and be willing to mentor newer
									contributors and users.
								</li>
								<li>
									<strong>
										Collaborate with other GoAi members. 
									</strong>
									Although GoAi members may be business
									competitors, within the context of GoAi
									meetings and projects, members are expected
									to collaborate in good faith with other
									members.
								</li>
							</ul>
							<p>
								<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}} styleName="link" target="_blank">Apply 
								for memebership on our public Google Groups. </a>
								Existing members will vote on the admission of
								new members based on the above criteria. Note
								that adopters do not need to satisfy the above
								requirements.
							</p>
							<p>
								<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" onClick={() => {this.trackLink('LinkClickTo', 'https://groups.google.com/forum/#!forum/gpuopenanalytics')}} styleName="link" target="_blank">
									<GoogleGroupIcon styleName="link-icon" /> Announce your plans to join GoAi.
								</a>
							</p>

						</div>
						<div styleName="section-content-right-space">
							<div styleName="subheader">Our Members</div>
							<ul styleName="list-compact">
								<li><a href="https://anaconda.org/" onClick={() => {this.trackLink('LinkClickTo', 'https://anaconda.org/')}} styleName="link" target="_blank"> Anaconda </a> </li>
								<li><a href="https://blazingdb.com/" onClick={() => {this.trackLink('LinkClickTo', 'https://blazingdb.com/')}} styleName="link" target="_blank"> BlazindDB </a> </li>
								<li><a href="https://gunrock.github.io/" onClick={() => {this.trackLink('LinkClickTo', 'https://gunrock.github.io/')}} styleName="link" target="_blank"> Gunrock of UC Davis </a> </li>
								<li><a href="https://www.graphistry.com/" onClick={() => {this.trackLink('LinkClickTo', 'https://www.graphistry.com/')}} styleName="link" target="_blank"> Graphistry </a> </li>
								<li><a href="https://www.mapd.com/" onClick={() => {this.trackLink('LinkClickTo', 'https://www.mapd.com/')}} styleName="link" target="_blank"> MapD </a> </li>
								<li><a href="https://www.h2o.ai/" onClick={() => {this.trackLink('LinkClickTo', 'https://www.h2o.ai/')}} styleName="link" target="_blank"> H20.ai </a> </li>
							</ul>
						</div>
					</div>

				</section>
			</article>
		);
	}
}

export default CSSModules(Community, styles);
