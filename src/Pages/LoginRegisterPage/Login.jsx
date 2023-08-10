import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSignInAsync } from "../../redux/userSlice";
import { userLocal } from "../../services/local.service";
import * as customs from "./customs";

export default function Login({ signinIn }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [valueInput, setValueInput] = useState({
    email: "",
    password: "",
  });
  let [errValueInput, setErrValueInput] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (userLocal.get()) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, []);
  let handleChangeValueInput = (e) => {
    let { value, name } = e.target;
    // name là key
    if (value.trim() === "") {
      setErrValueInput({ ...errValueInput, [name]: "Chưa nhập gì nha" });
    } else {
      setErrValueInput({ ...errValueInput, [name]: "" });
    }
    setValueInput({ ...valueInput, [name]: value });
  };
  // Submit-------------------------
  let handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    for (let key in errValueInput) {
      if (errValueInput[key] !== "") {
        isvalid = false;
      }
    }
    for (let key in valueInput) {
      if (valueInput[key] == "") {
        isvalid = false;
      }
    }
    //  Call API ---------------
    if (isvalid) {
      let handleNextPage = () => {
        navigate("/");
      };
      dispatch(postSignInAsync(valueInput, handleNextPage));
    } else {
      message.error("Vui lòng điền đầy đủ thông tin !");
    }
  };
  return (
    <customs.SignInContainer signinIn={signinIn}>
      <customs.Form>
        <customs.Title>Sign in</customs.Title>
        <div className="w-full mb-2">
          <customs.Input
            name="email"
            label="email"
            placeholder="Email"
            valueInput={valueInput.email}
            valueErr={errValueInput.email}
            onChange={handleChangeValueInput}
          />
          <p className=""></p>
        </div>

        <div className="w-full mb-2">
          <customs.Input
            type="password"
            name="password"
            placeholder="Password"
            valueInput={valueInput.password}
            valueErr={errValueInput.password}
            onChange={handleChangeValueInput}
          />
          <p className=""></p>
        </div>

        <customs.Button type="submit" onClick={handleSubmit}>
          Sigin In
        </customs.Button>
      </customs.Form>
    </customs.SignInContainer>
  );
}
