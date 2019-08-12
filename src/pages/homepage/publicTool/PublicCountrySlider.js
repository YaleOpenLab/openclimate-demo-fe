import React from 'react'; 
import { Component } from 'react';
import '../../../App.css';



class PublicCountrySlide extends Component{
	render(){
		var visibility = "hide";
		if (this.props.multiVisibility){
	   		if (this.props.visibility && this.props.earth) { visibility = "slideRightSmall"; }}
   		if (this.props.visibility == false && this.props.earth) { visibility = "slideLeftSmall"; }
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