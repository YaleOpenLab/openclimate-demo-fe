import React from 'react';
import { Component } from 'react';
import '../../App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from "axios";
import globe from '../../static/globe.png'; 

class TopNav extends Component {
	constructor(props, context) {
        super(props, context);
        this.state = { visibleMenu: false };
        this.toggleMenu = this.toggleMenu.bind(this);
	}
	toggleMenu() {
        this.setState({ visibleMenu: !this.state.visibleMenu });
    }
    render() {
    	return (
    		<div>
				<SlideMenu onclick={this.toggleMenu} menuVisibility={this.state.visibleMenu}/>
				<div className="myNavbar">
					<button className="myNavButton">TRADE</button>
					<button className="myNavButton">ACCOUNT</button>
					<button className="myNavButton active">EXPLORE</button>
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
					<NavLink to="/actorpage#account"><button className="login">LOG IN</button></NavLink>
				</div>
				<SideMenu></SideMenu>
			</div>
    	)
    }
}

export default TopNav;

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

class SideMenu extends Component {
    render(){
        return (
            <div className="sideMenu">
                view toggler
            </div>
        )
    }
}
