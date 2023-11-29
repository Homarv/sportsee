import axios from "axios";
import { switchToMock } from "./Switch";
import { USER_ACTIVITY } from "../mock/realmock";

/**
 * Function to retrieve user activity data.
 *
 * @param {number} userId - The ID of the user whose activity data is to be fetched.
 * @returns {Promise} A promise that resolves with the user's activity data.
 * @throws {Error} Redirects to different pages based on specific error conditions.
 */
const GetActivity = (userId) => {
	if (switchToMock) {
		// Use mock data if switchToMock is true
		const userMainData = USER_ACTIVITY.find((user) => user.userId === userId);
		return Promise.resolve(userMainData); // Resolve the promise with mock data
	} else {
		// Use axios to fetch data from the API
		return axios
			.get(`http://localhost:3000/user/${userId}/activity`)
			.then((response) => {
				return response.data.data;
			})
			.catch(function (error) {
				if (error.response && error.response.status === 404) {
					// Redirect to home page if user not found
					return (window.location = "/*");
				} else {
					// Redirect to server problem page for other errors
					return (window.location = "/serverproblem");
				}
			});
	}
};

export default GetActivity;
