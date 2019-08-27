import React from 'react';
import './SideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const SideBar = ({active, toggleSideBar}) => {
    return (
        <nav className={`SideBar ${active ? "active" : ''}`}>
            <div className="header">
                <div style={{display: 'flex', alignItems: 'center', color: 'white'}} onClick={toggleSideBar}>
                    <FontAwesomeIcon icon={faBars} style={{height: '20px', width: '29px', cursor: 'pointer'}} />
                </div>
                <div style={{display: 'flex', alignItems: 'center', color: 'white'}} onClick={toggleSideBar}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{height: '15px', width: '15px', cursor: 'pointer'}} />
                </div>
            </div>

        </nav>
    )
};

export default SideBar;