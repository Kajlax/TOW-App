import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  fetchChallenges: null,
  fetchChallengesSuccess: ['result'],
  fetchChallengesError: ['error'],
});

export const ChallengeTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  challenges: [],
  fetching: false,
  error: null,
}

export const fetchChallenges = (state) => {
  return produce(state, draft => {
    draft.fetching = true;
    draft.error = null;
  });
}

export const fetchChallengesSuccess = (state, { result }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.challenges = result;
  });
}

export const fetchChallengesError = (state, { error }) => {
  return produce(state, draft => {
    draft.fetching = false;
    draft.error = error;
  });
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_CHALLENGES]: fetchChallenges,
  [Types.FETCH_CHALLENGES_SUCCESS]: fetchChallengesSuccess,
  [Types.FETCH_CHALLENGES_ERROR]: fetchChallengesError,
});
