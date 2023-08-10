import { https } from "./urlConfig";

export const workServ = {
  getMenuWork: () => {
    let uri = "/api/cong-viec/lay-menu-loai-cong-viec";
    return https.get(uri);
  },
};
