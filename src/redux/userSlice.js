import { message } from "antd";
import { userLocal } from "../services/local.service";
import { userServ } from "../services/user.service";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  isLogin: false,
  user: userLocal.get(),
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
    },
    setUserLogOut: (state, { payload }) => {
      state.user = null;
    },
  },
});

export const postSignInAsync = (user, handleNavige) => {
  return (dispatch) => {
    let postLogin = async (user) => {
      try {
        let res = await userServ.postLogin(user);
        let userInfo = res.data.content;
        dispatch(setUserInfo(userInfo));
        userLocal.set(userInfo);
        handleNavige();
      } catch (err) {
        message.error(err.response.data.content);
      }
    };
    postLogin(user);
  };
};

export const postSignUpAsync = (dataRegister) => {
  return (dispatch) => {
    let postSignUp = async (dataRegister) => {
      try {
        await userServ.postSignUp(dataRegister);
        message.success("Đăng ký thành công, đăng nhập để tiếp tục");
      } catch (err) {
        // message.error(err);
        message.error(err.response.data.content);
      }
    };
    postSignUp(dataRegister);
  };
};

export const { setUserInfo, setUserLogOut } = userSlice.actions;
export default userSlice.reducer;
