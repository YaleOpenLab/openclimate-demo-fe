import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

const Rating = ({ rated = 0, style }) => {
  let content = [];

  for (let i = 0; i < 3; i++) {
    content.push(
      <div className="star" key={i}>
        <FontAwesomeIcon
          icon={faStar}
          className={`icon ${rated > i ? "rated" : ""}`}
        />
      </div>
    );
  }

  return (
    <div className="Ratings" style={style ? style : null}>
      {content}
    </div>
  );
};

export default Rating;
