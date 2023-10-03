import axios from "axios";
import { switchtoApi } from "./Switch";
import { USER_PERFORMANCE } from "../mock/realmock";

const GetPerformance = (userId)  => {
    if (switchtoApi) {
      const userActivity = USER_PERFORMANCE.find((user) => user.userId === userId);
      return Promise.resolve(userActivity);     // Renvoyer une promesse résolue avec les données mock
    } 
    else {
      return axios.get(`http://localhost:3000/user/${userId}/performance`)
      .then(response => {
        return response.data.data ; 
      })
      .catch(function (error) {
        console.log(error)
        // Ici, vous pouvez vérifier si l'erreur est une erreur 500 (Internal Server Error)
        if (error.response && error.response.status === 404) {
          return window.location = "/*"
          } 
        else {
          console.log("refzf")
          return window.location = "/serverproblem"
        }
      });
  }
};

export default GetPerformance;