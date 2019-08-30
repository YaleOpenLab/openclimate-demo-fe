import React from 'react';
import { Component } from 'react';
import '../homepage/homepage.css'
import LayoutWrapper from "../../hoc/Layout/Layout";
import SubNavigation from "../../components/Layout/Header/SubNavigation/SubNavigation";
import UnderDevelopment from "../../components/Global/UnderDevelopment/UnderDevelopment";
import Container from "../../hoc/Container/Container";

class TradeContainer extends Component{
	render(){
		return(
			<LayoutWrapper>
				<SubNavigation list={[]}/>
				<Container>
					<UnderDevelopment title='Trade' />
				</Container>
			</LayoutWrapper>
		)
	}
}

export default TradeContainer;