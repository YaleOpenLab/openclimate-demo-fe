import React from "react";
import Accordion from "./Accordion/Accordion";

const tempData = [
  {
    index: 0,
    title: "Nation State",
    list: ["United States"]
  },
];

const ComplexMenu = ({data}) => {
  return (
    <div className="menu">
      <div className="list">
        <Accordion data={tempData} />
      </div>
    </div>
  );
};

export default ComplexMenu;
