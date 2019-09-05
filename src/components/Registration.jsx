import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";


export default class Registration extends React.Component {
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
        </div>);
    }
}