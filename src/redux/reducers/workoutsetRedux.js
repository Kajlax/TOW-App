import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  fetchWorkoutsets: null,
  fetchWorkoutsetsSuccess: ['result'],
  fetchWorkoutsetsError: ['error'],
  updateScore2: ['id', 'score'],
});

export const WorkoutsetTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  workoutsets: [],
  fetching: false,
  error: null,
}

export const fetchWorkoutsets = (state) => {
  return produce(state, draft => {
    draft.fetching = true;
    draft.error = null;
  });
}

export const fetchWorkoutsetsSuccess = (state, { result }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.workoutsets = result;
  });
}

export const fetchWorkoutsetsError = (state, { error }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.error = error;
  });
}

export const updateScore2 = (state, { id, score }) => {
  const index = state.workoutsets.findIndex(c => c.id === id);

  return produce(state, draft => {
    draft.workoutsets[index].score = score;
  });
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_WORKOUTSETS]: fetchWorkoutsets,
  [Types.FETCH_WORKOUTSETS_SUCCESS]: fetchWorkoutsetsSuccess,
  [Types.FETCH_WORKOUTSETS_ERROR]: fetchWorkoutsetsError,
  [Types.UPDATE_SCORE2]: updateScore2,
});
