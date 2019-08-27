import React from 'react';
import { Component } from 'react';
import TopNav from '../../components/TopNav';

class Review extends Component{
	render(){
		return(
			<div className="dashboard">
				<TopNav page="account_review"/>
			</div>
		)
	}
}

export default Review;