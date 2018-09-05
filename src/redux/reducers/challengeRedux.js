import { createReducer, createActions } from 'reduxsauce';
import produce from 'immer';

const { Types, Creators } = createActions({
  fetchChallenges: null,
  fetchChallengesSuccess: ['result'],
  fetchChallengesError: ['error'],
  suggestRequest: ['data'],
  suggestRequestSuccess: ['result'],
  suggestRequestError: ['error'],
  suggestFormReset: null,
});

export const ChallengeTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  challenges: [],
  fetching: false,
  sending: false,
  result: null,
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

export const suggestRequest = (state, { data }) => {
  return produce(state, draft => {
    draft.sending = true;
    draft.error = null;
  });
}

export const suggestRequestSuccess = (state, { result }) => {
  return produce(state, draft => {
    draft.sending = false;
    draft.error = null;
    draft.result = result;
  });
}

export const suggestRequestError = (state, { error }) => {
  return produce(state, draft => {
    draft.sending = false;
    draft.error = error;
  });
}

export const suggestFormReset = state => {
  return produce(state, draft => {
    draft.sending = false;
    draft.error = null;
    draft.result = null;
  });
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_CHALLENGES]: fetchChallenges,
  [Types.FETCH_CHALLENGES_SUCCESS]: fetchChallengesSuccess,
  [Types.FETCH_CHALLENGES_ERROR]: fetchChallengesError,
  [Types.SUGGEST_REQUEST]: suggestRequest,
  [Types.SUGGEST_REQUEST_SUCCESS]: suggestRequestSuccess,
  [Types.SUGGEST_REQUEST_ERROR]: suggestRequestError,
  [Types.SUGGEST_FORM_RESET]: suggestFormReset,
});
