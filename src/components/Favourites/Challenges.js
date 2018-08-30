import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ChallengeActions from "../../redux/reducers/challengeRedux";
import Loading from "../Loading";

class Challenges extends React.Component {
  componentDidMount() {
    const { challenges, getChallenges } = this.props;
    if (challenges.length === 0) {
      getChallenges();
    }
  }

  renderComponent = () => {
    const { challenges } = this.props;

    return (
      <div>
        <Link to={`/challenges/${challenges.id}`}>{challenges[0].name}</Link>
      </div>
    );
  };

  render() {
    const { fetching, challenges } = this.props;
    return (
      <div>
        {!fetching && challenges.length > 0 ? (
          this.renderComponent()
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challenges: state.challenge.challenges,
  fetching: state.challenge.fetching,
  error: state.challenge.error
});

const mapDispatchToProps = dispatch => ({
  getChallenges: () => dispatch(ChallengeActions.fetchChallenges())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenges);
