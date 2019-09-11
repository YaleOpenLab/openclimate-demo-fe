import React from "react";
import "./ReviewSection.scss";

const ReviewSection = ({title, image, children}) => {
    return (
        <div className='review-section'>
            <h3>{title}</h3>
            <div className="review-section-body">
                <div className="image">
                    <img src={image} alt="review"/>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default ReviewSection;