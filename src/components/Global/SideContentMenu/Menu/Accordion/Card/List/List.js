import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import history from "../../../../../../../helpers/history";
import ROUTES from "../../../../../../../routes/routes";

const List = ({ title, index, parent, active }) => {
  const handleRedirect = () => {
    history.push(`${ROUTES.EXPLORE_PAGES.REVIEW_BASE}${parent}/${index}`);
  };

  return (
    <div className={`oc-card-list-item ${active ? 'is-active' : ''}`} onClick={handleRedirect}>
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
