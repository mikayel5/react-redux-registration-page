import React from "react";
import "./App.css";

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div className="SingInSigUp container">
        <div className="row justify-content-center">
          <div className="col SingIn">
            <Form className="form-singin">
              <FormGroup>
                <Label >Email</Label>
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
              <Button color="primary" className="btnSingIn">SingIn</Button>
             
            </Form>
          </div>
          <div className="col SigUp">
          <Form className="form-singin">
              <FormGroup>
                <Label >Email</Label>
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
                <Label>Repeat-Password</Label>
                 <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="repet-password"
                />
              </FormGroup>
              <Button color="primary" className="btnSingIn">SigUp</Button>
             
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
