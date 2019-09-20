import React from "react";
import { Button } from "../../../../../../../components/UI";

const CreateNew = ({account, goNext}) => {
  return (
    <div className='create-new'>
      <p className="description">
        It looks like we have no records associated with:
      </p>
      <p className='account-value'>
        {account}
      </p>
      <p className="description">
        Please review the account name carefully. Is the spelling correct?
      </p>
      <div className="actions">
        <Button onClick={goNext}>Continue</Button>
      </div>
    </div>
  );
};

export default CreateNew;
