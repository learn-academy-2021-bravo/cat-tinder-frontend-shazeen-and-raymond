import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
      },
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
    console.log(this.state.form);
  };

  render() {
    return (
      <div className="main-containers">
        <h1>Create Cat New</h1>
        <Form>
          <FormGroup>
            <Label for="name">Cat's Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Type your cat's name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Cat's Age</Label>
            <Input
              type="number"
              name="age"
              id="age"
              placeholder="Type's your cat's age"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Cat's Enjoyment</Label>
            <Input
              type="enjoys"
              name="enjoys"
              id="enjoys"
              placeholder="What does your cat enjoy?"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
