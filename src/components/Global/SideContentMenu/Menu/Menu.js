import React from "react";
import Accordion from "../../Accordion/Accordion";

const tempData = [
  {
    index: 0,
    title: "Nation State",
    list: ["Albania", "Algeria", "Andorra", "Angola"]
  },
  {
    index: 1,
    title: "Multinationals",
    subCards: [
      {
        title: "Carbon majors",
        list: ["AbuDhabi", "Anakarko", "Apache", "Bahrain"]
      },
      { title: "Other Mnc", list: ["One", "Two", "Three", "Four"] }
    ]
  }
];

const Menu = () => {
  return (
    <div className="menu">
      <div className="list">
        <Accordion data={tempData} />
      </div>
    </div>
  );
};

export default Menu;
