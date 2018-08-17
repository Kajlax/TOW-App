import { call, put } from 'redux-saga/effects';
import VoteActions from '../../redux/reducers/voteRedux';
import ChallengeActions from '../../redux/reducers/challengeRedux';
import WorkoutsetActions from '../../redux/reducers/workoutsetRedux';

export function* updateVote(api, action) {
  let response = null;

  if(action.mode === 'up') {
    response = yield call(api.voteUp, action.id);
  } else {
    response = yield call(api.voteDown, action.id);
  }

  // todo refresh state with result object
  if(response.ok) {
    if(response.data.workouttype === 'challenge') {
      yield put(ChallengeActions.fetchChallenges());
    }
    if(response.data.workouttype === 'workout') {
      yield put(WorkoutsetActions.fetchWorkoutsets());
    }
  }

  yield put(VoteActions.votesUpdated());
}