import React from "react";
import "./Container.scss";

const Container = ({
  leftBar,
  fluid,
  placeholder,
  rightBar,
  sideBarSize,
  className,
  children
}) => {
  const complex = !!(leftBar || rightBar);
  return (
    <div
      className={`${placeholder ? "custom-container" : ""} ${
        className ? className : ""
      } ${complex || fluid ? "container-fluid" : "container"}`}
    >
      {complex ? (
        <div className="row py-3">
          <div
            className={`col-md-${sideBarSize ? sideBarSize.toString() : "2"}`}
          >
            {leftBar}
          </div>
          <div className="col">{children}</div>
          <div
            className={`col-md-${sideBarSize ? sideBarSize.toString() : "2"}`}
          >
            {rightBar}
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Container;
