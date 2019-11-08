import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from "react-animate-height";
import List from "./List/List";
import SubCardItem from "./SubCardItem/SubCardItem";

const Card = ({ title, itemIndex, selected, list, subCards, open, handleOpen, handleClose }) => {
  const [openIndex, setOpen] = useState(null);

  return (
    <div className="oc-card">
      <div className="oc-card-header" onClick={open ? handleClose : handleOpen}>
        <div className="oc-card-title">{title}</div>
        <div className="oc-card-icon">
          <FontAwesomeIcon
            icon={open ? faMinus : faPlus}
            style={{ height: "14px", width: "14px", cursor: "pointer" }}
          />
        </div>
      </div>
      <AnimateHeight duration={200} height={open ? "auto" : 0}>
        <div className={`oc-card-body ${open ? "--show" : ""}`}>
          {!!subCards && subCards.map((item, index) => (
            <SubCardItem
              parent={itemIndex}
              key={index}
              title={item.title}
              list={item.list}
              handleOpen={() => setOpen(index)}
              handleClose={() => setOpen(null)}
              open={index === openIndex}
            />
          ))}
          {!!list && list.map((item, i) => (
            <List key={i} title={item.title} index={item.index} parent={itemIndex} active={item.index == selected}/>
          ))}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default Card;
