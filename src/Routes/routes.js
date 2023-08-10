import { Navigate } from "react-router-dom";
import DetailListWork from "../Pages/DetailListWork/DetailListWork";
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListWorkPage from "../Pages/ListWorkPage/ListWorkPage";
import LoginAndRegister from "../Pages/LoginRegisterPage/LoginAndRegister";
import UserInfoPage from "../Pages/UserInfoPage/UserInfoPage";

export const routes = [
  {
    path: "/work/:maLoaiCongViec",
    component: <ListWorkPage />,
  },
  {
    path: "/detail/:maLoaiCongViec",
    component: <DetailPage />,
  },
  {
    path: "*",
    component: <Navigate to="" />,
  },
  {
    path: "/listdetail/:maChiTietLoai",
    component: <DetailListWork />,
  },
  {
    path: "/userInfo",
    component: <UserInfoPage />,
  },
];
