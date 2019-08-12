import React from 'react';
import { Component } from 'react';
import './SlideMenu.css';

import { NavLink, Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from "axios";
import globe from '../static/globe.png';



class SlideMenu extends Component {
  render() {
    var visibility = "hidden";
    if (this.props.menuVisibility) { visibility = "show"; }
    if (this.props.menuVisibility == false) { visibility = "hide"; }
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

export default SlideMenu;