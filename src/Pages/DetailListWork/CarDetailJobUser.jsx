import React from "react";
import { StarFilled, HeartFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function CarDetailJobUser({ dataDetail }) {
  return (
    <div className="h-96 border border-gray-400">
      <div className="h-5/6">
        <div className="h-1/2">
          <img
            src={dataDetail.congViec?.hinhAnh}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        {/* // */}
        <div className="h-1/2 px-3 py-1">
          <div className="flex items-center space-x-3">
            <img
              src={dataDetail.avatar}
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <div className="font-medium">
              <span className="block">{dataDetail.tenNguoiTao}</span>
              <span className="block text-gray-400">Level 5 Seller</span>
            </div>
          </div>
          <NavLink
            to={`/detail/${dataDetail.id}`}
            className="cursor-pointer  block my-3 hover:text-[#1CBF73] font-medium"
          >
            {dataDetail.congViec?.tenCongViec.substring(0, 60)}...
          </NavLink>
          <div className="text-yellow-400 flex items-center space-x-1">
            <StarFilled />
            <span>{dataDetail.congViec?.saoCongViec}</span>
            <span className="text-gray-400">
              ({dataDetail.congViec?.danhGia})
            </span>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="h-1/6 flex items-center border-t border-gray-400 justify-between p-2">
        <HeartFilled className="text-gray-400" />
        <div className="text-gray-400 text-xs font-semibold">
          STARTING AT{" "}
          <span className="text-black text-lg">
            US${dataDetail.congViec?.giaTien}
          </span>
        </div>
      </div>
    </div>
  );
}
