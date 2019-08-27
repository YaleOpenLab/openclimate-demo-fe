import React from 'react';
import "./MainNavigation.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import Routes from "../../../../routes/routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MainNavigation = ({toggleSideBar}) => {

    return (
        <div className="main-navigation" expand="md">
            <div className="navigation-left">
                <div style={{display: 'flex', alignItems: 'center', color: 'white'}} onClick={toggleSideBar}>
                    <FontAwesomeIcon icon={faBars} style={{height: '20px', width: '29px', cursor: 'pointer'}} />
                </div>
                <div className="search-div">
                    <input type="search" className='search-panel form-control'/>
                </div>
            </div>
            <div className="navigation-right">
                <NavigationItem link={Routes.EXPLORE}>Explore</NavigationItem>
                <NavigationItem link={Routes.ACCOUNT}>Account</NavigationItem>
                <NavigationItem link={Routes.HOME}>Trade</NavigationItem>
            </div>
        </div>
    )
};

export default MainNavigation;


