import React from 'react';
import { Component } from 'react';

import '../../components/TopNav.css';
import './homepage.css'
import { NavLink, Switch, Route } from 'react-router-dom';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import Tool from './publicTool/tool';
import Globe from './Globe';
import Insights from './Insights';
import Learn from './Learn';
import viewImage from '../../static/viewImage.png';
import globeImage from '../../static/globeImage.png';
import insightsImage from '../../static/insightsImage.png';
import learnImage from '../../static/learnImage.png';

class HomePage extends Component{	
	constructor(props, context) {
        super(props, context);
        this.state = { activeGlobe: "", activeTool: "active", activeInsights: "", activeLearn: "" };
        this.toggleGlobe = this.toggleGlobe.bind(this);
        this.toggleTool = this.toggleTool.bind(this);
        this.toggleInsights = this.toggleInsights.bind(this);
        this.toggleLearn = this.toggleLearn.bind(this);
    }
    toggleGlobe() {
        this.setState({ activeGlobe: "active", activeTool: "", activeInsights: "", activeLearn: "" });
    }
    toggleTool() {
        this.setState({ activeGlobe: "", activeTool: "active", activeInsights: "", activeLearn: "" });
    }
    toggleInsights() {
        this.setState({ activeGlobe: "", activeTool: "", activeInsights: "active", activeLearn: "" });
    }
    toggleLearn() {
        this.setState({ activeGlobe: "", activeTool: "", activeInsights: "", activeLearn: "active" });
    }
	render() {
		return (	
			<div className = 'homepage'>
                <TopNav page="explore"></TopNav>
                <SideMenu toggleGlobe={this.toggleGlobe} toggleTool={this.toggleTool} 
                		toggleInsights={this.toggleInsights} toggleLearn={this.toggleLearn} 
                        activeGlobe={this.state.activeGlobe} activeTool={this.state.activeTool}
                        activeInsights={this.state.activeInsights} activeLearn={this.state.activeLearn}/>
                {this.state.activeGlobe && <Globe/>}
                {this.state.activeTool && <Tool/>}
                {this.state.activeInsights && <Insights/>}
                {this.state.activeLearn && <Learn/>}
                <Footer/>
			</div>
		)
	}
}

export default HomePage;



class SideMenu extends Component {
    render(){
        return (
            <div className="sideMenu">
                <div className="buttons">
                    <button id="sideButton" className={this.props.activeGlobe} onClick={this.props.toggleGlobe}>
                        <img src={globeImage} id="buttonImg"/>
                    </button>
                    <button id="sideButton" className={this.props.activeTool} onClick={this.props.toggleTool}>
                        <img src={viewImage} id="buttonImg"/>
                    </button>
                    <button id="sideButton" className={this.props.activeInsights} onClick={this.props.toggleInsights}>
                        <img src={insightsImage} id="buttonImg"/>
                    </button>
                    <button id="sideButton" className={this.props.activeLearn} onClick={this.props.toggleLearn}>
                        <img src={learnImage} id="buttonImg"/>
                    </button>
                </div>
            </div>
        )
    }
}










