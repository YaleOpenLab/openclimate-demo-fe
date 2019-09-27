import React, { Component } from "react";
import "./AccountInfo.scss";
import AccountCity from "../../../../../../assets/images/account_city.svg";
import AccountCompany from "../../../../../../assets/images/account_company.svg";
import AccountNationState from "../../../../../../assets/images/account_nation_state.svg";
import AccountSubnational from "../../../../../../assets/images/account_subnational.svg";
import { Button, Input } from "../../../../../../components/UI";
import AccountType from "./AccountType/AccountType";
import { userAccountRegisterAddFields } from "../../../../../../components/Auth/store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AccountInfo extends Component {
  state = {
    activeActionType: ""
  };

  selectAccountType = (name) => {
    this.setState({ activeActionType: name });
  };

  handleAccountNameChange = e => {
    this.props.userAccountRegisterAddFields({ account_name: e.target.value });
  };

  handleContinue = () => {
    this.props.userAccountRegisterAddFields({ account_type: this.state.activeActionType });
    this.props.goNext();
  };

  render() {
    const { activeActionType } = this.state;

    return (
      <div className='account-info'>
        <div className="col-md-6 mx-auto content">
          <p className="description">Please fill out or verify the following account information:</p>
          <div className="account-info-section">
            <div className='label'>ACCOUNT NAME</div>
            <Input
              type='text'
              className='account-name'
              value={this.props.accountName}
              onChange={this.handleAccountNameChange}
            />
          </div>
          <div className="account-info-section">
            <div className='label'>ACCOUNT TYPE</div>
            <div className="account-types">
              <AccountType
                image={AccountCompany}
                label='Company'
                name='accountCompany'
                onClick={this.selectAccountType}
                active={activeActionType}
              />
              <AccountType
                image={AccountCity}
                label='City'
                name='accountCity'
                onClick={this.selectAccountType}
                active={activeActionType}
              />
              <AccountType
                image={AccountNationState}
                label='Nation-State'
                name='accountNationState'
                onClick={this.selectAccountType}
                active={activeActionType}
              />
              <AccountType
                image={AccountSubnational}
                label='Subnational Region'
                name='accountSubnational'
                onClick={this.selectAccountType}
                active={activeActionType}
              />
            </div>
          </div>
          <div className="action">
            <Button
              disabled={activeActionType.length < 1}
              onClick={this.handleContinue}
              variant='primary'
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accountName: state.profile.register.fields.account_name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userAccountRegisterAddFields }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountInfo);

