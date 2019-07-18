import React from 'react'; 
import { Component } from 'react';
import '../../App.css';

class PublicNationSlide extends Component{
	constructor(props, context) {
        super(props, context);
        this.state = { currentlyVisible: false }
	}
	render(){
		var visibility = "";
   		if (this.props.visibility && this.props.earth) { visibility = "slideRightSmall"; }
   		if (this.props.visibility && !this.props.earth) { visibility = "slideRightBig"; }
   		if (!this.props.visibility && this.props.earth) { visibility = "slideLeftSmall"; }
   		if (!this.props.visibility && !this.props.earth) { visibility = "slideLeftBig"; }
		return(
			<div id="multiSlider" className={visibility}>
				NDC data goes here 
			</div>
		)
	}
} 

export default PublicNationSlide;