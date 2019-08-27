import React from 'react';
import { Component } from 'react';
import TopNav from '../../components/TopNav';

class Dashboard extends Component{
	render(){
		return(
			<div className="dashboard">
				<TopNav page="account_dashboard"/>
			</div>
		)
	}
}

export default Dashboard;