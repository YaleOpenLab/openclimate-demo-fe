import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import StepsForm from "../../../../components/Global/StepsForm/StepsForm";
import { Button } from "../../../../components/UI";

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
          <div key={1}>
          </div>
          <div key={2}>
          </div>
          <div key={3}>
          </div>
          <div key={4}>
          </div>
          <div key={5}>
          </div>
        </StepsForm>
      </Container>
    )
  }
}

export default Register;
