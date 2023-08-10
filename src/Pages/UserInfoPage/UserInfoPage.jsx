import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EditFilled } from "@ant-design/icons";
import { userServ } from "../../services/user.service";
import { message, Modal } from "antd";
import RentedWork from "./RentedWork";
export default function UserInfoPage() {
  let userInfo = useSelector((state) => state.userSlice.user);
  const [dataUser, setDataUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueUser, setValueUser] = useState({
    email: userInfo.user.email,
    name: userInfo.user.name,
    birthday: userInfo.user.birthday,
    phone: userInfo.user.phone,
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const dataUpdate = {
      id: userInfo.user.id,
      name: valueUser.name,
      email: valueUser.email,
      phone: valueUser.phone,
      birthday: valueUser.birthday,
      gender: true,
      role: "",
      skill: userInfo.user.skill,
      certification: userInfo.user.certification,
    };
    try {
      await userServ.updateInfoUser(dataUpdate);
      fetchApiInfoUser();
      message.success("update info succes");
    } catch (err) {
      console.log(err);
      message.error("update err");
    }
    setIsModalOpen(false);
  };
  const handleChangeValue = (e) => {
    let { name, value } = e.target;
    setValueUser({ ...valueUser, [name]: value });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchApiInfoUser = async () => {
    try {
      const res = await userServ.getInfoUser(userInfo.user.id);
      setDataUser(res.data.content);
    } catch (err) {
      console.log("err: ", err);
    }
  };
  useEffect(() => {
    fetchApiInfoUser();
  }, []);
  return (
    <div className="container mx-auto flex space-x-20 py-32">
      <div className="w-1/4 border border-gray-400 p-4">
        <div className="text-center font-bold border-b border-gray-400 py-4">
          <div>{userInfo.user.email}</div>
          <button onClick={showModal}>
            <EditFilled className="text-gray-400 font-extrabold text-2xl" />
          </button>
          <Modal
            title="Update user"
            open={isModalOpen}
            footer={[
              <button
                key={"Cancel"}
                onClick={handleCancel}
                className={"bg-red-500 text-white p-2 mr-3 rounded"}
              >
                Cancel
              </button>,
              <button
                onClick={handleOk}
                className={"bg-green-500 text-white p-2 mr-3 rounded"}
                key={"save"}
              >
                Save
              </button>,
            ]}
            onCancel={handleCancel}
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p>Email</p>
                <input
                  onChange={handleChangeValue}
                  value={valueUser.email}
                  name="email"
                  type="text"
                  className="w-full h-8 p-2 rounded border-gray-400 border"
                />
              </div>
              <div>
                <p>Phone</p>
                <input
                  value={valueUser.phone}
                  onChange={handleChangeValue}
                  name="phone"
                  type="text"
                  className="w-full h-8 p-2 rounded border-gray-400 border"
                />
              </div>
              <div>
                <p>Name</p>
                <input
                  value={valueUser.name}
                  onChange={handleChangeValue}
                  name="name"
                  type="text"
                  className="w-full h-8 p-2 rounded border-gray-400 border"
                />
              </div>
              <div>
                <p>Birth Day</p>
                <input
                  value={valueUser.birthday}
                  onChange={handleChangeValue}
                  name="birthday"
                  type="text"
                  className="w-full h-8 p-2 rounded border-gray-400 border"
                />
              </div>
              <div></div>
            </div>
          </Modal>
        </div>
        <div className="space-y-4">
          <p className="flex justify-between text-gray-400">
            <span>From</span>
            <span className="font-bold text-black">Việt Nam</span>
          </p>
          <p className="flex justify-between text-gray-400">
            <span>Member since</span>
            <span className="font-bold text-black">OCT12</span>
          </p>
          <p className="flex justify-between text-gray-400">
            <span>Name</span>
            <span className="font-bold text-black">{dataUser.name}</span>
          </p>
          <p className="flex justify-between text-gray-400">
            <span>Phone</span>
            <span className="font-bold text-black">{dataUser.phone}</span>
          </p>
          <p className="flex justify-between text-gray-400">
            <span>Birth Day</span>
            <span className="font-bold text-black">{dataUser.birthday}</span>
          </p>
          <p className="flex justify-between text-gray-400">
            <span>Gender</span>
            <span className="font-bold text-black">
              {dataUser.gender ? "Female" : "male"}
            </span>
          </p>
          <p className="flex justify-between text-gray-400">
            <span>Skill</span>
            <span className="font-bold text-black">
              {dataUser.skill?.map((item, index) => {
                return (
                  <span key={index}>
                    {item} {index === dataUser.skill.length - 1 ? "" : ","}
                  </span>
                );
              })}
            </span>
          </p>
          <p className="flex justify-between text-gray-400">
            <span>Certification</span>
            <span className="font-bold text-black">
              {dataUser.certification?.map((item, index) => {
                return (
                  <span key={index}>
                    {item}
                    {index === dataUser.certification.length - 1 ? "" : ","}
                  </span>
                );
              })}
            </span>
          </p>
        </div>
      </div>
      {/* // */}
      <div className="w-3/4">
        <RentedWork />
      </div>
    </div>
  );
}
