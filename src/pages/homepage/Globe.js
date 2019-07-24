import React from 'react';
import { Component } from 'react';
import './homepage.css';


class Globe extends Component{
	render(){
		return(
			<div className="textBox">
				<div className="topText">Welcome to</div>
				<div className="bottomText">Globe</div>
				<div className="progressText">Work in progress</div>
			</div>	
		)
	}
}


export default Globe;