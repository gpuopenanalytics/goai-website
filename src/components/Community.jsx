import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/community";

import GOAIgroup from "../img/GOAI-group-com.png";
import GithubIcon from "mdi-react/githubCircleIcon";
import EmailIcon from "mdi-react/emailIcon";
import SlackIcon from "mdi-react/slackIcon";
import GoogleGroupIcon from "mdi-react/forumIcon";


class Community extends React.Component {
	
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
							<h1 styleName="title">The GOAI Community</h1>
						</div>
					</div>

					<div styleName="section-content-row-first">
						<div styleName="section-content-left">
							<div styleName="subheader">Join the Initiative </div>
							<p>
								There are many ways for a project, group,
								individual, or company to join the GPU Open Analytics
								Initiative (GOAI). Below are details. 
							</p>
							<p>
								<a href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" styleName="link"> 
									<SlackIcon styleName="link-icon" /> Just have some questions? Connect with us on our Slack team.
								</a>
							</p>
							<p>
								<a href="mailto:admin@gpuopenanalytics.com?Subject=GOAI" title="email" styleName="link">
									<EmailIcon styleName="link-icon" /> Or reach
									us at admin@gpuopenanalytics.com.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<img src={GOAIgroup} styleName="img-med" />
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Become an Adopter </div>
							<p>
								Adopters are projects, products or groups that
								are currently using or planning to use a GOAI
								project. For example, a database adding support for the GPU
								Data Frame can be a GOAI adopter.  
								Adopters should <a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link"> announce their plans on the
								public GOAI mailing list, </a> and we will add a link
								to their project on the GOAI website. 
							</p>
							<p>
								<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link">
									<GoogleGroupIcon styleName="link-icon" /> Let us know you're using GOAI projects.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<div styleName="subheader">Our Adopters</div>
								<ul styleName="list-compact">
									<li>Adopters pending...</li>
								</ul>
						</div>
					</div>

					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Become a Contributor </div>
							<p>
								Contributors are any projects, groups,
								or individuals that would like to help develop projects.
								Since the GOAI is based around open projects, 
								clone a repository on our GitHub channel and make a pull request.
								To help faciliate the process, let us know of your plans <a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link"> on our public Google Group. </a>
							</p>
							<p>
							<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link">
									<GoogleGroupIcon styleName="link-icon" /> Let us know that you want to contribute.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">
							<div styleName="subheader">Our Contributors</div>
								<ul styleName="list-compact">
									<li><a href="https://arrow.apache.org/" styleName="link"> Apache Arrow </a> </li>
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
								GOAI organization, including decision-making
								about expanding GOAI to future projects,
								planning for events and outreach, and generally
								promoting the GOAI mission. Members will meet
								periodically to discuss and vote on GOAI
								management issues. However, technical decisions
								are handled by the open source developer
								communities around individual GOAI projects and
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
									friendly attitude toward others in the GOAI
									community and be willing to mentor newer
									contributors and users.
								</li>
								<li>
									<strong>
										Collaborate with other GOAI members. 
									</strong>
									Although GOAI members may be business
									competitors, within the context of GOAI
									meetings and projects, members are expected
									to collaborate in good faith with other
									members.
								</li>
							</ul>
							<p>
								Existing members will vote on the admission of
								new members based on the above criteria. Note
								that adopters do not need to satisfy the above
								requirements. <a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link"> Apply 
								for memebership on our public Google Group. </a>
							</p>
							<p>
								<a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link">
									<GoogleGroupIcon styleName="link-icon" /> Announce your plans to join GOAI.
								</a>
							</p>

						</div>
						<div styleName="section-content-right">
							<div styleName="subheader">Our Members</div>
							<ul styleName="list-compact">
								<li><a href="https://anaconda.org/" styleName="link"> Anaconda </a> </li>
								<li><a href="https://blazingdb.com/" styleName="link"> BlazindDB </a> </li>
								<li><a href="https://gunrock.github.io/gunrock/doc/latest/index.html" styleName="link"> Gunrock of UC Davis </a> </li>
								<li><a href="https://www.graphistry.com/" styleName="link"> Graphistry </a> </li>
								<li><a href="https://www.mapd.com/" styleName="link"> MapD </a> </li>
								<li><a href="https://www.h2o.ai/" styleName="link"> H20.ai </a> </li>
							</ul>
						</div>
					</div>

				</section>
			</article>
		);
	}
}

export default CSSModules(Community, styles);
