import React from "react";
import Layout from "../Layout";
import {
  Button,
  Form,
  Segment,
  Header,
  Input,
  Select,
  TextArea
} from "semantic-ui-react";

const typeOptions = [
  { key: "challenge", text: "Challenge", value: "challenge" },
  { key: "workout", text: "Workout", value: "workout" }
];

export default class SubmitFrom extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      title: "",
      submitter: "",
      submitType: "",
      submitDescription: "",
      formValid: false,
      isSubmitted: false
    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    if (
      this.state.title.value === !"" &&
      this.state.submitter === !"" &&
      this.state.submitType === !"" &&
      this.state.submitDescription === !""
    )
      this.setState({ formValid: true });
  };

  handleSubmit = () => {
    const { title, submitter, submitType, submitDescription } = this.state;

    this.setState({
      title: title,
      submitter: submitter,
      submitType: submitType,
      submitDescription: submitDescription,
      isSubmitted: true
    });
  };

  resetForm = () => {
    this.setState({
      isSubmitted: false,
      title: "",
      submitType: "",
      submitDescription: ""
    });
  };

  renderForm() {
    const {
      title,
      submitter,
      submitType,
      submitDescription,
      isSubmitted
    } = this.state;
    let form;

    if (isSubmitted === false) {
      form = (
        <React.Fragment>
          <Header
            as="h2"
            content="Submit a challenge or workout"
            textAlign="center"
            color="teal"
          />
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Title"
                placeholder="Title"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Input}
                label="Submitter"
                placeholder="Submitter"
                name="submitter"
                value={submitter}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Select}
                label="Type"
                options={typeOptions}
                placeholder="Type of submit"
                name="submitType"
                value={submitType}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Describe the workout/challenge. Exercises, reps, rounds and a short description..."
              name="submitDescription"
              value={submitDescription}
              onChange={this.handleChange}
            />
            <Form.Button
              color="teal"
              content="Submit"
              disabled={!this.state.formValid}
            />
          </Form>
        </React.Fragment>
      );
    } else {
      form = (
        <React.Fragment>
          <Header as="h2" content="Thank you" textAlign="center" color="teal" />
          <Segment basic textAlign="center">
            <Header
              as="h2"
              subheader="Submit sent successfully. Your submit will go through a moderating process before publishing."
            />
            <br />
            <Button
              onClick={() => this.resetForm()}
              content="Submit new"
              color="teal"
            />
          </Segment>
        </React.Fragment>
      );
    }
    return form;
  }

  render() {
    return <Layout {...this.props}>{this.renderForm()}</Layout>;
  }
}
