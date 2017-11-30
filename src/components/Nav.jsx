import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
	render() {
		return (
		    <nav>
		      <ul>
		        <li><Link to='/'>Home</Link></li>
		        <li><Link to='/About'>About</Link></li>
		      </ul>
		    </nav>
		);
	}
}

export default Nav;
