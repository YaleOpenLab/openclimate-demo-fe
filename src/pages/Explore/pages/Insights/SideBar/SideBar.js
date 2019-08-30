import React from 'react';
import './SideBar.scss';
import SideBarItem from "./SideBarItem";

const SideBar = ({}) => (
    <div className='insight-side-bar'>
        <div className="header">
            Key Insights
        </div>
        <div className="content">
            <h5>CARBON BUDGET COUNTER</h5>
            <SideBarItem
                value='550'
                title='Remaining global emissions'
                description='Gt CO2e (based on 1.5 oC target)'
            />
            <SideBarItem
                value='50'
                title='Annual global emissions'
                description='GtCO2e/year'
            />
            <SideBarItem
                value='2034'
                title='Estimate to budget depletion'
                description='15 Year Risk'
            />
        </div>
        <div className="footer">
            <a href="#">learn more ></a>
            <p>Review data sources & models</p>
        </div>
    </div>
);

export default SideBar;