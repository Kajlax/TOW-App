import React from "react";
import { connect } from 'react-redux';
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
import ChallengeActions from '../../redux/reducers/challengeRedux';
import Loading from '../Loading';

const typeOptions = [
  { key: "challenge", text: "Challenge", value: "challenge" },
  { key: "workout", text: "Workout", value: "workout" }
];

class SubmitFrom extends React.PureComponent {
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
      this.state.title !== "" &&
      this.state.submitter !== "" &&
      this.state.submitType !== "" &&
      this.state.submitDescription !== ""
    )
      this.setState({ formValid: true });
  };

  handleSubmit = () => {
    const { title, submitter, submitType, submitDescription } = this.state;
    const { sendSuggest } = this.props;
    

    this.setState({
      title: title,
      submitter: submitter,
      submitType: submitType,
      submitDescription: submitDescription,
      isSubmitted: true
    });
    const suggestData = {
      type: submitType,
      message: submitDescription,
      submitter,
      title,
    }

    sendSuggest(suggestData);
  };

  resetForm = () => {
    this.setState({
      isSubmitted: false,
      formValid: false,
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
    } = this.state;
    const { result, error } = this.props;

    let form;

    if (!result) {
      form = (
        <React.Fragment>
          <Header
            as="h2"
            content="Submit a challenge or workout"
            textAlign="center"
            color="teal"
          />
          {error}
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
              placeholder="Describe the challenge/workout. Exercises, reps, rounds and a short description..."
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
    const { sending } = this.props;
    console.log(sending);
    return(<Layout {...this.props}>
            { sending ? 
              <Loading />
              :this.renderForm()}
          </Layout>)
  }
}
const mapStateToProps = (state) => ({
  sending: state.challenge.sending,
  error: state.challenge.error,
  result: state.challenge.result,
});

const mapDispatchToProps = (dispatch) => ({
  sendSuggest: (data) => dispatch(ChallengeActions.suggestRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitFrom);