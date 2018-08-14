import React from "react";
import Layout from "../Layout";
import {
  Button,
  Form,
  Header,
  Input,
  Select,
  TextArea
} from "semantic-ui-react";

const options = [
  { key: "challenge", text: "Challenge", value: "challenge" },
  { key: "workout", text: "Workout", value: "workout" }
];

export default class Submit extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2" content="Submit" textAlign="center" />

        <Form>
          <Form.Group widths="equal">
            <Form.Field control={Input} label="Title" placeholder="Title" />
            <Form.Field
              control={Input}
              label="Submitter"
              placeholder="Submitter"
            />
            <Form.Field
              control={Select}
              label="Type"
              options={options}
              placeholder="Type of submit..."
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Description"
            placeholder="Describe the workout/challenge. Exercises, reps and rounds..."
          />
          <Form.Field control={Button} color="teal">
            Submit
          </Form.Field>
        </Form>
      </Layout>
    );
  }
}
