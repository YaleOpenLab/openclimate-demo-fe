import React from "react";
import Accordion from "./Accordion/Accordion";

const Menu = ({ data, current }) => {
  return (
    <div className="menu">
      <div className="list">
        <Accordion data={data} current={current} />
      </div>
    </div>
  );
};

export default Menu;
