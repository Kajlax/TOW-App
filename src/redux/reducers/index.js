import { combineReducers } from "redux";

export default combineReducers({
  search: require("./searchRedux").reducer,
  challenge: require("./challengeRedux").reducer,
  vote: require("./voteRedux").reducer,
  favourite: require("./favouriteRedux").reducer,
  workoutset: require("./workoutsetRedux").reducer,
  workout: require("./workoutRedux").reducer,
  savedworkout: require("./savedworkoutRedux").reducer
});
