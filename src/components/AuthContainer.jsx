import React from "react";
import { connect } from "react-redux";
import {setEmailText, setPassword} from '../store/auth/actions';
import Auth from './Auth';





 class AuthContainer extends React.Component {
  render() {
    return (
        <Auth email={this.props.email} password={this.props.password} setEmailText={this.props.setEmailText} setPassword={this.props.setPassword}/>
    );
  }
}
const mapStateToProps = state=>{
    return {
      email:state.auth.email,
      password:state.auth.password
    };
}


const mapDispatchToProps ={
  setEmailText,
  setPassword
 };
export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);