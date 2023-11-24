import axios from "axios";
import { switchtoApi } from "./Switch";
import { USER_AVERAGE_SESSIONS } from "../mock/realmock";

/**
 * Function to retrieve user average sessions data.
 *
 * @param {number} userId - The ID of the user whose average sessions data is to be fetched.
 * @returns {Promise} A promise that resolves with the user's average sessions data.
 * @throws {Error} Logs errors to the console and redirects based on specific error conditions.
 */
const GetAverageSessions = (userId) => {
  if (switchtoApi) {
    // Use mock data if switchtoApi is true
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === userId
    );
    return Promise.resolve(userAverageSessions); // Resolve the promise with mock data
  } else {
    // Use axios to fetch data from the API
    return axios
      .get(`http://localhost:3000/user/${userId}/average-sessions`)
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

export default GetAverageSessions;
