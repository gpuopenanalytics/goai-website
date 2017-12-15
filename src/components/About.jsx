import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/about";

class About extends React.Component {
	render() {
		return (
			<article styleName="full-content">
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">
								About GOAI
							</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Mission </div>
							<p styleName="pg">
								The GPU Open Analytics Initiative (GOAI) seeks to foster open collaboration between
								GPU analytics projects and products to enable
								data scientists to efficiently combine the best
								tools for their workflows.
							</p>
						</div>

						<div styleName="section-content-right">
							<div styleName="subheader">
								Why This is Necessary
							</div>
							<p styleName="pg">
								Most GPU-enabled software treats the GPU as an
								implementation detail to be hidden from their
								external interfaces. This is a sensible choice
								when only one project in a data science pipeline
								is GPU-accelerated, but it becomes less and less
								efficient as more applications and libraries in
								the pipeline gain GPU-accelerated
								implementations. The GOAI members recognized
								this difficulty, and are collaborating to create
								an open spec and set of tools for data exchange
								between libraries and applications without
								needing to move data off the GPU.
							</p>
							<p styleName="pg">
								<a href="#/community" styleName="link">
									Interested in becoming a member or adopter? Learn more at our Community page.
								</a>
							</p>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(About, styles);
