import axios from "axios";
import { switchToMock } from "./Switch";
import { USER_PERFORMANCE } from "../mock/realmock";

/**
 * Function to retrieve user performance data.
 *
 * @param {number} userId - The ID of the user whose performance data is to be fetched.
 * @returns {Promise} A promise that resolves with the user's performance data.
 * @throws {Error} Redirects based on specific error conditions.
 */
const GetPerformance = (userId) => {
	if (switchToMock) {
		// Use mock data if switchToMock is true
		const userActivity = USER_PERFORMANCE.find(
			(user) => user.userId === userId
		);
		return Promise.resolve(userActivity); // Resolve the promise with mock data
	} else {
		// Use axios to fetch data from the API
		return axios
			.get(`http://localhost:3000/user/${userId}/performance`)
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

export default GetPerformance;
