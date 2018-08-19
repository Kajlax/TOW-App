import { call, put } from 'redux-saga/effects';
import ChallengeActions from '../../redux/reducers/challengeRedux';

export function* getChallenges(api, action) {
  const response = yield call(api.getChallenges);
  if(response.ok) {
    yield put(ChallengeActions.fetchChallengesSuccess(response.data));
  } else {

    let error = {
      error: true,
    };
    if(response.data.message) {
      error.message = response.data.message;
    }

    yield put(ChallengeActions.fetchChallengesError(error));
  }
}

export function* suggestWorkout(api, action) {
  const response = yield call(api.suggestWorkout, action.data);

  if(response.ok) {
    yield put(ChallengeActions.suggestRequestSuccess(response.ok));
  } else {
    yield put(ChallengeActions.suggestRequestError(response.data.message ? response.data.message : 'Error'));
  }
}