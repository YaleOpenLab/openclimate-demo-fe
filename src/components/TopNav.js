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
		if(this.props.page == "account_dashboard") (this.state = { account: 'active', dashboard: 'active'} )
       	if(this.props.page == "account_view") (this.state = { account: 'active', view: 'active'} )
       	if(this.props.page == "account_review") (this.state = { account: 'active', review: 'active'} )
      	if(this.props.page == "account_manage") (this.state = { account: 'active', manage: 'active'} )
       	if(this.props.page == "trade") (this.state = { trade: 'active' })
    }
	toggleMenu() {
        this.setState({ visibleMenu: !this.state.visibleMenu });
    }
    toggleLogin(){
    	this.setState({ visibleLogin: !this.state.visibleLogin});
    }
    render() {
    	console.log(this.state.view);
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
						<div className="lowerButtonDiv">
							<NavLink to='/dashboard'><button id="lowerNavButton" className={this.state.dashboard}>DASHBOARD</button></NavLink>
							<NavLink to='/actorpage'><button id="lowerNavButton" className={this.state.view}>VIEW</button></NavLink>
							<NavLink to='/review'><button id="lowerNavButton" className={this.state.review}>REVIEW</button></NavLink>
							<NavLink to='/manage'><button id="lowerNavButton" className={this.state.manage}>MANAGE</button></NavLink>
							<button className="login" onClick={this.toggleLogin}>LOG IN</button>
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

