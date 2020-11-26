import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

// export function buildQueryString(activity) {
// 	const queryString = apiEndpoint;
// }

export function getRandomActivity() {
	return http.get(apiEndpoint);
}

export function getCustomActivity(queryString) {
	return http.get(apiEndpoint + queryString);
}
