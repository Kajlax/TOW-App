import { call, put } from 'redux-saga/effects';
import WorkoutsetActions from '../../redux/reducers/workoutsetRedux';

export function* getWorkoutsets(api, action) {
  const response = yield call(api.getWorkoutsets);
  if(response.ok) {
    yield put(WorkoutsetActions.fetchWorkoutsetsSuccess(response.data));
  } else {

    let error = {
      error: true,
    };
    if(response.data.message) {
      error.message = response.data.message;
    }

    yield put(WorkoutsetActions.fetchWorkoutsetsError(error));
  }
}