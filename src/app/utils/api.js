import axios from "axios";

const API_URL = "http://localhost:1337/api"; // Change this if your Strapi server is hosted elsewhere

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/local/register`, userData);
    return res.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/local`, userData);
    return res.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
