import React from 'react'; 
import { Component } from 'react';
import './App.css';



class PublicCountrySlide extends Component{
	render(){
		var visibility = "hide";
		// if (this.props.visibility) {visibility = "show"; }
   		if (this.props.visibility && this.props.earth) { visibility = "showSmall"; }
   		if (this.props.visibility && !this.props.earth) { visibility = "showBig"; }
		return(
			<div id="multiSlider" className={visibility}>
				<h3>{this.props.countryInfo["Name"]}</h3>
				<p>Population: {this.props.countryInfo["Population"]}</p>
				<p>GDP: {this.props.countryInfo["Revenue"]}</p>
			</div>
		)
	}
} 

export default PublicCountrySlide;