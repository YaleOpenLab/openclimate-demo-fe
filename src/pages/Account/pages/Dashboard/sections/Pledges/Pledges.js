import React from "react";
import InfoPanel from "../../InfoPanel/InfoPanel";
import InfoItem from "./InfoItem/InfoItem";
import TempImage from "../../../../../../assets/images/temp/geometry-fig.svg";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Pledges = () => {
  return (
    <InfoPanel title="Your Pledges">
      <div className="pledges">
        <div className="ip-section ip-separator">
          <div className="select-container">
            <select name="ambition" id="">
              <option value="1">Ambition</option>
            </select>
            <select name="type" id="">
              <option value="1">Type</option>
            </select>
          </div>
        </div>
        <div className="content">
          <InfoItem
            title="Carbon Neutral by 2035"
            description="Net Emissions"
            image={TempImage}
            icon={faHeart}
          />
          <InfoItem
            title="25% Emission intensity by 2020"
            description="Emission Intensity"
            image={TempImage}
            icon={faHeart}
          />
          <InfoItem
            title="30% Increase capacity by 2020"
            description="Renewables"
            image={TempImage}
            icon={faHeart}
          />
          <InfoItem
            title="Carbon Price at $35.65"
            description="Externalities"
            image={TempImage}
            icon={faHeart}
          />
          <InfoItem
            title="100% Reduction by 2050"
            description="Direct Emissions"
            image={TempImage}
            icon={faHeart}
          />
        </div>
        <div className="footer">
          <div className="see-more">
            <a href={void 0} className="oc-link">
              View All >
            </a>
          </div>
          <div className="see-more">
            <a href={void 0} className="footer-link">
              Methodologies Adopted >
            </a>
          </div>
          <div className="actions">
            <a href={void 0} className="oc-link">
              Add
            </a>
            <span>|</span>
            <a href={void 0} className="oc-link">
              Edit
            </a>
            <span>|</span>
            <a href={void 0} className="oc-link">
              Export
            </a>
          </div>
        </div>
      </div>
    </InfoPanel>
  );
};

export default Pledges;
