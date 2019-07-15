import React from 'react'; 
import { Component } from 'react';
import './App.css';
import axios from "axios";

const API_URL = 'http://localhost:8001';
const username = 'amanda';
const pwhash = '9a768ace36ff3d1771d5c145a544de3d68343b2e76093cb7b2a8ea89ac7f1a20c852e6fc1d71275b43abffefac381c5b906f55c3bcff4225353d02f1d3498758';


class PublicSubnatlSlide extends Component{
	render(){
		var visibility = "hide";
		// if (this.props.visibility) {visibility = "show"; }
   		if (this.props.visibility && this.props.earth) { visibility = "showSmall"; }
   		if (this.props.visibility && !this.props.earth) { visibility = "showBig"; }
		return(
			<div id="multiSlider" className={visibility}>
				<h3>{this.props.regionInfo["Name"]}</h3>
				<p>Population: {this.props.regionInfo["Population"]}</p>
				<p>GDP: {this.props.regionInfo["Revenue"]}</p>
			</div>
		)
	}
} 

export default PublicSubnatlSlide;




