import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from "axios";
import PublicNationSlide from './PublicNationSlide';
import PublicMultiSlide from './PublicMultiSlider';
import PublicCountrySlide from './PublicCountrySlider';
import PublicSubnatlSlide from './PublicSubnatlSlider';
import globe from '../../../static/globe.png';
import TopNav from '../../../components/TopNav';


const API_URL = 'http://localhost:8001';
const username = 'amanda';
const pwhash = '9a768ace36ff3d1771d5c145a544de3d68343b2e76093cb7b2a8ea89ac7f1a20c852e6fc1d71275b43abffefac381c5b906f55c3bcff4225353d02f1d3498758';



class Tool extends Component{	
  componentDidMount() {
    //Get the Earth Carbon Budget Data
    const url = `${API_URL}/carbon/budget?username=${username}&pwhash=${pwhash}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({fuel: data["2017"]["Fossil-Fuel-And-Industry"], landuse: data["2017"]["Land-Use-Change-Emissions"], 
        atmos: data["2017"]["Atmospheric-Growth"], ocean: data["2017"]["Ocean-Sink"], landsink: data["2017"]["Land-Sink"], 
        budget: data["2017"]["Budget-Imbalance"]}); 
    });
    //Get country by country data 
    const url_country = `${API_URL}/country/all?username=${username}&pwhash=${pwhash}`;
    const countries = [];
    axios.get(url_country).then(response => response.data)
    .then((data) => {
        this.setState({countryList: data})
        console.log(this.state.countryList)
    })
  }
	constructor(props, context) {
        super(props, context);
        this.state = { 
            visibleEarth: true, visibleNation: true, visibleNatlSlider: false, visibleMultiSlider: false, visibleRegionSlider: false,
            visibleCountrySlider: false,
            fuel: 0, landuse: 0, atmos: 0, ocean: 0, landsink: 0, budget: 0,
            text: "< View less", countryList: [], countryInfo: {}, regionInfo: {} };
        this.toggleEarth = this.toggleEarth.bind(this);
        this.toggleNatlSlider = this.toggleNatlSlider.bind(this);
        this.toggleMultiSlider = this.toggleMultiSlider.bind(this);
        this.toggleCountrySlider = this.toggleCountrySlider.bind(this);
        this.toggleRegionSlider = this.toggleRegionSlider.bind(this);
	}
	toggleEarth() {
	   this.setState({ visibleEarth: !this.state.visibleEarth });
       this.setState({ visibleNation: !this.state.visibleNation });
       if (!this.state.visibleEarth) {this.setState({ text: "< View less"})};
       if (this.state.visibleEarth) {this.setState({ text: "View more >"})};
	}
	toggleNatlSlider() {
	    this.setState({ visibleNatlSlider: !this.state.visibleNatlSlider });
        this.setState({ visibleMultiSlider: false, visibleCountrySlider: false });
	}
    toggleMultiSlider() {
        this.setState({ visibleMultiSlider: !this.state.visibleMultiSlider });
        this.setState({ visibleNatlSlider: false, visibleCountrySlider:false });
    }
    toggleCountrySlider(countryInfo){
        if (countryInfo["Name"] != this.state.countryInfo["Name"] && this.state.visibleCountrySlider == true) {this.setState({ visibleCountrySlider: true });} 
        else {this.setState({ visibleCountrySlider: !this.state.visibleCountrySlider });}
        this.setState({ countryInfo: countryInfo });
    }
    toggleRegionSlider(regionInfo){
        if (regionInfo["Name"] != this.state.regionInfo["Name"] && this.state.visibleRegionSlider == true) {this.setState({ visibleRegionSlider: true });} 
        else {this.setState({ visibleRegionSlider: !this.state.visibleRegionSlider });}
        this.setState({ regionInfo: regionInfo });
    }
	render() {
		return (
			<div className = 'tool'>

				<EarthMenu toggleEarth={this.toggleEarth} earthVisibility={this.state.visibleEarth} 
                    fuelData = {this.state.fuel} landuseData = {this.state.landuse} atmosData = {this.state.atmos} 
                    oceanData = {this.state.ocean} landsinkData = {this.state.landsink} budgetData = {this.state.budget}
                    text={this.state.text} />
				<NationMenu toggleNatlSlider={this.toggleNatlSlider} toggleMultiSlider={this.toggleMultiSlider} 
                    toggleCountrySlider={this.toggleCountrySlider} toggleRegionSlider={this.toggleRegionSlider} 
                    natlVisibility={this.state.visibleNation} countryList={this.state.countryList} countryInfo={this.state.countryInfo}/>
                <PublicNationSlide visibility={this.state.visibleNatlSlider} earth={this.state.visibleEarth}/>
                <PublicMultiSlide visibility={this.state.visibleMultiSlider} earth={this.state.visibleEarth}/>
                <PublicCountrySlide visibility={this.state.visibleCountrySlider} countryInfo={this.state.countryInfo} earth={this.state.visibleEarth}/>
			    <PublicSubnatlSlide visibility={this.state.visibleRegionSlider} regionInfo={this.state.regionInfo} earth={this.state.visibleEarth}/>
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
          <button id="slideButton" onClick={this.props.toggleEarth}>{this.props.text}</button>
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
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="dropButton1" onClick={this.props.toggleNatlSlider}>
                            NATION STATES
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">            
                            <NestedMenu toggleCountrySlider={this.props.toggleCountrySlider} countryList={this.props.countryList} countryInfo={this.props.countryInfo} toggleRegionSlider={this.toggleRegionSlider}/>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="dropButton1" onClick={this.props.toggleMultiSlider}>
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

//There is a bug that if you close the outer accordian while an inner one is open 
//when you open the outer one again the inner one is still open 
//I want it to go back to closed when the outer accordian open and closes  
//Solution may be creating my own accordian instead of bootstrap 
class NestedMenu extends Component{
    render(){
        return(
            <Accordion id="myAccordian2">
                {this.props.countryList.map((countryInfo, index) =>
                    <Card className="card">
                        <Accordion.Toggle as={Card.Header} eventKey={index} style={{textAlign: 'left'}} className="dropButton2" 
                        onClick={this.props.toggleCountrySlider.bind(this, countryInfo)}>
                            {countryInfo["Name"]}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index}> 
                            <DoubleNested countryInfo={countryInfo} toggleRegionSlider={this.props.toggleRegionSlider}></DoubleNested>
                        </Accordion.Collapse>
                    </Card>)}
            </Accordion>
        )
    }
}

class DoubleNested extends Component{
    componentDidMount(){
        const url = `${API_URL}/region/all?username=${username}&pwhash=${pwhash}`;
        const regions = [];
        axios.get(url).then(response => response.data)
        .then((data) => {
            for (var i = 0; i < data.length; i++){
                if(data[i]["Country"] == this.props.countryInfo["Name"]){
                    regions.push(data[i])
                }
            }
            this.setState({regionList: regions})
            // console.log(this.props.countryInfo["Name"])
        })
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            regionList: []
        };
    }
    render(){
        return(
            <Accordion>
                <Accordion.Toggle as={Card.Header}eventKey="0" className="dropButton3">Subnational Regions</Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Accordion>
                        {this.state.regionList.map((regionInfo, index) => 
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={index} style={{textAlign: 'left'}} className="dropButton4"
                            onClick={this.props.toggleRegionSlider}>
                                {regionInfo["Name"]}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index}><Card.Body>wooh</Card.Body></Accordion.Collapse>
                            </Card>
                        )}   
                    </Accordion>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="dropButton3">Domestic Corporations</Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>wooh</Card.Body>
                </Accordion.Collapse>
            </Accordion>
    )
    }
}

// class SideMenu extends Component {
//     render(){
//         return (
//             <div className="sideMenu">
//                 view toggler
//             </div>
//         )
//     }
// }





