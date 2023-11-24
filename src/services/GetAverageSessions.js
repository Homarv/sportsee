import axios from "axios";
import { switchtoApi } from "./Switch";
import { USER_AVERAGE_SESSIONS } from "../mock/realmock";

const GetAverageSessions = (userId) => {
	if (switchtoApi) {
		const userAverageSessions = USER_AVERAGE_SESSIONS.find(
			(user) => user.userId === userId
		);
		return Promise.resolve(userAverageSessions); // Renvoyer une promesse résolue avec les données mock
	} else {
		return axios
			.get(`http://localhost:3000/user/${userId}/average-sessions`)
			.then((response) => {
				return response.data.data;
			})
			.catch(function (error) {
				console.log(error);
				if (error.response && error.response.status === 404) {
					return (window.location = "/*");
				} else {
					return (window.location = "/serverproblem");
				}
			});
	}
};

export default GetAverageSessions;
