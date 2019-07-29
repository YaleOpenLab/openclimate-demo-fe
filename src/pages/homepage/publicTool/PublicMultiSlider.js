import React from 'react'; 
import { Component } from 'react';
import '../../../App.css';

class PublicMultiSlide extends Component{
	render(){
		var visibility = "hide";
		// if (this.props.visibility) {visibility = "show"; }
   		if (this.props.visibility && this.props.earth) { visibility = "slideRightSmall"; }
   		if (this.props.visibility && !this.props.earth) { visibility = "slideLeftSmall"; }
		return(
			<div id="multiSlider" className={visibility}>
				Yes so much info abt multinational corps 
			</div>
		)
	}
} 

export default PublicMultiSlide;