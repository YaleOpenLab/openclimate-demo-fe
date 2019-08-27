import React from 'react';
import MainNavigation from "./MainNavigation/MainNavigation";

const Header = ({toggleSideBar}) => {
    return (
        <MainNavigation toggleSideBar={toggleSideBar}/>
    )
};

export default Header;