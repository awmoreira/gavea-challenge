/* eslint-disable no-param-reassign */
// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const baseURL = "https://localhost:3333";

const api = axios.create({
  baseURL,
});

export default api;