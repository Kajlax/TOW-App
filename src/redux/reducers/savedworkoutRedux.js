import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  fetchSavedWorkout: ['name'],
  fetchSavedWorkoutSuccess: ['result'],
  fetchSavedWorkoutError: ['error'],
});

export const SavedWorkoutTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  workout: {},
  fetching: false,
  error: null,
}

export const fetchSavedWorkout = (state) => {
  return produce(state, draft => {
    draft.fetching = true;
    draft.error = null;
  });
}

export const fetchSavedWorkoutSuccess = (state, { result }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.workout = result;
  });
}

export const fetchSavedWorkoutError = (state, { error }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.error = error;
  });
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_SAVED_WORKOUT]: fetchSavedWorkout,
  [Types.FETCH_SAVED_WORKOUT_SUCCESS]: fetchSavedWorkoutSuccess,
  [Types.FETCH_SAVED_WORKOUT_ERROR]: fetchSavedWorkoutError,
});
