import apisauce from 'apisauce';

const baseURL = 'https://api.tribeofwolvesapp.com';
// const baseURL = 'https://evolve-fitness-staging.herokuapp.com';


const create = () => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000,
  });


  const getWorkouts = () => api.get('/workout/');
  const getFilteredWorkouts = (tags, difficulty) => api.post('/workout/filter', { tags, difficulty });
  const getChallenges = () => api.get('/challenge/');
  const getWorkoutsets = () => api.get('/workoutset/');
  const voteUp = (id) => api.post(`/challenge/${id}/voteup`);
  const voteDown = (id) => api.post(`/challenge/${id}/votedown`);
  const suggestWorkout = (data) => api.post('/challenge/suggest', data);
  const saveGeneratedWorkout = (data) => api.post('/savedworkout', data);
  const getGeneratedWorkout = (name) => api.get(`/savedworkout/${name}`);

  return {
    getChallenges,
    getWorkoutsets,
    voteUp,
    voteDown,
    getWorkouts,
    getFilteredWorkouts,
    suggestWorkout,
    saveGeneratedWorkout,
    getGeneratedWorkout,
  }
};

export default {
  create,
}