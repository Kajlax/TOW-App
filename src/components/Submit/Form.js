import React from 'react';
import { Form, Header, Input, Select, TextArea } from 'semantic-ui-react';

const typeOptions = [
  { key: "challenge", text: "Challenge", value: "challenge" },
  { key: "workout", text: "Workout", value: "workout" }
];

export default class FormComponent extends React.PureComponent {
  render() {
    const { error, title, submitter, submitType, submitDescription, handleSubmit, handleChange, formValid } = this.props;
    return (
      <React.Fragment>
          <Header
            as="h2"
            content="Submit a challenge or workout"
            textAlign="center"
            color="teal"
          />
          {error}
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Title"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <Form.Field
                control={Input}
                label="Submitter"
                placeholder="Submitter"
                name="submitter"
                value={submitter}
                onChange={handleChange}
              />
              <Form.Field
                control={Select}
                label="Type"
                options={typeOptions}
                placeholder="Type of submit"
                name="submitType"
                value={submitType}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Describe the challenge/workout. Exercises, reps, rounds and a short description..."
              name="submitDescription"
              value={submitDescription}
              onChange={handleChange}
            />
            <Form.Button
              color="teal"
              content="Submit"
              disabled={!formValid}
            />
          </Form>
        </React.Fragment>
    )
  }
}