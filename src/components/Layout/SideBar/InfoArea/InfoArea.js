import React from "react";
import InfoItem from "./InfoItem/InfoItem";

const InfoArea = () => {
  return (
    <div className="info-area">
      <div className="info-separator">
        <InfoItem value="0.98" description="°C warming Relative to 1980" />
        <InfoItem
          status="Carbon Budget"
          value="550"
          description="Gt CO2e left Based on a 1.5 target"
        />
      </div>
      <div className="info-separator">
        <InfoItem value="411" description="CO2 ppm" />
        <InfoItem
          value="50"
          description={
            <div>
              GtCOe/year <div className="highlighter">15 year risk</div> to
              Budget Depletion
            </div>
          }
        />
      </div>
    </div>
  );
};

export default InfoArea;
