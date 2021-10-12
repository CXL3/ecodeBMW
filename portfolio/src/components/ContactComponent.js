import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      model: "",
      year: "",
      email: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

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
                Your Name
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
            <FormGroup row>
              <Label htmlFor="name" md={2}>
                Your Email
              </Label>

              <Col md={10}>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="name" md={2}>
                Your BMW Model
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="model"
                  name="model"
                  placeholder="Your BMW Model"
                  value={this.state.model}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="name" md={2}>
                Production Year
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="year"
                  name="year"
                  placeholder="Your Car’s Production Year"
                  value={this.state.year}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="feedback" md={2}>
                Your Message
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  placeholder="How can I help you?"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default Contact;
