import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogOut } from "../../redux/userSlice";
import { userLocal } from "../../services/local.service";

export default function HeaderNav({ show }) {
  let userInfo = useSelector((state) => state.userSlice.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleLogOut = () => {
    userLocal.remove();
    dispatch(setUserLogOut());
  };
  let renderUserNavDesktop = () => {
    if (userInfo) {
      return (
        <div className="space-x-2">
          <span
            onClick={() => {
              window.location.href = "/userInfo";
            }}
            className=" font-bold"
          >
            {userInfo.user.name}
          </span>
          <button
            className=" px-3 py-1 hover:bg-gray-500 duration-150 rounded border-gray-400 border"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <button
          className=" px-3 py-1 hover:bg-gray-500 duration-150 rounded border-gray-400 border"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      );
    }
  };
  return (
    <div
      className={`${
        show ? "text-gray-400" : "text-white"
      } flex items-center space-x-5 text-lg font-bold cursor-pointer`}
    >
      <span>Fiverr Business</span>
      <span>Explore</span>
      <span>English</span>
      <span>US$ USD</span>
      <span>Become a Seller</span>
      {renderUserNavDesktop()}
    </div>
  );
}
