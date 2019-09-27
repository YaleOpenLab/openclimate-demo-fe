import React from "react";
import "./StepsFormHeader.scss";

const StepsFormHeader = ({tabs, active}) => {
  let items = null;

  if (tabs) {
    const length = tabs.length;
    items = tabs.map((item, i) => {
      let count = i + 1;
      if (length === count) {
        return (
          <React.Fragment key={item.key}>
            <div className="steps-box steps-last-box">
              <div
                className={
                  active === count ? "steps-active" : "steps-inactive"
                }
              />
              <div
                className={`steps-title ${
                  active === count
                    ? "steps-active-title"
                    : "steps-inactive-title"
                  }`}
              >
                {item.name}
              </div>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={item.key}>
            <div
              className={`steps-box ${count === 1 ? "steps-first-box" : ""}`}
            >
              <div
                className={
                  active === count ? "steps-active" : "steps-inactive"
                }
              />
              <div
                className={`steps-title ${
                  active === count
                    ? "steps-active-title"
                    : "steps-inactive-title"
                  }`}
              >
                {item.name}
              </div>
            </div>
            <span className="divider" />
          </React.Fragment>
        );
      }
    });
  }

  return (
    <div className="col-12 mx-auto">
      <div className="row steps-form-header">
        <div className="col-12 mx-auto">
          <div
            className='steps-container'
          >
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsFormHeader;
