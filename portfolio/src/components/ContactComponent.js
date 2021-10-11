import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      Model: "",
      Year: "",
      email: "",
      message: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  render() {
    return (
      <div className="row row-content">
        <div className="col-12">
          <h2>Contact Us</h2>
          <hr />
        </div>
        <div className="col-md-10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="name" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default Contact;
