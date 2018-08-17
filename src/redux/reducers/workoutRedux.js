import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const { Types, Creators } = createActions({
  updateFilters: ['value'],
  fetchWorkouts: ['filters'],
  fetchWorkoutsSuccess: ['result'],
  fetchWorkoutsError: ['error'],
});

export const WorkoutTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  workouts: [],
  filters: [],
  fetching: false,
  error: null,
}

export const updateFilters = (state, { value }) => {
  const filters = state.filters;

  if (filters.includes(value)) {
    return produce(state, draft => {
      draft.filters = state.filters.filter(i => value !== i);
    });
  } else {
    return produce(state, draft => {
      draft.filters.push(value);
    });
  }
};

export const fetchWorkouts = (state, { filters }) => {
  return produce(state, draft => {
      draft.fetching = true;
      draft.error = null;
  });
}

export const fetchWorkoutsSuccess = (state, { result }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.workouts = shuffle(result);
  });
}

export const fetchWorkoutsError = (state, { error }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.error = error;
  });
}

export const reducer = createReducer(INITIAL_STATE, {
 [Types.UPDATE_FILTERS]: updateFilters,
 [Types.FETCH_WORKOUTS]: fetchWorkouts,
 [Types.FETCH_WORKOUTS_SUCCESS]: fetchWorkoutsSuccess,
 [Types.FETCH_WORKOUTS_ERROR]: fetchWorkoutsError,
});
