import { Rate } from "antd";
import React from "react";
import styled from "../styles/LeftDetailPage.module.css";
import AboutSeller from "./AboutSeller";
import CommentJob from "./CommentJob";

export default function LeftDetailPage({ detailJob }) {
  // {avatar,id,tenChiTietLoai,tenLoaiCongViec,tenNguoiTao,tenNhomChiTietLoai,--congViec<{danhGia,giaTien,hinhAnh,id,maChiTietLoaiCongViec,moTa,moTaNgan,nguoiTao,saoCongViec,tenCongViec}>}

  return (
    <main className={`${styled.main} space-y-8`}>
      <h1 className="text-3xl font-bold">{detailJob.congViec?.tenCongViec}</h1>
      {/* // Info  */}
      <main className="flex items-center space-x-4">
        <img
          src={detailJob.avatar}
          alt=""
          style={{ width: 50, height: 50, borderRadius: "100%" }}
        />
        <span className="font-medium text-xl">{detailJob.tenNguoiTao}</span>
        <span className="font-normal text-yellow-400">
          Top Rated Seller <span className=" text-gray-400">|</span>
        </span>
        <span className="text-sm">
          <Rate disabled value={detailJob.congViec?.saoCongViec} />
        </span>
        <span>
          ({detailJob.congViec?.danhGia}){" "}
          <span className=" text-gray-400">|</span>
        </span>
        <span>4 Oders in Queue</span>
      </main>
      <div className="h-[30rem] overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover hover:w-[130%] hover:h-[130%] duration-200"
          src={detailJob.congViec?.hinhAnh}
          alt=""
        />
      </div>
      {/* //About this gig*/}
      <main className=" border-b-2 py-8">
        <h1 className="text-2xl font-bold">About This Gig</h1>
        <p className="text-lg leading-8 text-gray-600">
          {detailJob.congViec?.moTa}
        </p>
      </main>
      {/* // About the seller  */}
      <AboutSeller detailJob={detailJob} />
      {/* //comnent */}
      <CommentJob />
    </main>
  );
}
