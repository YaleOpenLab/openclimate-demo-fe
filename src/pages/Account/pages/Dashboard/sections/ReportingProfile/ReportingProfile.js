import React from "react";
import ClimateData from "../../../../../../assets/images/temp/climate-data.png";
import Rating from "../../Rating/Rating";
import InfoPanel from "../../InfoPanel/InfoPanel";
import InfoItem from "../Pledges/InfoItem/InfoItem";
import TempImage from "../../../../../../assets/images/temp/geometry-fig.svg";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ReportingProfile = () => {
  return (
    <InfoPanel title="Your Pledges">
      <div className="pledges">
        <div className="ip-section ip-separator">
          <div className="header-container">
            <div>Public disclosure setting</div>
          </div>
        </div>
        <div className="content">
          <InfoItem
            title="Aggregate Accounting (Totals)"
            description="Accounting visibility"
            icon={faEye}
          />
          <InfoItem
            title="National Scopes Reporting"
            description="Accounting preference"
            icon={faEye}
          />
          <InfoItem
            title="Asset Types & Sizes"
            description="Climate action assets visibility"
            icon={faEye}
          />
          <InfoItem
            title="Asset Names & Locations"
            description="Climate action assets visibility"
            icon={faEyeSlash}
          />
        </div>
        <div className="footer">
          <div className="see-more">
            <a href={void 0} className="oc-link">
              Review & Manage >
            </a>
          </div>
        </div>
      </div>
    </InfoPanel>
  );
};

export default ReportingProfile;
