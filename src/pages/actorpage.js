import React from 'react';
import { Component } from 'react';
import '../App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import globe from '../static/globe.png';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import globeLarge from '../static/globeLarge.png';
import mapUSA from '../static/mapUSA.png';
import downArrow from '../static/downArrow.png';
import axios from "axios";

const API_URL = 'http://localhost:8001';
const username = 'brian';
const pwhash = '9a768ace36ff3d1771d5c145a544de3d68343b2e76093cb7b2a8ea89ac7f1a20c852e6fc1d71275b43abffefac381c5b906f55c3bcff4225353d02f1d3498758';
const country = 'USA';

//const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class ActorPage extends Component{	

	componentDidMount() {
	    const url = `${API_URL}/view/subnational?username=${username}&pwhash=${pwhash}`;
	    axios.get(url).then(response => response.data)
	    .then((data) => {
	    	console.log(data["USA"])	
	     	this.setState({ states: data["USA"] })
	    })
	   	const url_two = `${API_URL}/view/assets?username=${username}&pwhash=${pwhash}`;
	    axios.get(url_two).then(response => response.data)
	    .then((data) => {
	     	this.setState({ assets: data })
	    })
	}
	constructor(props, context) {
	  super(props, context);
	  this.state = { visibleState: false };
	  this.state = { visibleMenu: false};
	  this.state = { lastIndex: '' };
	  this.toggleState = this.toggleState.bind(this);
	  this.toggleMenu = this.toggleMenu.bind(this);
	  this.state = { states: [], assets: {} };
	}
	toggleState(index) {
		if (index != this.state.lastIndex && this.state.visibleState == true) {this.setState({ visibleState: true});} 
		else {this.setState({ visibleState: !this.state.visibleState});}
		this.setState({ lastIndex: index});
	}
	toggleMenu() {
		this.setState({ visibleMenu: !this.state.visibleMenu });
	}

	render() {
		return (	
			<div className = 'actorpage'>				
				<TopNav page="account_view"/>
				<div className="earthCol">
					<div className="colHeader">EARTH</div>
					<div className="colContent">
						<div className="box1">
							<span className="helper"><img id="globeLarge" src={globeLarge} alt="Globe" /></span>
						</div>
						<div className="box1">
							<div className="innerText">
								<span className="large">0.98</span><br/>
								<span className="small"><sup>o</sup>C warming relative to 1980</span><br/>
								<span className="large">411</span><br/>
								<span className="small">CO<sub>2</sub> ppm</span>
							</div>
						</div>
						<div className="box2">
							<div className="carbonTitle">CARBON BUDGET</div>
							<div className="infoBox">
								<span className="large">550</span><br/>
								<span className="small">Gt CO<sub>2</sub>e left based on a 1.5 target</span><br/>
								<span className="large">50</span><br/>
								<span className="small">GtCO<sub>2</sub>e/year</span><br/>
								<span className="yearRisk">15 YEAR RISK</span><br/>
								<span className="small">to budget depletion</span>
							</div>
						</div>
					</div>
				</div>
				<div className="nationCol">
					<div className="colHeader">NATION STATE</div>
					<div className="colContent">
						<div className="box1">
							<div className="stateTitle">United States</div>
							<span className="helper"><img id="mapUSA" src={mapUSA} alt="mapUSA" /></span>
						</div>
						<div className="box1">
							<div className="pledge">NDC - PLEDGE</div>
							<div className="pledgeInfo">
								<img id="arrow" src={downArrow} alt="arrow"/>
								<div className="large"><span>28%</span></div>
								<div className="small"><span>by 2025 relative to 2005</span></div>
							</div>
						</div>
						<div className="box2"></div>
					</div>
				</div>
				<div className="subnatCol">
					<StateTab assets={this.state.assets} stateVisibility={this.state.visibleState} stateName={this.state.lastIndex} tester={this.state.states}/>					
					<div className="colHeader">SUBNATIONAL</div>
					<div className="scroller">
						
						 {this.state.states.map((state) =>
							  <button className="listButton" onClick={this.toggleState.bind(this, state["Name"])}>
							  	<div style={{float: 'left'}}>{state["Name"]}</div>
							  	<div style={{float: 'right'}}><i className="fa fa-angle-down"></i></div>
							  </button>)}
						
					</div>
				</div>
				
				<div className="assetsCol"><div className="colHeader">CLIMATE ACTION ASSETS</div></div>
				<Footer/>
			</div>
		)
	}
}			


export default ActorPage;


class StateTab extends Component {
	constructor(props, context) {
		super(props, context);
	}
  	render() {
	    var visibility = "hidden";
	    if (this.props.stateVisibility) { visibility = "show"; }
	    if (this.props.stateVisibility == false) { visibility = "hide"; }
	    return (
			<div id="stateTab" className={visibility}>
				<h1>{this.props.stateName}</h1>	
				{(this.props.assets[this.props.stateName]) && 
					(this.props.assets[this.props.stateName].map((asset, index) =>
					<button>{asset["Name"]}</button>))}
			</div>
	    );
	}
}

