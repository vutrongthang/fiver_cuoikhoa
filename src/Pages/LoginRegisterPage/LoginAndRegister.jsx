import React, { useState } from "react";
import * as customs from "./customs";
import { Select, DatePicker } from "antd";
import Login from "./Login";
import { postSignUpAsync } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

export default function LoginAndRegister() {
  let dispatch = useDispatch();
  const [signIn, toggle] = useState(true);
  let [dataRegister, setdataRegister] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: null,
    role: "USER",
    skill: [],
    certification: [],
  });
  let [dataRegisterErr, setdataRegisterErr] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: null,
    role: "USER",
    skill: [],
    certification: [],
  });
  const onChange = (value) => {
    if (value == "Male") {
      setdataRegister({ ...dataRegister, gender: true });
    } else {
      setdataRegister({ ...dataRegister, gender: false });
    }
  };
  const onChangeDate = (date, dateString) => {
    setdataRegister({ ...dataRegister, birthday: dateString });
  };
  const handleChangeSkill = (value) => {
    setdataRegister({ ...dataRegister, skill: value });
  };
  const handleChangeCer = (value) => {
    setdataRegister({ ...dataRegister, certification: value });
  };
  let handleChangeValueInput = (e) => {
    let { value, name } = e.target;
    // name là key

    setdataRegister({ ...dataRegister, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postSignUpAsync(dataRegister));
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <customs.Container>
        {/* phần đăng ký  */}
        <customs.SignUpContainer signinIn={signIn}>
          <customs.Form method="get">
            <div className="w-full mb-2">
              <p className="w-full text-left">Username</p>
              <customs.Input
                name="name"
                placeholder="Username"
                dataRegister={dataRegister.name}
                onChange={handleChangeValueInput}
              />
              <p className=""></p>
            </div>

            <div className="w-full mb-2">
              <p className="w-full text-left">Email</p>
              <customs.Input
                name="email"
                placeholder="Email"
                dataRegister={dataRegister.email}
                onChange={handleChangeValueInput}
              />
              <p className=""></p>
            </div>

            <div className="w-full mb-2">
              <p className="w-full text-left">Password</p>
              <customs.Input
                name="password"
                type="password"
                placeholder="Password"
                dataRegister={dataRegister.password}
                onChange={handleChangeValueInput}
              />
              <p className=""></p>
            </div>

            <div className="w-full mb-2">
              <p className="w-full text-left">Phone Number</p>
              <customs.Input
                name="phone"
                placeholder="Phone Number"
                dataRegister={dataRegister.phone}
                onChange={handleChangeValueInput}
              />
              <p className=""></p>
            </div>

            {/* ngày sinh  */}
            <div className="w-full mb-2">
              <p className="w-full text-left">Day of birth</p>
              <DatePicker
                format="DD-MM-YYYY"
                placeholder="Select your birth day"
                onChange={onChangeDate}
              />
              <p className=""></p>
            </div>

            <div className="w-full mb-2">
              <p className="w-full text-left">Gender</p>
              <Select
                className="w-full"
                showSearch
                placeholder="Select your gender"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                ]}
              />
              <p className=""></p>
            </div>

            <div className="w-full mb-2">
              <p className="w-full text-left">Skills</p>
              <Select
                className="w-full"
                mode="tags"
                placeholder="Select your skills"
                onChange={handleChangeSkill}
                options={[
                  {
                    value: "Lol",
                    label: "Lol",
                  },
                  {
                    value: "Web",
                    label: "Web",
                  },
                  {
                    value: "Design",
                    label: "Design",
                  },
                ]}
              />
              <p className=""></p>
            </div>

            <div className="w-full mb-2">
              <p className="w-full text-left">Certification</p>
              <Select
                className="w-full"
                mode="tags"
                placeholder="Select your certification"
                onChange={handleChangeCer}
                options={[
                  {
                    value: "DIB",
                    label: "DIB",
                  },
                  {
                    value: "PYNOW",
                    label: "PYNOW",
                  },
                ]}
              />
              <p className=""></p>
            </div>

            <customs.Button type="submit" onClick={handleSubmit}>
              Sign Up
            </customs.Button>
          </customs.Form>
        </customs.SignUpContainer>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* Phần đăng nhập  */}
        <Login signinIn={signIn} />
        {/*overlay chuyển qua lại giữa đăng nhập và đăng kí */}
        <customs.OverlayContainer signinIn={signIn}>
          <customs.Overlay signinIn={signIn}>
            <customs.LeftOverlayPanel signinIn={signIn}>
              <customs.Title>Welcome Back!</customs.Title>
              <customs.Paragraph>
                To keep connected with us please login with your personal info
              </customs.Paragraph>
              <customs.GhostButton onClick={() => toggle(true)}>
                Sign In
              </customs.GhostButton>
            </customs.LeftOverlayPanel>

            <customs.RightOverlayPanel signinIn={signIn}>
              <customs.Title>Hello, Friend!</customs.Title>
              <customs.Paragraph>
                Enter Your personal details and start journey with us
              </customs.Paragraph>
              <customs.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </customs.GhostButton>
            </customs.RightOverlayPanel>
          </customs.Overlay>
        </customs.OverlayContainer>
      </customs.Container>
    </div>
  );
}
