import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Mission from "../components/Mission";
import Projects from "../components/Projects";
import Community from "../components/Community";
import Announcements from "../components/Announcements";
import News from "../components/News";
import NoMatch from "../components/NoMatch";

class Main extends React.Component {

	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/mission" component={Mission} />
				<Route path="/projects" component={Projects} />
				<Route path="/community" component={Community} />
				<Route path="/announcements" component={Announcements} />
				<Route path="/news" component={News} />
				<Route component={NoMatch} />
			</Switch>
		);
	}
}

export default Main;
