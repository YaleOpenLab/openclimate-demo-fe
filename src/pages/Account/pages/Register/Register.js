import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import StepsForm from "../../../../components/Global/StepsForm/StepsForm";
import "./Register.scss";
import ClaimAccount from "./tabs/ClaimAccount/ClaimAccount";
import UserInfo from "./tabs/UserInfo/UserInfo";
import AccountInfo from "./tabs/AccountInfo/AccountInfo";
import Verification from "./tabs/Verification/Verification";
import Review from "./tabs/Review/Review";
import { Http } from "../../../../services/Http";

const PAGES = [
  { name: "claim an account", key: 1 },
  { name: "your information", key: 2 },
  { name: "account information", key: 3 },
  { name: "verification documents", key: 4 },
  { name: "review & submit", key: 5 },
];

class Register extends Component {
  state = {
    step: 1,
  };

  goNext = () => {
    if (this.state.step < PAGES.length) {
      this.setState(prevState => ({
        step: prevState.step + 1
      }));
    }
  };

  goBack = () => {
    if (this.state.step > 1) {
      this.setState(prevState => ({
        step: prevState.step - 1
      }));
    }
  };

  render() {
    return (
      <Container placeholder>
        <StepsForm
          tabs={PAGES}
          step={this.state.step}
        >
          <section className='register-section' key={1}>
            <ClaimAccount goNext={this.goNext}/>
          </section>
          <section className='register-section' key={2}>
            <UserInfo goNext={this.goNext}/>
          </section>
          <section className='register-section' key={3}>
            <AccountInfo goNext={this.goNext}/>
          </section>
          <section className='register-section' key={4}>
            <Verification goNext={this.goNext}/>
          </section>
          <section className='register-section' key={5}>
            <Review/>
          </section>
        </StepsForm>
      </Container>
    )
  }
}

export default Register;
