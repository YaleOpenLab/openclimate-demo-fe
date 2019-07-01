import React from 'react';
import { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class Tool extends Component{	
	constructor(props, context) {
	  super(props, context);
	  this.state = { visibleEarth: false };
	  this.state = { visibleNation: false };
	  this.toggleEarth = this.toggleEarth.bind(this);
	  this.toggleNation = this.toggleNation.bind(this);
	}
	toggleEarth() {
	  this.setState({ visibleEarth: !this.state.visibleEarth });
	  if (!this.state.visibleEarth) {this.setState({ visibleNation: true })};
	}
	toggleNation() {
	  this.setState({ visibleNation: !this.state.visibleNation });
	  if (this.state.visibleNation) {this.setState({ visibleEarth: false })};
	}
	render() {
		return (
			<div className = 'tool'>
				<NavLink to="/actorpage#account"><button className="login">LOG IN</button></NavLink>
				<h1>This is the PUBLIC tool component (login from here) </h1>
				<EarthMenu toggleEarth={this.toggleEarth} earthVisibility={this.state.visibleEarth}/>
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
      		<button id="slideButton" onClick={this.props.toggleEarth}>EARTH</button>
      	</div>
      	<h2><a href="#">Home</a></h2>
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
      	<div className="myLabel">
      		<button id="slideButton" onClick={this.props.toggleNation}>NATION STATES</button>
      	</div>
      	<Accordion id="myAccordian">
				  <Card>
				    <Accordion.Toggle as={Card.Header} eventKey="0" className="listButton">
				      NATION STATES
				    </Accordion.Toggle>
				    <Accordion.Collapse eventKey="0">
				      <Card.Body>
				      	<ListGroup variant="flush">{nationList}</ListGroup>
				      </Card.Body>
				    </Accordion.Collapse>
				  </Card>
				  <Card>
				    <Accordion.Toggle as={Card.Header} eventKey="1" className="listButton">
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


const nations = ["Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "United States Minor Outlying Islands",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cabo Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo (Democratic Republic of the)",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Côte d'Ivoire",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia (the former Yugoslav Republic of)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Korea (Democratic People's Republic of)",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of Kosovo",
    "Réunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Korea (Republic of)",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"];
const nationList = nations.map((nation) =>
  <ListGroup.Item as="button" style={{textAlign: 'right'}} className="listButton">{nation}</ListGroup.Item>);








