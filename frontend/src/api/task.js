import axios from 'axios';
const apiUrl = "http://localhost:5000/api";

export const getAllTasks = () => axios.get(`${apiUrl}/task`)

export const addTask = task => axios.post(`${apiUrl}/task`, task);
