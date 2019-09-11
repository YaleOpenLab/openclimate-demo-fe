import React from 'react';
import "./InfoItem.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InfoItem = ({title, description, image, icon}) => {
    return (
        <div className="info-item">
            {image && <div className="image">
                <img src={image} alt="geo-icon"/>
            </div>}
            <div className="content">
                <div className="text">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="icon-div">
                    {icon && <FontAwesomeIcon
                        icon={icon}
                        className={`icon`}
                    />}
                </div>
            </div>
        </div>
    )
};

export default InfoItem;