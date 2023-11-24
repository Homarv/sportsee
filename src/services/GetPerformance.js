import axios from "axios";
import { switchtoApi } from "./Switch";
import { USER_PERFORMANCE } from "../mock/realmock";

const GetPerformance = (userId) => {
	if (switchtoApi) {
		const userActivity = USER_PERFORMANCE.find(
			(user) => user.userId === userId
		);
		return Promise.resolve(userActivity); // Renvoyer une promesse résolue avec les données mock
	} else {
		return axios
			.get(`http://localhost:3000/user/${userId}/performance`)
			.then((response) => {
				return response.data.data;
			})
			.catch(function (error) {
				if (error.response && error.response.status === 404) {
					return (window.location = "/*");
				} else {
					return (window.location = "/serverproblem");
				}
			});
	}
};

export default GetPerformance;
