import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from "react-animate-height";
import "./SubCardItem.scss";
import List from "../List/List";

const SubCardItem = ({ title, list, open, handleOpen, handleClose }) => {
  return (
    <div className="oc-sub-card">
      <div
        className="oc-sub-card-header"
        onClick={open ? handleClose : handleOpen}
      >
        <div className="oc-sub-card-title">{title}</div>
        <div className="oc-sub-card-icon">
          <FontAwesomeIcon
            icon={open ? faTimes : faPlus}
            style={{ height: "14px", width: "14px", cursor: "pointer" }}
          />
        </div>
      </div>
      <AnimateHeight duration={200} height={open ? "auto" : 0}>
        <div className={`oc-sub-card-body ${open ? "--show" : ""}`}>
          {list.map((item, i) => (
            <List key={i} title={item} />
          ))}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default SubCardItem;
