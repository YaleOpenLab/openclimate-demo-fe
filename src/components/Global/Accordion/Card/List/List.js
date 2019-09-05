import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from "react-animate-height";

const List = ({ title, index }) => {
  return (
    <div className="oc-card-list-item">
      <div className="oc-card-list-item-title">{title}</div>
      <div className="oc-card-list-item-icon">
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ height: "8px", width: "8px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default List;
