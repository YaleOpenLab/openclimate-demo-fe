import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import history from "../../../../../../../helpers/history";
import ROUTES from "../../../../../../../routes/routes";

const List = ({ title, index, parent, active }) => {
  const handleRedirect = () => {
    // todo: remove this when the API route exists
    parent = index > 1000 ? 'nation-states' : parent;
    index = index > 1000 ? 63 : index;
    history.push(`${ROUTES.EXPLORE_PAGES.REVIEW_BASE}${parent}/${index}`);
  };

  return (
    <div className={`oc-card-list-item ${active ? 'is-active' : ''}`} onClick={handleRedirect}>
      <div className="oc-card-list-item-title">{title}</div>
      <div className="oc-card-list-item-icon">
        <FontAwesomeIcon
          icon={active? faChevronRight : faChevronDown}
          style={{ height: "8px", width: "8px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default List;
