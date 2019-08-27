import React from 'react';
import { Component } from 'react';
import './homepage/homepage.css'
import TopNav from '../components/TopNav';
import Footer from '../components/Layout/Footer/Footer';

class Trade extends Component{
	render(){
		return(
			<div>
			<TopNav page="trade"/>
			<div className="textBox">
				<div className="topText">Climate</div>
				<div className="bottomText">Terminal</div>
				<div className="progressText">concept project</div>
			</div>	
			<Footer/>
			</div>
		)
	}
}

export default Trade;