import { call, put } from 'redux-saga/effects';
import VoteActions from '../../redux/reducers/voteRedux';
import ChallengeActions from '../../redux/reducers/challengeRedux';

export function* updateVote(api, action) {
  let response = null;

  if(action.mode === 'up') {
    response = yield call(api.voteUp, action.id);
  } else {
    response = yield call(api.voteDown, action.id);
  }

  if(response.ok) {
    if(response.data.workouttype === 'challenge') {
      yield put(ChallengeActions.fetchChallenges());
    }
  }

  yield put(VoteActions.votesUpdated());
}