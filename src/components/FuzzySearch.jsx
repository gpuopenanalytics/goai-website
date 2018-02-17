import React, { Component } from "react";
import CSSModules from "react-css-modules";
import Fuse from "fuse.js";
import styles from "./scss/fuzzysearch";

import placeHolder from "../img/poly-place.jpg";

class FuzzySearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		}

	}

	componentDidMount(props) {
		this.setState({
			mounted: true
		})

		const data = this.props.listData;

		// http://fusejs.io/ fuzzy search
		var options = {
		  shouldSort: false,
		  tokenize: false,
		  matchAllTokens: false,
		  findAllMatches: true,
		  threshold: 0.5,
		  location: 0,
		  distance: 100,
		  maxPatternLength: 24,
		  minMatchCharLength: 2,
		  keys: [
		    "title",
		    "tags"
		  ]
		};

		// add list to fuse
		this.fuse = new Fuse(data, options);

	}

	buildNews(searchTerm) {
		// filter list with search term
		const list = this.fuse.search(searchTerm)

		const newsCards = list.map((d, i) => {
			let image = d.img;
			if (d.img === "") {
				image = placeHolder;
			}
			return (
				<a href={d.link} key={"news" + i} styleName="news-card" title={d.link} target="_blank">
					<div styleName="news-image">
						<img src={image} styleName="news-img-src" />
					</div>
					<div styleName="news-title"> {d.title} </div>
					<div styleName="news-tag"> {d.tags} </div>
					<div styleName="news-date"> {d.date} </div>
				</a>
			);
		});

		return newsCards;

	}

	render() {

		let newsList = null;
		// show all if no term entered
		let searchTerm = this.props.searchTerm;
		if(searchTerm === ""){
			searchTerm = " ";
		}
		if(this.state.mounted){
			newsList = this.buildNews(searchTerm);
		}

		return (<div> {newsList} </div>)
	}
}

export default CSSModules(FuzzySearch, styles);

