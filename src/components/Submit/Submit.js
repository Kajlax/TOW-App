import React, { useReducer } from "react";
import { connect } from "react-redux";
import Layout from "../Layout";
import ChallengeActions from "../../redux/reducers/challengeRedux";
import Loading from "../Loading";
import ThankYou from "./ThankYou";
import Form from "./Form";

/**
 * Function that receives current state and action. Returns new state.
 * @param {*} state
 * @param {*} action
 */
function formReducer(state, action) {
  // reset form to initial state
  if (action.type === "reset") {
    return initialFormState;
  }
  // set given form value to state
  let newState = {
    ...state,
    [action.name]: action.value,
  };

  // check if all fields are filled and set formValid to true
  if (newState.title !== "" && newState.submitter !== "" && newState.submitType !== "" && newState.submitDescription !== "") {
    newState = {
      ...newState,
      formValid: true,
    };
  }

  return newState;
}

const initialFormState = {
  title: "",
  submitter: "",
  submitType: "",
  submitDescription: "",
  formValid: false,
};

const SubmitFrom = props => {
  const { sending, result, error, sendSuggest, resetFormRedux } = props;
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const { title, submitter, submitType, submitDescription, formValid } = state;

  const handleSubmit = () => {
    sendSuggest({
      type: submitType,
      message: submitDescription,
      submitter,
      title,
    });
  };

  const resetForm = () => {
    dispatch({ type: "reset" });
    resetFormRedux();
  };

  const renderFormComponent = () => {
    if (!result) {
      return (
        <Form
          error={error}
          title={title}
          submitter={submitter}
          submitType={submitType}
          submitDescription={submitDescription}
          handleSubmit={handleSubmit}
          handleChange={(e, { value, name }) => dispatch({ value, name })}
          formValid={formValid}
        />
      );
    } else {
      return <ThankYou resetForm={resetForm} />;
    }
  };

  return <Layout {...props}>{sending ? <Loading /> : renderFormComponent()}</Layout>;
};

const mapStateToProps = state => ({
  sending: state.challenge.sending,
  error: state.challenge.error,
  result: state.challenge.result,
});

const mapDispatchToProps = dispatch => ({
  sendSuggest: data => dispatch(ChallengeActions.suggestRequest(data)),
  resetFormRedux: () => dispatch(ChallengeActions.suggestFormReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitFrom);
