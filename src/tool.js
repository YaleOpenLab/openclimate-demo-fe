import React from 'react';
import { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import nations from './nations';


const API_URL = 'http://localhost:8001';
const username = 'amanda';
const pwhash = '9a768ace36ff3d1771d5c145a544de3d68343b2e76093cb7b2a8ea89ac7f1a20c852e6fc1d71275b43abffefac381c5b906f55c3bcff4225353d02f1d3498758';


class Tool extends Component{	
  componentDidMount() {
    const url = `${API_URL}/carbon/budget?username=${username}&pwhash=${pwhash}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      console.log(data);
      this.setState({fuel: data["2017"]["Fossil-Fuel-And-Industry"], landuse: data["2017"]["Land-Use-Change-Emissions"], 
        atmos: data["2017"]["Atmospheric-Growth"], ocean: data["2017"]["Ocean-Sink"], landsink: data["2017"]["Land-Sink"], 
        budget: data["2017"]["Budget-Imbalance"]}); 
    });
  }
	constructor(props, context) {
	  super(props, context);
	  this.state = { 
      visibleEarth: true, visibleNation: true,
      fuel: 0, landuse: 0, atmos: 0, ocean: 0, landsink: 0, budget: 0 };
	  this.toggleEarth = this.toggleEarth.bind(this);
	  this.toggleNation = this.toggleNation.bind(this);
	}
	toggleEarth() {
	   this.setState({ visibleEarth: !this.state.visibleEarth });
       this.setState({ visibleNation: !this.state.visibleNation });
	  // if (!this.state.visibleEarth) {this.setState({ visibleNation: true })};
	}
	toggleNation() {
	  this.setState({ visibleNation: !this.state.visibleNation });
	  if (this.state.visibleNation) {this.setState({ visibleEarth: false })};
	}
	render() {
		return (
			<div className = 'tool'>
				<NavLink to="/actorpage#account"><button className="login">LOG IN</button></NavLink>
        <h2>Fun title! wooh</h2>
				<EarthMenu toggleEarth={this.toggleEarth} earthVisibility={this.state.visibleEarth} 
          fuelData = {this.state.fuel} landuseData = {this.state.landuse} atmosData = {this.state.atmos} 
          oceanData = {this.state.ocean} landsinkData = {this.state.landsink} budgetData = {this.state.budget}/>
				<NationMenu toggleNation={this.toggleNation} natlVisibility={this.state.visibleNation}/>

			</div>
		)
	}	
}

export default Tool;


class EarthMenu extends Component {
  render() {
    var visibility = "hide";
    if (this.props.earthVisibility) { visibility = "show"; }
    return (
      <div id="earthMenu" className={visibility}>
      	<div className="myLabel">
      		<button className="labelButton">EARTH</button>
      	</div>
        <div>
          <button id="slideButton" onClick={this.props.toggleEarth} > Expand ></button>
          <h5>Emissions from fossil fuel combustion and industrial processes 
            (uncertainty of ±5% for a ± 1 sigma confidence level): {this.props.fuelData} </h5>
          <h5>Emissions from land-use change (uncertainty of ±0.7 GtC/yr): {this.props.landuseData}</h5>
          <h5>The atmospheric CO2 growth rate (variable uncertainty around 0.2 GtC/yr from 1980): {this.props.atmosData}</h5>
          <h5>The ocean sink (uncertainty of ±0.5 GtC/yr): {this.props.oceanData}</h5>
          <h5>The land sink (uncertainty of ±0.9 GtC/yr on average): {this.props.landsinkData}</h5>
          <h5>The budget imbalance is the sum of emissions (fossil fuel and industry + land-use change) 
          minus (atmospheric growth + ocean sink + land sink) {this.props.budgetData}</h5>
          <h6>(data reported in 2017)</h6>
        </div>
      </div>
    );
  }
}


class NationMenu extends Component {
    render() {
        var visibility = "hide";
        if (this.props.natlVisibility ) { visibility = "show"; }
        return (
            <div id="nationMenu" className={visibility}>
                <Accordion id="myAccordian">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="dropButton1">
                            NATION STATES
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Accordion id="myAccordian2">
                                {nations.map((nation, index) =>
                                    <Card className="card">
                                        <Accordion.Toggle as={Card.Header} eventKey={index} style={{textAlign: 'left'}} className="dropButton2">
                                            {nation}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={index}>
                                            <Card.Body>Wooohh</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>)}
                            </Accordion>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="dropButton1" >
                            MULTINATIONALS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}


// class InfoMenu extends Component {
//   render() {

//   }
// }


// const nations = ["Afghanistan",
//     "Åland Islands",
//     "Albania",
//     "Algeria",
//     "American Samoa",
//     "Andorra",
//     "Angola",
//     "Anguilla",
//     "Antarctica",
//     "Antigua and Barbuda",
//     "Argentina",
//     "Armenia",
//     "Aruba",
//     "Australia",
//     "Austria",
//     "Azerbaijan",
//     "Bahamas",
//     "Bahrain",
//     "Bangladesh",
//     "Barbados",
//     "Belarus",
//     "Belgium",
//     "Belize",
//     "Benin",
//     "Bermuda",
//     "Bhutan",
//     "Bolivia (Plurinational State of)",
//     "Bonaire, Sint Eustatius and Saba",
//     "Bosnia and Herzegovina",
//     "Botswana",
//     "Bouvet Island",
//     "Brazil",
//     "British Indian Ocean Territory",
//     "United States Minor Outlying Islands",
//     "Virgin Islands (British)",
//     "Virgin Islands (U.S.)",
//     "Brunei Darussalam",
//     "Bulgaria",
//     "Burkina Faso",
//     "Burundi",
//     "Cambodia",
//     "Cameroon",
//     "Canada",
//     "Cabo Verde",
//     "Cayman Islands",
//     "Central African Republic",
//     "Chad",
//     "Chile",
//     "China",
//     "Christmas Island",
//     "Cocos (Keeling) Islands",
//     "Colombia",
//     "Comoros",
//     "Congo",
//     "Congo (Democratic Republic of the)",
//     "Cook Islands",
//     "Costa Rica",
//     "Croatia",
//     "Cuba",
//     "Curaçao",
//     "Cyprus",
//     "Czech Republic",
//     "Denmark",
//     "Djibouti",
//     "Dominica",
//     "Dominican Republic",
//     "Ecuador",
//     "Egypt",
//     "El Salvador",
//     "Equatorial Guinea",
//     "Eritrea",
//     "Estonia",
//     "Ethiopia",
//     "Falkland Islands (Malvinas)",
//     "Faroe Islands",
//     "Fiji",
//     "Finland",
//     "France",
//     "French Guiana",
//     "French Polynesia",
//     "French Southern Territories",
//     "Gabon",
//     "Gambia",
//     "Georgia",
//     "Germany",
//     "Ghana",
//     "Gibraltar",
//     "Greece",
//     "Greenland",
//     "Grenada",
//     "Guadeloupe",
//     "Guam",
//     "Guatemala",
//     "Guernsey",
//     "Guinea",
//     "Guinea-Bissau",
//     "Guyana",
//     "Haiti",
//     "Heard Island and McDonald Islands",
//     "Holy See",
//     "Honduras",
//     "Hong Kong",
//     "Hungary",
//     "Iceland",
//     "India",
//     "Indonesia",
//     "Côte d'Ivoire",
//     "Iran (Islamic Republic of)",
//     "Iraq",
//     "Ireland",
//     "Isle of Man",
//     "Israel",
//     "Italy",
//     "Jamaica",
//     "Japan",
//     "Jersey",
//     "Jordan",
//     "Kazakhstan",
//     "Kenya",
//     "Kiribati",
//     "Kuwait",
//     "Kyrgyzstan",
//     "Lao People's Democratic Republic",
//     "Latvia",
//     "Lebanon",
//     "Lesotho",
//     "Liberia",
//     "Libya",
//     "Liechtenstein",
//     "Lithuania",
//     "Luxembourg",
//     "Macao",
//     "Macedonia (the former Yugoslav Republic of)",
//     "Madagascar",
//     "Malawi",
//     "Malaysia",
//     "Maldives",
//     "Mali",
//     "Malta",
//     "Marshall Islands",
//     "Martinique",
//     "Mauritania",
//     "Mauritius",
//     "Mayotte",
//     "Mexico",
//     "Micronesia (Federated States of)",
//     "Moldova (Republic of)",
//     "Monaco",
//     "Mongolia",
//     "Montenegro",
//     "Montserrat",
//     "Morocco",
//     "Mozambique",
//     "Myanmar",
//     "Namibia",
//     "Nauru",
//     "Nepal",
//     "Netherlands",
//     "New Caledonia",
//     "New Zealand",
//     "Nicaragua",
//     "Niger",
//     "Nigeria",
//     "Niue",
//     "Norfolk Island",
//     "Korea (Democratic People's Republic of)",
//     "Northern Mariana Islands",
//     "Norway",
//     "Oman",
//     "Pakistan",
//     "Palau",
//     "Palestine, State of",
//     "Panama",
//     "Papua New Guinea",
//     "Paraguay",
//     "Peru",
//     "Philippines",
//     "Pitcairn",
//     "Poland",
//     "Portugal",
//     "Puerto Rico",
//     "Qatar",
//     "Republic of Kosovo",
//     "Réunion",
//     "Romania",
//     "Russian Federation",
//     "Rwanda",
//     "Saint Barthélemy",
//     "Saint Helena, Ascension and Tristan da Cunha",
//     "Saint Kitts and Nevis",
//     "Saint Lucia",
//     "Saint Martin (French part)",
//     "Saint Pierre and Miquelon",
//     "Saint Vincent and the Grenadines",
//     "Samoa",
//     "San Marino",
//     "Sao Tome and Principe",
//     "Saudi Arabia",
//     "Senegal",
//     "Serbia",
//     "Seychelles",
//     "Sierra Leone",
//     "Singapore",
//     "Sint Maarten (Dutch part)",
//     "Slovakia",
//     "Slovenia",
//     "Solomon Islands",
//     "Somalia",
//     "South Africa",
//     "South Georgia and the South Sandwich Islands",
//     "Korea (Republic of)",
//     "South Sudan",
//     "Spain",
//     "Sri Lanka",
//     "Sudan",
//     "Suriname",
//     "Svalbard and Jan Mayen",
//     "Swaziland",
//     "Sweden",
//     "Switzerland",
//     "Syrian Arab Republic",
//     "Taiwan",
//     "Tajikistan",
//     "Tanzania, United Republic of",
//     "Thailand",
//     "Timor-Leste",
//     "Togo",
//     "Tokelau",
//     "Tonga",
//     "Trinidad and Tobago",
//     "Tunisia",
//     "Turkey",
//     "Turkmenistan",
//     "Turks and Caicos Islands",
//     "Tuvalu",
//     "Uganda",
//     "Ukraine",
//     "United Arab Emirates",
//     "United Kingdom of Great Britain and Northern Ireland",
//     "United States of America",
//     "Uruguay",
//     "Uzbekistan",
//     "Vanuatu",
//     "Venezuela (Bolivarian Republic of)",
//     "Viet Nam",
//     "Wallis and Futuna",
//     "Western Sahara",
//     "Yemen",
//     "Zambia",
//     "Zimbabwe"];
// const nationList =  <ListGroup variant="flush">{nations.map((nation, index) =>
    // <div><ListGroup.Item as={Accordion.Toggle} eventKey={index} style={{textAlign: 'right'}} className="listButton">{nation}</ListGroup.Item>
    // <Accordion.Collapse eventKey={index}>
    //     <Card.Body>Wooohh</Card.Body>
    // </Accordion.Collapse> 






