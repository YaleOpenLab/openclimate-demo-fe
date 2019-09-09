import React from "react";
import "./CarbonBalance.scss";
import ReviewSection from "../ReviewSection/ReviewSection";
import TempImage from "../../../../../assets/images/temp/geometry-fig.svg";
import TempChart from "../../../../../assets/images/temp/climate-data.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortUp, faSortDown, faEllipsisV} from "@fortawesome/free-solid-svg-icons";

const CarbonBalance = () => {
    return (
        <ReviewSection
            title='Carbon Balance'
            image={TempImage}
        >
            <div className='carbon-balance'>
                <div className='cb-left'>
                    <div className="chart">
                        <div className="chart-text">
                            <h1>-9.8</h1>
                            <p>Mt CO2e/year</p>
                            <p>Emissions</p>
                        </div>
                        <div className="chart-image">
                            <img src={TempChart} alt="emissions"/>
                        </div>
                    </div>
                    <div className='table-responsive'>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td className='--highlight'>
                                    <FontAwesomeIcon
                                        icon={faSortUp}
                                        style={{
                                            height: 35,
                                            width: 35,
                                            marginTop:0,
                                            position: 'absolute',
                                            marginLeft: -17
                                        }}
                                    />
                                </td>
                                <td>Emissions</td>
                                <td>1.3</td>
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
                                    <FontAwesomeIcon
                                        icon={faSortDown}
                                        style={{
                                            height: 35,
                                            width: 35,
                                            marginTop: -17,
                                            position: 'absolute',
                                            marginLeft: -17,
                                            color: '#037367'
                                        }}
                                    />
                                </td>
                                <td>Reductions</td>
                                <td>-11.1</td>
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
                    <div className="last-updated">
                        LAST UPDATED: June 12, 2019
                    </div>
                    <div className="oc-link" href={void(0)}>
                        Review >
                    </div>
                </div>
                <div className='cb-right'>
                    <div className='table-responsive'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="tb-title">Certificate ID</th>
                                    <th className="tb-title">Type</th>
                                    <th className="tb-title">Unit</th>
                                    <th className="tb-title">Status</th>
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
                    <div className="oc-link" href={void(0)}>
                        Review >
                    </div>
                </div>
            </div>
        </ReviewSection>
    );
};

export default CarbonBalance;