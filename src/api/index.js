import apisauce from 'apisauce';

const baseURL = 'https://evolve-fitness.herokuapp.com';

const create = () => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000,
  });


  const getChallenges = () => api.get('/challenge/');

  return {
    getChallenges,
  }
};

export default {
  create,
}