import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) req.headers.Authorization = `Bearer ${user.token}`;
  return req;
});

export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);

export const fetchQuestions = () => API.get('/questions');
export const fetchQuestion = (id) => API.get(`/questions/${id}`);
export const askQuestion = (data) => API.post('/questions', data);

export const postAnswer = (questionId, data) => API.post(`/answers/${questionId}`, data);

export const fetchNotifications = () => API.get('/notifications');
