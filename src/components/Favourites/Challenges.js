import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Header, List } from "semantic-ui-react";
import ChallengeActions from "../../redux/reducers/challengeRedux";

class Challenges extends React.Component {
  componentDidMount() {
    const { challenges, getChallenges } = this.props;
    if (challenges.length === 0) {
      getChallenges();
    }
  }

  renderRows = () => {
    const { challenges, savedChallenges } = this.props;
    let savedModified = [];

    savedChallenges.map(i => {
      if (i !== 0) {
        savedModified.push(i);
      }
      return savedModified;
    });

    if (savedModified.length > 0) {
      return challenges.map(row => {
        if (savedModified.includes(row.id)) {
          return (
            <List.Item key={row.id}>
              <List.Icon
                name="heart outline"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header>
                  <Link to={`/challenges/${row.id}`}>{row.name}</Link>
                </List.Header>
                <List.Description>{row.submitter}</List.Description>
              </List.Content>
            </List.Item>
          );
        }
        return null;
      });
    } else {
      return <Header as="h2" subheader="You haven't added any favourites" />;
    }
  };

  render() {
    return (
      <List divided relaxed celled>
        {this.renderRows()}
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
