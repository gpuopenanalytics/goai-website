import React, { Component } from "react";
import CSSModules from "react-css-modules";
import Papa from "papaparse"
import FuzzySearch from "../components/FuzzySearch";
import styles from "./scss/news";

import TwitterIcon from "mdi-react/twitterIcon";

class News extends React.Component {

	// NOTE: update news from google drive and make sure publish to csv is set
	// https://docs.google.com/spreadsheets/d/1JCwXaeQGi_TjSgxSgfXZhr-rz4ZwpcKdYFCbdH2ntU0/edit#gid=0

	constructor(props) {
		super(props);
		this.state = {
			newsLocation: "https://docs.google.com/spreadsheets/d/e/2PACX-1vREYtIIJ4K-cu-qfNu_9pZUpmcLJ46evvpaowRkz-ut4y2qzVAzXgwtQWGiRFf0lpZ-ZekQ366Q6nqw/pub?output=csv", 
			isLoaded: false,
			newsData: [],
			search: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	/* so nav click always moves to top of page */
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	handleChange(event) {
    	this.setState({search: event.target.value});
  	}

	getNews() {

		const that = this;

		Papa.parse(this.state.newsLocation, {
			download: true,
			header: true,
			error: function(error) {
				console.log("Parse Error", error)
				
				that.setState({
					newsData: [],
					isLoaded: true
				});
			},
			complete: function(results) {
				console.log("Parse success", results);
				
				that.setState({
					newsData: results.data,
					isLoaded: true
				});
			}
		});

	}

	buildNews() {
		if (this.state.isLoaded) {
			return (<FuzzySearch searchTerm={this.state.search} listData={this.state.newsData} />)
		} else {
			// fetch news
			this.getNews();
			return (
				<div styleName="loading">
					Loading News ... <br />
					<div styleName="loading-box"> . </div>
				</div>
			);
		}
	}

	render() {

		const newsList = this.buildNews();

		return (
			<article styleName="full-content">
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">GOAi News</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						
						<div styleName="section-content-left">
							<div styleName="subheader">Latest News </div>
							<p>
								Keep up to date with events, blog posts, and news
								around GoAi.
							</p>
							<p>
								<a href="https://twitter.com/gpuoai"styleName="link" target="_blank">
									<TwitterIcon styleName="link-icon" /> Want
									news faster? Look for #GoAi on
									twitter.
								</a>
							</p>
						</div>
						
						<div styleName="section-content-right">
							<div styleName="subheader">Find News</div>
							<div styleName="field">
							  <div styleName="control">
							    <input styleName="input" value={this.state.search} onChange={this.handleChange} placeholder="enter search term" />
							  </div>
							</div>
							{newsList}
						</div>

					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(News, styles);
