import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import ChallengeActions from "../../redux/reducers/challengeRedux";
import Loading from "../Loading";

class Challenges extends React.Component {
  componentDidMount() {
    const { challenges, getChallenges } = this.props;
    if (challenges.length === 0) {
      getChallenges();
    }
  }

  renderRows = () => {
    const { challenges } = this.props;
    console.log("Challenges-sivun, renderRows", challenges);
    return challenges.map(item => {
      return (
        <List.Item key={item.id}>
          <List.Icon name="heart outline" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header>
              <Link to={`/challenges/${item.id}`}>{item.name}</Link>
            </List.Header>
            <List.Description>{item.submitter}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  };

  render() {
    const { fetching, challenges } = this.props;
    return (
      <List divided relaxed celled>
        {!fetching && challenges.length > 0 ? this.renderRows() : <Loading />}
      </List>
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
