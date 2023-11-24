import axios from "axios";
import { switchtoApi } from "./Switch";
import { USER_ACTIVITY } from "../mock/realmock";

const GetActivity = (userId) => {
	if (switchtoApi) {
		const userMainData = USER_ACTIVITY.find((user) => user.userId === userId);
		return Promise.resolve(userMainData); // Renvoyer une promesse résolue avec les données mock
	} else {
		return axios
			.get(`http://localhost:3000/user/${userId}/activity`)
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

export default GetActivity;
