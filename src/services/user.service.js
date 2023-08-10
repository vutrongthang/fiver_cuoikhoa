import { https } from "./urlConfig";

export const userServ = {
  postLogin: (dataLogin) => {
    let uri = "/api/auth/signin";
    return https.post(uri, dataLogin);
  },
  postSignUp: (dataSignUp) => {
    let uri = "/api/auth/signup";
    return https.post(uri, dataSignUp);
  },
  getInfoUser: (userId) => {
    let uri = `/api/users/${userId}`;
    return https.get(uri);
  },
  updateInfoUser: (dataUser) => {
    let uri = `/api/users/${dataUser.id}`;
    return https.put(uri, dataUser);
  },
};
