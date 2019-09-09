import React from "react";
import "./ClimateReports.scss";
import ReviewSection from "../ReviewSection/ReviewSection";
import TempImage from "../../../../../assets/images/temp/geometry-fig.svg";
import TempChart from "../../../../../assets/images/temp/climate-data.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

const ClimateReports = () => {
    return (
        <ReviewSection
            title='Carbon Balance'
            image={TempImage}

        >
            <div className='table-responsive'>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="tb-title">￿Name</th>
                        <th className="tb-title">Scope</th>
                        <th className="tb-title">Date</th>
                        <th className="tb-title">Verified</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='--highlight'>
                            06542 - 308834
                        </td>
                        <td>Emissions</td>
                        <td>CO2</td>
                        <td>Retired</td>
                        <td>
                            <FontAwesomeIcon
                                icon={faEllipsisV}
                                style={{
                                    height: 15,
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='--highlight'>
                            06542 - 308834
                        </td>
                        <td>Emissions</td>
                        <td>CO2</td>
                        <td>Retired</td>
                        <td>
                            <FontAwesomeIcon
                                icon={faEllipsisV}
                                style={{
                                    height: 15,
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='--highlight'>
                            06542 - 308834
                        </td>
                        <td>Emissions</td>
                        <td>CO2</td>
                        <td>Retired</td>
                        <td>
                            <FontAwesomeIcon
                                icon={faEllipsisV}
                                style={{
                                    height: 15,
                                }}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </ReviewSection>
    )
};

export default ClimateReports;