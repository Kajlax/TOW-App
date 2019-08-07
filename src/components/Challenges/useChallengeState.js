import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeActions from "../../redux/reducers/challengeRedux";
import VoteActions from "../../redux/reducers/voteRedux";
import FavouriteActions from "../../redux/reducers/favouriteRedux";

const useChallengeState = () => {
  const challenges = useSelector(state => state.challenge.challenges);
  const fetching = useSelector(state => state.challenge.fetching);
  const error = useSelector(state => state.challenge.error);
  const myVotes = useSelector(state => state.vote.myVotes);
  const myFavourites = useSelector(state => state.favourite.challenges);

  const dispatch = useDispatch();

  const getChallenges = useCallback(() => dispatch(ChallengeActions.fetchChallenges()), [dispatch]);
  const updateVotes = useCallback((id, mode) => dispatch(VoteActions.updateVotes(id, mode)), [dispatch]);
  const updateFavourites = useCallback((id, defaultRating) => dispatch(FavouriteActions.updateChallenges(id, defaultRating)), [dispatch]);

  const state = {
    challenges,
    fetching,
    error,
    myVotes,
    myFavourites,
  };

  const actions = {
    getChallenges,
    updateVotes,
    updateFavourites,
  };

  return [state, actions];
};

export default useChallengeState;
