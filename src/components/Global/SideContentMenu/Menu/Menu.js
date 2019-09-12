import React from "react";
import Accordion from "./Accordion/Accordion";

const Menu = ({ data }) => {
  return (
    <div className="menu">
      <div className="list">
        <Accordion data={data} />
      </div>
    </div>
  );
};

export default Menu;
