import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJobApi } from "../../Apis/JobApis";
import LeftDetailPage from "./LeftDetailPage";
import RightDetailPage from "./RightDetailPage";

export default function DetailPage() {
  const { maLoaiCongViec } = useParams();
  const [detailJob, setDetailJob] = useState({}); // {avatar,id,tenChiTietLoai,tenLoaiCongViec,tenNguoiTao,tenNhomChiTietLoai,//congViec<{danhGia,giaTien,hinhAnh,id,maChiTietLoaiCongViec,moTa,moTaNgan,nguoiTao,saoCongViec,tenCongViec}>}
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      try {
        const newDetailJob = await getDetailJobApi({ maLoaiCongViec });
        setDetailJob(newDetailJob);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);
  return (
    <main className="mx-auto container py-8">
      <Breadcrumb>
        <Breadcrumb.Item>{detailJob.tenLoaiCongViec}</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">{detailJob.tenNhomChiTietLoai}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">{detailJob.tenChiTietLoai}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      {/* //Body*/}
      <div className="grid grid-cols-3 gap-24">
        <LeftDetailPage detailJob={detailJob} />
        <RightDetailPage detailJob={detailJob} />
      </div>
    </main>
  );
}
