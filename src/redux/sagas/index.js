import { takeLatest, all } from 'redux-saga/effects';
import API from '../../api';

// types
import { ChallengeTypes } from '../reducers/challengeRedux';
import { WorkoutsetTypes } from '../reducers/workoutsetRedux';
import { VoteTypes } from '../reducers/voteRedux';

// sagas
import { getChallenges } from './challengeSagas';
import { getWorkoutsets } from './workoutsetSagas';
import { updateVote } from './voteSagas';

const api = API.create();

export default function* sagas() {
  yield all([
    takeLatest(ChallengeTypes.FETCH_CHALLENGES, getChallenges, api),
    takeLatest(VoteTypes.UPDATE_VOTES, updateVote, api),
    takeLatest(WorkoutsetTypes.FETCH_WORKOUTSETS, getWorkoutsets, api),
  ]);
}
