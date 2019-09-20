import React from "react";

const AccountType = ({image, active, onClick, name, label}) => {
  return (
    <div className="account-type-item-container">
      <div className={`account-type-item ${active === name ? '-selected' : ''}`} onClick={() => onClick(name)}>
        <img src={image} alt="account type"/>
      </div>
      <div className="account-type-title">
        {label}
      </div>
    </div>
  )
};

export default AccountType;
