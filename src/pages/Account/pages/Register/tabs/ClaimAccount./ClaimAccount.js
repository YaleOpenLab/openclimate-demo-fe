import React, { useState } from "react";
import { Button, Input } from "../../../../../../components/UI";
import "./ClaimAccount.scss";
import { Http } from "../../../../../../services/Http";
import ClaimExisted from "./ClaimExisted/ClaimExisted";
import CreateNew from "./CreateNew/CreateNew";
import { userAccountRegisterAddFields } from "../../../../../../components/Auth/store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ClaimAccount = ({ goNext, userAccountRegisterAddFields }) => {
  const [accountName, setAccountName] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [accounts, setAccounts] = useState([]);
  let content = null;


  const updateField = e => {
    setAccountName(e.target.value);
  };

  const handleContinue = () => {
    Http.checkIfAccountNameExists(accountName).subscribe(result => {
      if (result.status) {
        setAccounts(result.data);
        setActiveTab(1);
      } else {
        setActiveTab(2);
      }
    });
  };

  const handleConfirmation = () => {
    userAccountRegisterAddFields({account_name: accountName});
    goNext();
  };

  switch(activeTab) {
    case(1):
      content = (<ClaimExisted data={accounts} continueAction={setActiveTab} changeAccount={setAccountName}/>);
      break;
    case(2):
      content = (<CreateNew account={accountName} goNext={handleConfirmation}/>);
      break;
    default:
      content = (
        <>
          <p>What is the name of the account that you would like to register?</p>
          <Input
            type='text'
            className='claim-input'
            name='accountName'
            placeholder='Account Name'
            value={accountName}
            onChange={updateField}
          />
          <div className="section-navigation">
            <Button onClick={handleContinue}>Continue</Button>
          </div>
        </>
      );
  }

  return (
    <div className='claim-account'>
      <div className="col-md-6 mx-auto content">
        {content}
      </div>
    </div>
  );
};

// export default ClaimAccount;
const mapStateToProps = state => ({
  error: state.explore.review.selected.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userAccountRegisterAddFields }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimAccount);

