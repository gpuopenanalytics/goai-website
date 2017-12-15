import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/community";

class Community extends React.Component {
	render() {
		return (
			<article styleName="full-content">
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">The GOAI Community</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Join the Initiative </div>
							<p styleName="pg">
								There are two primary ways for a project, group,
								or company to join the GPU Open Analytics
								Initiative.
							</p>
							<p styleName="pg">
								Just have some questions? <a href="https://join.slack.com/t/gpuoai/shared_invite/MjE0Njg5NDQ1MDQxLTE1MDA1MzQzNzgtODRkMTIxYTEzOA" styleName="link"> Connect with us on our Slack Team. </a>
							</p>
							<div styleName="subheader"> 1 Become an Adopter </div>
							<p styleName="pg">
								Adopters are projects, products or groups that
								are currently using or planning to use a GOAI
								project. A database adding support for the GPU
								DataFrame can be a GOAI adopter, for example.
								Adopters should announce their plans on the
								public GOAI mailing list and we will add a link
								to their project on the GOAI website. <a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link"> Let us know at our public Google Group. </a>
							</p>
							<div styleName="subheader"> 2 Become a Member </div>
							<p styleName="pg">
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
								requirements. <a href="https://groups.google.com/forum/#!forum/gpuopenanalytics" styleName="link"> Apply for memebership at our public Google Group. </a>
							</p>

						</div>

						<div styleName="section-content-right">
							<div styleName="subheader">Our Code Committers</div>
							<ul styleName="list">
								<li>Siu Kwan Lam</li>
								<li>Arno Candel</li>
								<li>Minggang Yu </li>
								<li>Stanley Seibert</li>
								<li>Jon Mckinney</li>
								<li>Bill Maimone</li>
								<li>Vinod Iyengar</li>
								<li>Todd Mostak</li>
							</ul>
							<div styleName="subheader">Our Members</div>
							<ul styleName="list">
								<li><a href="https://arrow.apache.org/" styleName="link"> Apache Arrow </a> </li>
								<li><a href="https://anaconda.org/" styleName="link"> Anaconda </a> </li>
								<li><a href="https://blazingdb.com/" styleName="link"> BlazindDB </a> </li>
								<li><a href="https://gunrock.github.io/gunrock/doc/latest/index.html" styleName="link"> Gunrock of UC Davis </a> </li>
								<li><a href="https://www.graphistry.com/" styleName="link"> Graphistry </a> </li>
								<li><a href="https://www.mapd.com/" styleName="link"> MapD </a> </li>
								<li><a href="https://www.h2o.ai/" styleName="link"> H20.ai </a> </li>
							</ul>
							<div styleName="subheader">Our Adopters</div>
							<ul styleName="list">
								<li>Adopters pending...</li>
							</ul>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(Community, styles);
