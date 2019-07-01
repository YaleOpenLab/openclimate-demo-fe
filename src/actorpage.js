import React from 'react';
import { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import globe from './globe.png'

// &#x1F50D;

const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class ActorPage extends Component{	

	constructor(props, context) {
	  super(props, context);
	  this.state = { visibleState: false };
	  this.state = { visibleMenu: false };
	  this.state = { lastIndex: 'Alabama' }
	  this.toggleState = this.toggleState.bind(this);
	  this.toggleMenu = this.toggleMenu.bind(this);
	  // this.renderRow = this.renderRow.bind(this);
	  // this.stateList = states.map((state, i) => {
	  // 	return {
	  // 		id: i,
	  // 		stateName: state
	  // 	}
	  // });
	}
	toggleState(index) {
		if (index != this.state.lastIndex && this.state.visibleState == true) {this.setState({ visibleState: true });} 
		else {this.setState({ visibleState: !this.state.visibleState });}
		this.setState({ lastIndex: index});
	}
	toggleMenu() {
		this.setState({ visibleMenu: !this.state.visibleMenu });
	}
	// renderRow(item){	
	// 	return(
	// 	  <ListGroup.Item as="button" className="listButton" key={id} onClick={this.toggleState.bind(this, i)} >
	// 	  	<div style={{float: 'left'}}>{stateName}</div>
	// 	  	<div style={{float: 'right'}}><i className="fa fa-angle-down"></i></div>
	// 	  </ListGroup.Item>
	// 	)
	// }

	render() {
		return (	
			<div className = 'actorpage'>				
			<SlideMenu onclick={this.toggleMenu} menuVisibility={this.state.visibleMenu}/>
				<Navbar bg="light" expand="lg" className="myNav">
					<div class="menuBars" onClick={this.toggleMenu}>
					  <div class="bar1"></div>
					  <div class="bar2"></div>
					  <div class="bar3"></div>
					</div>
					<Form inline className='searchBar'>
			      <FormControl type="text" placeholder="SEARCH" className="mySearch"></FormControl>
			    </Form>
			    <Nav className="ml-auto">
				    <Nav.Link className="myPages" href="#explore">EXPLORE</Nav.Link>
	      		<Nav.Link className="myPages" href="#account">ACCOUNT</Nav.Link>
	      		<Nav.Link className="myPages" href="#trade">TRADE</Nav.Link>
      		</Nav>
				</Navbar>
				<div className="tabContainer">
					<NavLink to="#"><button className="myTabs">DASHBOARD</button></NavLink>
					<NavLink to="/actorpage"><button className="myTabs">VIEW</button></NavLink>
					<NavLink to="/review"><button className="myTabs">REVIEW</button></NavLink>
					<NavLink to="#"><button className="myTabs">MANAGE</button></NavLink>
				</div>
				<div className="earthCol"><div className="colHeader">EARTH</div></div>
				<div className="nationCol"><div className="colHeader">NATION STATE</div></div>
				<div className="subnatCol">
					<div className="colHeader">SUBNATIONAL</div>
					<div className="scroller">
						 <ListGroup variant="flush">
						 {states.map((state, i) =>
							  <ListGroup.Item as="button" className="listButton" onClick={this.toggleState.bind(this, state)} >
							  	<div style={{float: 'left'}}>{state}</div>
							  	<div style={{float: 'right'}}><i className="fa fa-angle-down"></i></div>
							  </ListGroup.Item>)}
						</ListGroup>
					</div>
				</div>
				<StateTab stateVisibility={this.state.visibleState} stateName={this.state.lastIndex} />
				<div className="assetsCol"><div className="colHeader">CLIMATE ACTION ASSETS</div></div>
			</div>
		)
	}
}

export default ActorPage;


class StateTab extends Component {
  render() {
    var visibility = "hide";
    if (this.props.stateVisibility) { visibility = "show"; }
    return (
      <div id="stateTab" className={visibility}>
      	<h1>{this.props.stateName}</h1>
      </div>
    );
  }
}

class SlideMenu extends Component {
  render() {
    var visibility = "hide";
    if (this.props.menuVisibility) { visibility = "show"; }
    return (
      <div id="slideMenu"  className={visibility}>
      	<div className="topMenu">
      		<button className="closeButton" onClick={this.props.onclick}><i className="fa fa-times" aria-hidden="true"></i></button>
      		<img id="globe" src={globe} alt="Globe" />
      	</div>
      	<div>
      	</div>
      </div>
    );
  }
}









