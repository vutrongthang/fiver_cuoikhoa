import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { jobService } from "../../../services/Jobs/job.service";
import { message } from "antd";
export default function RightDetailPage({ detailJob }) {
  const { maLoaiCongViec } = useParams();
  let userInfo = useSelector((state) => state.userSlice.user);

  const handleRentWork = async () => {
    if (!userInfo) {
      message.error("you not login");
      return;
    }
    let dateNow = moment().toDate();
    let dataRentWork = {
      id: userInfo.user.id,
      maCongViec: maLoaiCongViec,
      maNguoiThue: userInfo.user.id,
      ngayThue: moment(dateNow).format("DD/MM/YYYY"),
      hoanThanh: false,
    };
    try {
      const res = await jobService.rentWork({ dataRentWork });
      console.log("res: ", res);
      message.success("Rent work success");
    } catch (err) {
      console.log(err);
      message.error(`${err.message}`);
    }
  };
  return (
    <div className="relative">
      <div className="border w-full sticky top-52 right-0 px-4 py-8 space-y-6">
        <h1 className="flex font-bold text-2xl justify-between">
          <span>Basic</span>
          <span>US${detailJob.congViec?.giaTien}</span>
        </h1>
        <p className="text-gray-400">{detailJob.congViec?.moTaNgan}</p>
        <div className="font-medium text-gray-600 flex">
          <p className="w-1/2">14 Days Delivery</p>
          <p className="w-1/2">Unlimited Revisions</p>
        </div>
        <div className="text-gray-400 font-bold">
          <p className="flex items-center space-x-2">
            <CheckOutlined className="text-[#1DBF73] text-xl font-extrabold" />{" "}
            <span>Good feature</span>
          </p>
          <p className="flex items-center space-x-2">
            <CheckOutlined className="text-[#1DBF73] text-xl font-extrabold" />{" "}
            <span>Good feature</span>
          </p>
          <p className="flex items-center space-x-2">
            <CheckOutlined className="text-[#1DBF73] text-xl font-extrabold" />{" "}
            <span>Good feature</span>
          </p>
        </div>
        <button
          onClick={() => {
            handleRentWork();
          }}
          className="w-full py-2 text-center text-white bg-[#1DBF73] hover:bg-[#19A463] duration-200 rounded-lg"
        >
          Continue(${detailJob.congViec?.giaTien})
        </button>
        <p className="text-center text-[#1DBF73] font-bold">Compare Packages</p>
      </div>
    </div>
  );
}
