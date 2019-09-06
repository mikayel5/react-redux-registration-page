import React from "react";
import { connect } from "react-redux";
import {
  setEmailText,
  setPassword,
  setRepeatPassword
} from "../store/registration/actions";
import Registration from "./Registration";

class RegistrationContainer extends React.Component {
  render() {
    return (
      <Registration
        email={this.props.email}
        password={this.props.password}
        repeatPassword={this.props.repeatPassword}
        setEmailText={this.props.setEmailText}
        setPassword={this.props.setPassword}
        setRepeatPassword={this.props.setRepeatPassword}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state.registration.email,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword
  };
};

const mapDispachToProps = {
  setEmailText,
  setPassword,
  setRepeatPassword
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(RegistrationContainer);
