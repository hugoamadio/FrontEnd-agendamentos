import axios from "axios";

const db = axios.create({
    baseURL: 'https://api-agendamentos-w9d2.onrender.com',
    // timeout: 1000,
  });


export default db