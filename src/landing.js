import React from 'react';
import { Component } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import globe from './globe.png'
import carbon_data from './carbon-data.png'
import { NavLink, Switch, Route } from 'react-router-dom';



class Landing extends Component{
	render(){
		return (
			<main className="mt-5">
    		<div className="container-fluid">
    			<section className="fullScroll">
      			<Content/>
      		</section>
      		<hr className="my-5"/>
      		<section className="fullScroll">
      			<GlobalData/>
      		</section>
      		<hr className="my-5"/>
      		<section className="fullScroll">
      			<GlobalEmissionsGen/>
      		</section>
      	</div>
      </main>
		)
	}
}


class Content extends Component {
   render() {
      return (
         <div>
         		<Row>
         		<Col></Col>
         		<Col xs={8} align="center">
	            <h2 id="climateheader1">OPENCLIMATE</h2>
	            <p id="climateheader2">A single climate accounting system with global consensus.</p>
	            <p id="climateheader3">As we move to a stricter management of carbon in our atmospheric commons 
	            — to prevent global warming from exceeding a dangerous threshold— 
	            we must revise the process of transparent carbon and climate accounting.</p>
	            <NavLink to='/homepage'><button className="mybutt">ENTER</button></NavLink>
          	</Col>
          	<Col></Col>
          	</Row>
         </div>
      );
   }
}


class GlobalData extends Component {
   render() {
      return (
         <div>
         		<Row>
         		<Col xs={2}></Col>
         		<Col xs={5} align="left">
	        		<p id="globaldataheader">Global Carbon Data</p>
	            <p id="globaltext">Planet Earth’s atmosphere can hold a limited amount of CO2e emissions 
	            before raising average global temperatures above a safe space for humanity. This limited quantity 
	            of emissions has been termed our carbon budget. The threshold level that determines this budget is 
	            derived from physical properties in radiative forcing (i.e. greenhouse gas effect) and its 
	            thoroughly studied effects on global climate. The Paris Agreement of 2015 consolidated a global 
	            effort to maintain this threshold to 1.5oC warming relative to pre-industrial levels. If present 
	            emission pathways are left unchecked, the budget could be consumed in as little as 15 years. To 
	            achieve the ambitions set in Paris, CO2 emission must peak by 2020 and then decline radically, 
	            arriving to net-zero by 2050 and negative values to the end of the century.</p>
          	</Col>
          	<Col align="center">
          		<img id="carbon_data" src={carbon_data} alt="CarbonData" />
          	</Col>
          	</Row>
         </div>
      );
   }
}


class GlobalEmissionsGen extends Component {
   render() {
			var oracle = <a href="/oracle">Planet Oracle > </a>
			var method = <a href="/methodology">Methodology > </a>
			var data = <a href="/datasources">Data Sources > </a>
      return (
         <div>
         		<Row>
         		<Col xs={2}></Col>
         		<Col align="left">
	        		<p id="globalemissionheader">Global Emissions & Gaps Explorer</p>
	            <p id="globalemissiontext">The Emissions & Gaps Explorer shows the aggregate level of global pathways to 
	            meet the Paris Agreement, the aggregate effect of Nationally Determined Contributions (NDC) and the 
	            observed emissions. Data is presented from different reputable data platforms, as well as a general 
	            assessment of these through a planetary emissions Oracle (see ‘All’ tab). 
	            See more: { oracle } | {method} | {data} </p>
          	</Col>
          	<Col xs={2}></Col>
          	</Row>
         </div>
      );
   }
}


export default Landing;
