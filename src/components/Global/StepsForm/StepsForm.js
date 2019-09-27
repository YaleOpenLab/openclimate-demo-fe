import React from "react";
import "./StepsForm.scss";
import StepsFormHeader from "./StepsFormHeader/StepsFormHeader";

const StepsForm = ({ tabs, step, children }) => {
  let content = null;

  if (!children) {
    return <div>empty form</div>;
  } else {
    content = children.find(item => {
      return parseInt(item.key) === step;
    });
  }

  return (
    <div className="MultiSteps">
      <div className="solar-form">
        <div className="container">
          <StepsFormHeader
            tabs={tabs}
            active={step}
          />
        </div>
        <div className="col-12 mx-auto">
          <div className="row  justify-content-center">
            <div className="col-12">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsForm;
