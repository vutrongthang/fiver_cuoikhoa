let USER_INFOR = "USER_INFOR";

export let userLocal = {
  set: (userData) => {
    let json = JSON.stringify(userData);
    localStorage.setItem(USER_INFOR, json);
  },
  get: () => {
    let json = localStorage.getItem(USER_INFOR);

    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(USER_INFOR);
  },
};
