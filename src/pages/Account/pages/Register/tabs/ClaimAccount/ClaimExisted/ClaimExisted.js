import React from "react";
import { Button } from "../../../../../../../components/UI";

const ClaimExisted = ({data, continueAction, changeAccount}) => {
  const handleAccountChange = (name) => {
    changeAccount(name);
    continueAction(2);
  };

  return (
    <div className='claim-existed'>
      <p className="description">
        We have public data in our records associated with the following entities whose names are close to the one you
        entered. Are you trying to register one of the following accounts?
      </p>
      <div className="actions">
        {
          data.map((item, i) => {
            return <Button key={i} onClick={() => handleAccountChange(item)}>{item}</Button>
          })
        }
        <Button variant='reverse' onClick={() => continueAction(2)}>None of the above</Button>
      </div>
    </div>
  );
};

export default ClaimExisted;
