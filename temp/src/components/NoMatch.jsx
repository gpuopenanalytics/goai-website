import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/nomatch";

class NoMatch extends React.Component {

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
							<h1 styleName="title">Page Not Found</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">(」ﾟﾛﾟ)｣ <br/> Cant find the page, sorry. </div>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(NoMatch, styles);
