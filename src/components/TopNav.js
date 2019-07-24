import React from 'react';
import { Component } from 'react';
import './TopNav.css'
import { NavLink, Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from "axios";
import globe from '../static/globe.png'; 
import SlideMenu from './SlideMenu';

class TopNav extends Component {
	constructor(props, context) {
        super(props, context);
        this.state = { visibleMenu: false, visibleLogin: false };
        this.toggleMenu = this.toggleMenu.bind(this); 
        this.toggleLogin = this.toggleLogin.bind(this); 
        if(this.props.page == "explore") (this.state = { explore: 'active' })
       	if(this.props.page == "account") (this.state = { account: 'active' })
       	if(this.props.page == "trade") (this.state = { trade: 'active' })
	}
	toggleMenu() {
        this.setState({ visibleMenu: !this.state.visibleMenu });
    }
    toggleLogin(){
    	this.setState({ visibleLogin: !this.state.visibleLogin});
    }
    render() {
    	return (
    		<div>
				<SlideMenu onclick={this.toggleMenu} menuVisibility={this.state.visibleMenu}/>
				<div className="myNavbar">
					<NavLink to='/trade'><button id="myNavButton" className={this.state.trade} >TRADE</button></NavLink>
					<NavLink to='/actorpage'><button id="myNavButton" className={this.state.account} >ACCOUNT</button></NavLink>
					<NavLink to='/homepage'><button id="myNavButton" className={this.state.explore} >EXPLORE</button></NavLink>
					<Form inline className='searchBar'>
						<FormControl type="text" placeholder="SEARCH" className="mySearch"></FormControl>
					</Form>
					<div class="menuBars" onClick={this.toggleMenu}>
						<div class="bar1"></div>
						<div class="bar2"></div>
						<div class="bar3"></div>
					</div>
				</div>
				<div className="lowerNav">
					{this.state.account &&
						<div>
							<button>DASHBOARD</button>
							<button>VIEW</button>
							<button>REVIEW</button>
							<button>MANAGE</button>
							<NavLink to="/actorpage#account"><button className="login">LOG IN</button></NavLink>
						</div>}
					{!this.state.account && 						
						<button className="login" onClick={this.toggleLogin}>LOG IN</button>}
						<LogInMenu loginVisibility={this.state.visibleLogin}/>
				</div>
			</div>
    	)
    }
}


export default TopNav;

class LogInMenu extends Component {
  render() {
    var visibility = "";
    if (this.props.loginVisibility) { visibility = "show"; }
    return (
      <div id="loginMenu"  className={visibility}>
      	hello
      </div>
    );
  }
}

