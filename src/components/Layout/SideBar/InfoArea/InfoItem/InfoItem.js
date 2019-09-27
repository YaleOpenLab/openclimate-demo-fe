import React from "react";

const InfoItem = ({ status, value, description }) => {
  return (
    <div className="info-area-item">
      <div className="status">{status}</div>
      <div className="value">{value}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default InfoItem;
