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
        this.state = { visibleMenu: false };
        this.toggleMenu = this.toggleMenu.bind(this); 
        if(this.props.page == "explore") (this.state = { explore: 'active' })
       	if(this.props.page == "account") (this.state = { account: 'active' })
       	if(this.props.page == "trade") (this.state = { trade: 'active' })
	}
	toggleMenu() {
        this.setState({ visibleMenu: !this.state.visibleMenu });
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
					{this.state.trade &&
						<div>
							<button>DASHBOARD</button>
							<button>VIEW</button>
							<button>REVIEW</button>
							<button>MANAGE</button>
							<NavLink to="/actorpage#account"><button className="login">LOG IN</button></NavLink>
						</div>}
					{!this.state.trade && 						
						<NavLink to="/actorpage#account"><button className="login">LOG IN</button></NavLink>}
				</div>
			</div>
    	)
    }
}


export default TopNav;

// class SlideMenu extends Component {
//   render() {
//     var visibility = "hide";
//     if (this.props.menuVisibility) { visibility = "show"; }
//     return (
//       <div id="slideMenu"  className={visibility}>
//         <div className="topMenu">
//             <button className="closeButton" onClick={this.props.onclick}><i className="fa fa-times" aria-hidden="true"></i></button>
//             <img id="globe" src={globe} alt="Globe" />
//         </div>
//         <div>
//         </div>
//       </div>
//     );
//   }
// }

