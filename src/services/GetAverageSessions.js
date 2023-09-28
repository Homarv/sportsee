import axios from "axios";
import { switchtoApi } from "./Switch";
import { USER_AVERAGE_SESSIONS } from "../mock/realmock";

const GetAverageSessions = (userId)  => {

  if (switchtoApi) {
    const userAverageSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
    return Promise.resolve(userAverageSessions);     // Renvoyer une promesse résolue avec les données mock
  } 
  else {
    return axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
    .then(response => {
      return response.data.data ; 
    })
    .catch(function (error) {
      if (error.response) {
        // La requête a été faite et le code de réponse du serveur n'est pas dans
        // la plage 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        // `error.request` est une instance de XMLHttpRequest dans le navigateur
        // et une instance de http.ClientRequest avec Node.js
        console.log(error.request);
      } else {
        // Quelque chose s'est passé lors de la construction de la requête et cela
        // a provoqué une erreur
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}
};

export default GetAverageSessions ;
