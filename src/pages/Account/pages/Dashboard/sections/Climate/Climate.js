import React from 'react';
import ClimateData from "../../../../../../assets/images/temp/climate-data.png";
import Rating from "../../Rating/Rating";
import InfoPanel from "../../InfoPanel/InfoPanel";

const Climate = () => {
    return (
        <InfoPanel title='Climate Accountability'>
            <div className="climate-accountability">
                <div className='ip-section ip-separator'>
                    <div className="image">
                        <img src={ClimateData} alt="climate data"/>
                    </div>
                    <div className="description">
                        The diagram represents what % of climate actions can be directly tracked through
                        verifiable MRV methods and linked devices, versus those that have been reported
                        but have no trackable link.
                    </div>
                    <div className="see-more">
                        <a href={void (0)} className="oc-link">
                            Learn more >
                        </a>
                    </div>
                </div>
                <div className='ip-section'>
                    <h4>Weighted Score</h4>
                    <Rating rated={2} style={{margin: '5px 0'}}/>
                    <div className="description">
                        The weighted score considered the accountability % and the amount of data issues and disputed
                        the organization has on a yearly basis.
                    </div>
                    <div className="see-more">
                        <a href={void (0)} className="oc-link">
                            View All >
                        </a>
                    </div>
                    <div className="actions">
                        <a href={void (0)} className="oc-link">
                            Add
                        </a>
                        <span>|</span>
                        <a href={void (0)} className="oc-link">
                            Edit
                        </a>
                        <span>|</span>
                        <a href={void (0)} className="oc-link">
                            Export
                        </a>
                    </div>
                </div>
            </div>
        </InfoPanel>
    )
};

export default Climate;