import React from 'react';
import { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';


class HomePage extends Component{	
	render() {
		return (	
			<div className = 'homepage'>
				<h1>This is a homepage, unclear what will be on it</h1>
				<NavLink to='/'><button className="mybutt">Back</button></NavLink>
				<NavLink to='/tool'><button className="mybutt">Go to Tool</button></NavLink>
			</div>
		)
	}
}

export default HomePage;