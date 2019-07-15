import React from 'react'; 
import { Component } from 'react';
import './App.css';

class PublicNationSlide extends Component{
	render(){
		var visibility = "hide";
		// if (this.props.visibility && this.props.earth) {visibility = "show"; }
   		if (this.props.visibility && this.props.earth) { visibility = "showSmall"; }
   		if (this.props.visibility && !this.props.earth) { visibility = "showBig"; }
		return(
			<div id="multiSlider" className={visibility}>
				NDC data goes here 
			</div>
		)
	}
} 

export default PublicNationSlide;