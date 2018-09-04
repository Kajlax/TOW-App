import React from "react";
import { connect } from 'react-redux';
import Layout from "../Layout";
import ChallengeActions from '../../redux/reducers/challengeRedux';
import Loading from '../Loading';
import ThankYou from "./ThankYou";
import Form from './Form';

class SubmitFrom extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      title: "",
      submitter: "",
      submitType: "",
      submitDescription: "",
      formValid: false,
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
      formValid: false,
      title: "",
      submitType: "",
      submitDescription: "",
      submitter: "",
    });

    this.props.resetFormRedux();
  };

  renderForm() {
    const {
      title,
      submitter,
      submitType,
      submitDescription,
      formValid,
    } = this.state;
    const { result, error } = this.props;

    if (!result) {
      return(
        <Form
          error={error}
          title={title}
          submitter={submitter}
          submitType={submitType}
          submitDescription={submitDescription}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formValid={formValid}
        />
      );
    } else {
      return(
        <ThankYou resetForm={this.resetForm} />
      );
    }
  }

  render() {
    const { sending } = this.props;
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
  resetFormRedux: () => dispatch(ChallengeActions.suggestFormReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitFrom);