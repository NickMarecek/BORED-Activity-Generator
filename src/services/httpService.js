import axios from "axios";
//import error logger here
import { toast } from "react-toastify";

//error interceptor: intercepts responses logs and displays generic errors to console and user
axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;
	if (!expectedError) {
		//error logger call
		toast.error("An unexpected error has occurred.");
	}
	return Promise.reject(error);
});

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};
