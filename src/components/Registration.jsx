import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";


export default class Registration extends React.Component {
  constructor(props){
    super(props)


    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this)
  }
  onEmailChange(event){
    this.props.setEmailText(event.target.value);
  }

  onPasswordChange(event){
    this.props.setPassword(event.target.value);
  }
  onRepeatPasswordChange(event){
    this.props.setRepeatPassword(event.target.value);
  }
    render(){
        return(<div className="col SigUp">
        <Form className="form-singin">
            <FormGroup>
              <Label >Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
                value = {this.props.email}
                onChange={this.onEmailChange}
              />
               <Label>Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
                value={this.props.password}
                onChange={this.onPasswordChange}
              />
              <Label>Repeat-Password</Label>
               <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="repet-password"
                value={this.props.repeatPassword}
                onChange={this.onRepeatPasswordChange}
              />
            </FormGroup>
            <Button color="primary" className="btnSingIn">SigUp</Button>
           
          </Form>
        </div>);
    }
}