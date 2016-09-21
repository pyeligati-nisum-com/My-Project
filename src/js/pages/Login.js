import React from "react";
import { Form, FormGroup, FormControl , Col, Button, ControlLabel, Checkbox} from "react-bootstrap";
export default class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }
   changeTitle(title) {
    this.setState({title});
  }
  handleChange(e) {
    const title = document.getElementById("Feed").value;
    this.setState({title});
    console.log(this.state.title)
    
   }

  render() {
    const containerStyle = {
      "float": "right"
    };
    
    console.log("home");
    return (
      <div>
        <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>
        ​
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
        ​
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
        ​
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
      </div>
    );
  }
}
