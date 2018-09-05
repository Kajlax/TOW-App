import { call, put } from 'redux-saga/effects';
import WorkoutActions from '../../redux/reducers/workoutRedux';

export function* getWorkouts(api, action) {
  let response = null;
  
  response = yield call(api.getFilteredWorkouts, action.filters, action.difficulty);

  if(response.ok) {
    yield put(WorkoutActions.fetchWorkoutsSuccess(response.data));
  } else {

    let error = {
      error: true,
    };
    if(response.data.message) {
      error.message = response.data.message;
    }

    yield put(WorkoutActions.fetchWorkoutsError(error));
  }
}