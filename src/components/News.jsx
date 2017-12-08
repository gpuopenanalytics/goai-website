import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./scss/news";

import placeHolder from "../img/poly-place.jpg";

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsLocation: "",
			isLoaded: true,
			newsData: [
				{
					title: "NVIDIA TITAN V",
					date: "12.08.2007",
					img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/TITAN/TITANV/nvidia-titan-v-gallery-b-641-u.jpg",
					description:"NVIDIA’s supercomputing GPU architecture is now here for your PC, and fueling breakthroughs in every industry.",
					link: "https://www.nvidia.com/en-us/titan/titan-v/"
				},
				{
					title: "Generic Title",
					date: "12.08.2007",
					img: "",
					description: "Small description goes here",
					link: "#"
				},
				{
					title: "Generic Title That Is Very Long And Will Run Over",
					date: "12.08.2000",
					img: "",
					description: "Small description goes here. And here.",
					link: "#"
				}
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
			<article>
				<section styleName="section-container-bg">
					<div styleName="section-header-row">
						<div styleName="section-header-left">
							<h1 styleName="title">GOAI News</h1>
						</div>
					</div>
					<div styleName="section-content-row">
						<div styleName="section-content-left">
							<div styleName="subheader">Latest News </div>
							<p styleName="pg">
								Keep up to date with the latest events around
								GOAI. Want updates even faster?{" "}
								<a
									href="https://twitter.com/hashtag/GOAI?src=hash"
									styleName="link"
								>
									Look for our #GOAI hashtag on twitter.
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
