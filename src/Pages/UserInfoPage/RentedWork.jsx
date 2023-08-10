import { message } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { jobService } from "../../services/Jobs/job.service";

export default function RentedWork() {
  const [dataRentedWork, setDataRentedWork] = useState([]);
  const fetchApi = async () => {
    try {
      const res = await jobService.getDataRentedWork();
      setDataRentedWork(res.data.content);
      console.log("res.data.content: ", res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteWork = async (id) => {
    try {
      await jobService.deleteWork(id);
      message.success("delete success");
      fetchApi();
    } catch (err) {
      console.log(err);
    }
  };
  const renderDataRentedWork = () => {
    return dataRentedWork.map((item, index) => {
      return (
        <div key={item.id} className="flex space-x-7 bg-gray-100 py-3">
          <div className="h-full w-1/4">
            <img
              src={item.congViec?.hinhAnh}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="h-full w-3/4 space-y-4">
            <h1 className="font-bold text-xl">{item.congViec?.tenCongViec}</h1>
            <p className="text-gray-600">
              {item.congViec?.moTa.substring(0, 100)}...
            </p>
            <div className="space-x-4 text-sm">
              <NavLink
                to={`/detail/${item.congViec?.id}`}
                className="bg-green-500 text-white p-2 rounded"
              >
                View detail
              </NavLink>
              <button
                onClick={() => {
                  handleDeleteWork(item.id);
                }}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return <div className="space-y-7">{renderDataRentedWork()}</div>;
}
