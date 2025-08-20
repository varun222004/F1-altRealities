import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/f1', // ✅ corrected to match Express mount path
});

export const getSeasons = () => api.get('/seasons');
export const getCurrentDrivers = () => api.get('/drivers/current');
export const getCurrentTeams = () => api.get('/teams/current');
export const getRace = (year, round) => api.get(`/race/${year}/${round}`);
