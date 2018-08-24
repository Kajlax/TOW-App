import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  fetchSavedWorkout: ['name'],
  fetchSavedWorkoutSuccess: ['result'],
  fetchSavedWorkoutError: ['error'],
  createSavedWorkout: ['data'],
  createSavedWorkoutSuccess: ['result'],
  createSavedWorkoutError: ['error'],
  resetSavedWorkout: null,
});

export const SavedWorkoutTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  workout: {},
  fetching: false,
  error: null,
  saving: false,
  newWorkout: {},
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

export const createSavedWorkout = (state) => {
  return produce(state, draft => {
    draft.saving = true;
    draft.error = null;
  });
}

export const createSavedWorkoutSuccess = (state, { result }) => {
  return produce(state, draft => {
    draft.saving = false;
    draft.newWorkout = result;
  });
}

export const createSavedWorkoutError = (state, { error }) => {
  return produce(state, draft => {
    draft.saving = false;
    draft.error = error;
  });
}

export const resetSavedWorkout = (state) => {
  return INITIAL_STATE;
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_SAVED_WORKOUT]: fetchSavedWorkout,
  [Types.FETCH_SAVED_WORKOUT_SUCCESS]: fetchSavedWorkoutSuccess,
  [Types.FETCH_SAVED_WORKOUT_ERROR]: fetchSavedWorkoutError,
  [Types.CREATE_SAVED_WORKOUT]: createSavedWorkout,
  [Types.CREATE_SAVED_WORKOUT_SUCCESS]: createSavedWorkoutSuccess,
  [Types.CREATE_SAVED_WORKOUT_ERROR]: createSavedWorkoutError,
  [Types.RESET_SAVED_WORKOUT]: resetSavedWorkout,
});
