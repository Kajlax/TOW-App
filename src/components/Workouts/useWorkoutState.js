import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutsetActions from "../../redux/reducers/workoutsetRedux";
import VoteActions from "../../redux/reducers/voteRedux";
import FavouriteActions from "../../redux/reducers/favouriteRedux";

const useWorkoutState = () => {
  const dispatch = useDispatch();
  const workoutsets = useSelector(state => state.workoutset.workoutsets);
  const fetching = useSelector(state => state.workoutset.fetching);
  const myVotes = useSelector(state => state.vote.myVotes);
  const myFavourites = useSelector(state => state.favourite.workouts);

  const getWorkoutSets = useCallback(() => dispatch(WorkoutsetActions.fetchWorkoutsets()), [dispatch]);
  const updateVotes = useCallback((id, mode) => dispatch(VoteActions.updateVotes(id, mode)), [dispatch]);
  const updateFavourites = useCallback((id, defaultRating) => dispatch(FavouriteActions.updateWorkouts(id, defaultRating)), [dispatch]);

  const state = {
    workoutsets,
    fetching,
    myVotes,
    myFavourites,
  };

  const actions = {
    getWorkoutSets,
    updateVotes,
    updateFavourites,
  };

  return [state, actions];
};

export default useWorkoutState;
