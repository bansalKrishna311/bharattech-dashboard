import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" 
		? "http://localhost:5000/api/" // Use your local development URL here
		: "https://bharat-techx.vercel.app/api", // Use your production URL here
	withCredentials: false,
});