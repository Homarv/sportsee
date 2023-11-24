import axios from "axios";
import { switchtoApi } from "./Switch";
import { USER_MAIN_DATA } from "../mock/realmock";

const GetInformation = (userId) => {
	if (switchtoApi) {
		const userActivity = USER_MAIN_DATA.find((user) => user.id === userId);
		return Promise.resolve(userActivity); // Renvoyer une promesse résolue avec les données mock
	} else {
		return axios
			.get(`http://localhost:3000/user/${userId}`)
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

export default GetInformation;
