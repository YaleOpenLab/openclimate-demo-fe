import React from "react";
import "./Container.scss";

const Container = ({fluid, children}) => {
    return (
        <div className={`custom-container ${fluid ? 'container-fluid' : 'container'}`}>
            {children}
        </div>
    )
};

export default Container;