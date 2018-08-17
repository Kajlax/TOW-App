import { call, put } from 'redux-saga/effects';
import ChallengeActions from '../../redux/reducers/challengeRedux';

export function* getChallenges(api, action) {
  const response = yield call(api.getChallenges);
  console.log(response);
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