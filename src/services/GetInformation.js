import axios from "axios";
import { switchToMock } from "./Switch";
import { USER_MAIN_DATA } from "../mock/realmock";

/**
 * Function to retrieve user information data.
 *
 * @param {number} userId - The ID of the user whose information data is to be fetched.
 * @returns {Promise} A promise that resolves with the user's information data.
 * @throws {Error} Logs errors to the console and redirects based on specific error conditions.
 */
const GetInformation = (userId) => {
	if (switchToMock) {
		// Use mock data if switchToMock is true
		const userActivity = USER_MAIN_DATA.find((user) => user.id === userId);
		return Promise.resolve(userActivity); // Resolve the promise with mock data
	} else {
		// Use axios to fetch data from the API
		return axios
			.get(`http://localhost:3000/user/${userId}`)
			.then((response) => {
				return response.data.data;
			})
			.catch(function (error) {
				console.log(error);
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

export default GetInformation;
