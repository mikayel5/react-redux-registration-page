import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";

export default class Auth extends React.Component {
  render() {
    return (
        <div className="col SingIn">
          <Form className="form-singin">
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
              />
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
              />
            </FormGroup>
            <Button color="primary" className="btnSingIn">
              SingIn
            </Button>
          </Form>
        </div>
    );
  }
}
