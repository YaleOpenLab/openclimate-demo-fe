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
import Footer from '../components/Layout/Footer/Footer';
import globeLarge from '../static/globeLarge.png';
import mapUSA from '../static/mapUSA.png';
import downArrow from '../static/downArrow.png';
import assetImg from '../static/assetImg.png';
import axios from "axios";

const API_URL = 'http://localhost:8001';
const username = 'brian';
const pwhash = '9a768ace36ff3d1771d5c145a544de3d68343b2e76093cb7b2a8ea89ac7f1a20c852e6fc1d71275b43abffefac381c5b906f55c3bcff4225353d02f1d3498758';
const country = 'USA';

class ActorPage extends Component{	

	componentDidMount() {
	    const url = `${API_URL}/view/subnational?username=${username}&pwhash=${pwhash}`;
	    axios.get(url).then(response => response.data)
	    .then((data) => {
	    	console.log(data["USA"])	
	     	this.setState({ states: data["states_by_country"]["USA"] })
	    })
	   	const url_two = `${API_URL}/view/assets?username=${username}&pwhash=${pwhash}`;
	    axios.get(url_two).then(response => response.data)
	    .then((data) => {
	     	this.setState({ assets: data })
	    })
	}
	constructor(props, context) {
	  super(props, context);
	  this.state = { visibleState: false, visibleAsset: false };
	  this.state = { visibleMenu: false};
	  this.state = { lastIndex: '' };
	  this.state = { lastAsset: ''};
	  this.state = { assetInfo: {} };
	  this.toggleState = this.toggleState.bind(this);
	  this.toggleAsset = this.toggleAsset.bind(this);
	  this.toggleMenu = this.toggleMenu.bind(this);
	  this.state = { states: [], assets: {} };
	}
	toggleState(index) {
		if (index != this.state.lastIndex && this.state.visibleState == true) {this.setState({ visibleState: true});} 
		else {this.setState({ visibleState: !this.state.visibleState});}
		if (this.state.visibleAsset && this.state.visibleState){this.setState({ visibleAsset: false}); console.log("wtf")}
		this.setState({ lastIndex: index});
	}
	toggleAsset(asset, assetInfo) {
		if (asset != this.state.lastAsset && this.state.visibleAsset == true) {this.setState({ visibleAsset: true});} 
		else {this.setState({ visibleAsset: !this.state.visibleAsset});}
		this.setState({ lastAsset: asset});
		this.setState({ assetInfo: assetInfo});
	}
	toggleMenu() {
		this.setState({ visibleMenu: !this.state.visibleMenu });
	}

	render() {
		return (	
			<div className="actorpage">				
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
					<div className="colHeader">SUBNATIONAL</div>
					<div className="scroller">
						{this.state.states.map((state) =>
							<button className="listButton" onClick={this.toggleState.bind(this, state["Name"])}>
								<div style={{float: 'left'}}>{state["Name"]}</div>
							  	<div style={{float: 'right'}}><i className="fa fa-angle-down"></i></div>
							</button>)}
					</div>
				</div>					
				<StateTab assets={this.state.assets} stateVisibility={this.state.visibleState} stateName={this.state.lastIndex} toggleAsset={this.toggleAsset}/>					
				<div className="assetsCol"><div className="colHeader">CLIMATE ACTION ASSETS</div></div>
				<AssetTab asset={this.state.assetInfo} assetVisibility={this.state.visibleAsset} assetName={this.state.lastAsset}/>
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
				<div className="aboveAssets">
					<div>
						{this.props.stateName}
					</div>
				</div>	
				{(this.props.assets[this.props.stateName]) && 
					(this.props.assets[this.props.stateName].map((asset, index) =>
					<button className="listButton" onClick={this.props.toggleAsset.bind(this, asset["Name"], asset)}>
						<img src={assetImg}/>
						<div>
							{asset["Name"]}<br/>
							<p>{asset["Type"]}</p>
						</div>
						<div style={{float: 'right'}}><i className="fa fa-angle-right"></i></div>
					</button>))}
			</div>
	    );
	}
}

class AssetTab extends Component {
	constructor(props, context) {
		super(props, context);
	}
  	render() {
  		// console.log(this.props.asset)
	    var visibility = "hidden";
	    if (this.props.assetVisibility) { visibility = "show"; }
	    if (this.props.assetVisibility == false) { visibility = "hide"; }
	    return (
			<div id="assetTab" className={visibility}>
				{this.props.asset &&
				<div>
					<img id="assetImg" src={assetImg}/>
					<div className="assetTitle">
						{this.props.assetName}
						<br/>
						<p className="assetTitle2">{this.props.asset["Type"]}</p>
					</div>
					<hr/>
					<div className="assetInfo">
						<div className="redTitle">CLIMATE ACTIONS SCOPES & METRICS:</div>	
						{this.props.asset["ActionType"] &&				
						<div>
							{this.props.asset["ActionType"].map((type) => <div className="actionBubble">{type}</div> )}
						</div>}
						<div className="updateDate">
							LAST UPDATED: August 2019 
							<p style={{display: 'inline', float: 'right', color: '#037367'}}>&#9432;  No active issues</p>
						</div>
						<div className="boxes">
							<div className="dataBox" id="1">
								<span className="size1">{this.props.asset["Capacity"]}</span> <br/> 
								<span className="size2"> MW </span><br/>
								<span className="size3"> Capacity </span>
							</div>
							{this.props.asset["Reports"] && 
							<>
							<div className="dataBox" id="2">
								<span className="size1"> {this.props.asset["Reports"][0]["MitigationOutcomes"]}</span> <br/>
								<span className="size2"> {this.props.asset["Reports"][0]["Year"]}</span> <br/>
								<span className="size3">Mitigation Outcomes</span>
							</div>
							<div className="dataBox" id="3">
								<span className="size1"> {this.props.asset["Reports"][0]["GWh"]}</span> <br/> 
								<span className="size2"> Gwh/year</span> 
							</div>
							</>}
						</div>
					</div>
				</div>}
			</div>
	    );
	}
}

