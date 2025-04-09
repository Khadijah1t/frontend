// src/api.js
import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE_URL
const API = axios.create({
  baseURL: API_BASE, // Replace with your backend URL
});

// ✅ Correct
export const registerUser = (userData) => API.post('/api/auth/signup', userData);
export const loginUser = (userData) => API.post('/api/auth/login', userData);
