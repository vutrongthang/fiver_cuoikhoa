import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Jobtitle from "./Jobtitle/Jobtitle";
import { jobService } from "../../services/Jobs/job.service.js";
import CardJob from "./CardJob";
export default function ListWorkPage() {
  const { maLoaiCongViec } = useParams();
  const [dataListWork, setDataListWork] = useState([]);
  useEffect(() => {
    const fetchData = async ({ maLoaiCongViec }) => {
      try {
        let res = await jobService.getTypeDetailJob({ maLoaiCongViec });
        setDataListWork(res.data.content[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData({ maLoaiCongViec });
  }, []);
  const renderCardJob = () => {
    return dataListWork.dsNhomChiTietLoai?.map((item) => {
      return <CardJob key={item.id} dataJob={item} />;
    });
  };
  return (
    <div className="container mx-auto space-y-10 pb-10">
      <Jobtitle nameJob={dataListWork.tenLoaiCongViec} />
      <h1 className="text-2xl font-semibold">Explore Video & Animation</h1>
      <div className="grid grid-cols-4 gap-10">{renderCardJob()}</div>
    </div>
  );
}
