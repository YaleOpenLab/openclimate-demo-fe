import React from 'react';
import { Component } from 'react';
import TopNav from '../../components/TopNav';

class Manage extends Component{
	render(){
		return(
			<div className="dashboard">
				<TopNav page="account_manage"/>
			</div>
		)
	}
}

export default Manage;