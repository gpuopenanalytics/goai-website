import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/news";

import placeHolder from "../img/poly-place.jpg";
import TwitterIcon from "mdi-react/twitterIcon";

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsLocation: "./data/news.json",
			isLoaded: false,
			newsData: []
		};
	}

	/* so nav click always moves to top of page */
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	getNews() {
		function status(response) {
			if (response.status >= 200 && response.status < 300) {
				return Promise.resolve(response);
			} else {
				return Promise.reject(new Error(response.statusText));
			}
		}

		function json(response) {
			return response.json();
		}

		const api = this.state.newsLocation;
		fetch(api, { method: "get" })
			.then(status)
			.then(json)
			.then((data) => {
				console.log("Request succeeded with JSON response", data);
				
				this.setState({
					newsData: data.news,
					isLoaded: true
				});

			})
			.catch((error) => {
				console.log("Request failed", error);
				this.setState({
					newsData: [],
					isLoaded: true
				});
			});
	}

	buildNews() {
		if (this.state.isLoaded) {
			const newsCards = this.state.newsData.map((d, i) => {
				let image = d.img;
				if (d.img === "") {
					image = placeHolder;
				}
				return (
					<a href={d.link} key={"news" + i} styleName="news-card"title={d.link} >
						<div styleName="news-image">
							<img src={image} styleName="news-img-src" />
						</div>
						<div styleName="news-title"> {d.title} </div>
						<div styleName="news-desc"> {d.description} </div>
						<div styleName="news-date"> {d.date} </div>
					</a>
				);
			});
			return newsCards;
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
								around GOAi.
							</p>
							<p>
								<a href="https://twitter.com/hashtag/GOAi?src=hash"styleName="link" target="_blank">
									<TwitterIcon styleName="link-icon" /> Want
									news faster? Look for #GOAi on
									twitter.
								</a>
							</p>
						</div>
						<div styleName="section-content-right">{newsList}</div>
					</div>
				</section>
			</article>
		);
	}
}

export default CSSModules(News, styles);
