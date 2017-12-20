import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/news";

import placeHolder from "../img/poly-place.jpg";
import TwitterIcon from "mdi-react/twitterIcon";

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsLocation: "",
			isLoaded: true,
			newsData: [
				{
					title: "GOAI Site Updated",
					date: "12.19.2017",
					img: "",
					description: "We have new style and content for our GOAI site",
					link: "http://www.gpuopenanalytics.com"
				},
			]
		};
	}

	getNews() {
		// tbd w/ fetch
	}

	buildNews() {
		if (this.state.isLoaded) {
			const newsCards = this.state.newsData.map((d, i) => {
				let image = d.img;
				if (d.img === "") {
					image = placeHolder;
				}
				return (
					<a href={d.link} key={"news" + i} styleName="news-card" title={d.link}>
						<div styleName="news-image">
							{" "}
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
			return (<span styleName="loading"> News Loading... </span>)
		}
	}

	render() {
		const newsList = this.buildNews();

		return (
			<article styleName="full-content">
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">GOAI News</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Latest News </div>
							<p>
								Keep up to date with events, blogs, and news around
								GOAI. 
							</p>
							<p>
								<a href="https://twitter.com/hashtag/GOAI?src=hash"styleName="link">
									<TwitterIcon styleName="link-icon" /> Want news faster? Look for our #GOAI hashtag on twitter.
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
