import React, { useEffect, useState } from "react";
import DetailListWorkHeader from "./DetailListWorkHeader";
import "./DetailListWork.scss";
import { useParams } from "react-router-dom";
import { jobService } from "../../services/Jobs/job.service";
import CarDetailJobUser from "./CarDetailJobUser";
export default function DetailListWork() {
  const { maChiTietLoai } = useParams();
  const [dataListDetail, setDataListDetail] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchApi = async ({ maChiTietLoai }) => {
      try {
        const res = await jobService.getDetailJobByIdType({ maChiTietLoai });
        setDataListDetail(res.data.content);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchApi({ maChiTietLoai });
  }, []);
  const renderCardDetailJobUser = () => {
    return dataListDetail.map((item) => {
      return <CarDetailJobUser dataDetail={item} key={item.id} />;
    });
  };
  return (
    <div className="container mx-auto py-6">
      <DetailListWorkHeader />
      <div className="py-20">
        <h1 className="text-gray-400 font-medium">
          {dataListDetail.length} services available
        </h1>
        <div className="grid grid-cols-4 gap-12 ">
          {renderCardDetailJobUser()}
        </div>
      </div>
    </div>
  );
}
