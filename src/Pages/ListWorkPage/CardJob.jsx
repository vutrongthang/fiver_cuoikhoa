import React from "react";
import { NavLink } from "react-router-dom";

export default function CardJob({ dataJob }) {
  const renderDetailJob = () => {
    return dataJob.dsChiTietLoai?.map((item) => {
      return (
        <NavLink
          to={`/listdetail/${item.id}`}
          className="block text-xl py-2 px-1 cursor-pointer rounded-xl font-medium text-gray-500 hover:bg-[#F5F5F5] duration-200"
          key={item.id}
        >
          {item.tenChiTiet}
        </NavLink>
      );
    });
  };
  return (
    <div className="h-96  rounded-xl overflow-hidden space-y-4">
      <div className="h-2/5">
        <img
          src={dataJob.hinhAnh}
          alt=""
          className="object-cover rounded-xl w-full h-full"
        />
      </div>
      <h1 className="text-xl font-semibold">{dataJob.tenNhom}</h1>
      <div>{renderDetailJob()}</div>
    </div>
  );
}
