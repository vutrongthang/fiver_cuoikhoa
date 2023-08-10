import React from "react";
import { Progress, Rate } from "antd";
import { Collapse } from "antd";
import { StarFilled, DownOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const text = `
Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
`;
const totalReview = [
  { start: 5, total: 333, percent: 98 },
  { start: 4, total: 2, percent: 2 },
  { start: 3, total: 0, percent: 0 },
  { start: 2, total: 0, percent: 0 },
  { start: 1, total: 0, percent: 0 },
];

export default function AboutSeller({ detailJob }) {
  // {avatar,id,tenChiTietLoai,tenLoaiCongViec,tenNguoiTao,tenNhomChiTietLoai,--congViec<{danhGia,giaTien,hinhAnh,id,maChiTietLoaiCongViec,moTa,moTaNgan,nguoiTao,saoCongViec,tenCongViec}>}
  let renderToTalReview = () => {
    return totalReview.map((item, index) => {
      return (
        <div key={index} className="flex text-lg">
          <span className="w-1/5 text-blue-500 font-medium">
            {item.start} start
          </span>
          <Progress
            strokeColor={"#FACC14"}
            format={() => (
              <span className="text-blue-500 font-medium text-lg">
                ({item.total})
              </span>
            )}
            percent={item.percent}
            className="text-yellow-400"
          />
        </div>
      );
    });
  };

  return (
    <main className="py-8 border-b border-gray-400">
      {/* //Avatar  */}
      <main className="flex space-x-4">
        <img
          src={detailJob.avatar}
          alt=""
          style={{ width: 100, height: 100, borderRadius: "100%" }}
        />
        <div>
          <p className="text-2xl text-gray-600 font-medium">
            {detailJob.tenNguoiTao}
          </p>
          <p className="text-gray-500">{detailJob.tenLoaiCongViec}</p>
          <div className="mb-5">
            <Rate disabled value={detailJob.congViec?.saoCongViec} />
          </div>
          <button className="px-4 py-2 text-gray-600 hover:text-white hover:bg-gray-600 border border-gray-400 rounded-lg">
            Contact Me
          </button>
        </div>
      </main>
      {/* FAQ */}
      <main className="py-8">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <Collapse
          expandIconPosition={"end"}
          accordion
          bordered={false}
          className="bg-white"
        >
          <Panel
            header={
              <div className="font-medium text-lg text-gray-500 border-b-white">
                There are many passages but the majority?
              </div>
            }
            key="1"
          >
            <p className="font-medium text-lg text-gray-500">{text}</p>
          </Panel>
          <Panel
            header={
              <div className="font-medium text-lg text-gray-500">
                There are many passages but the majority?
              </div>
            }
            key="2"
          >
            <p className="font-medium text-lg text-gray-500">{text}</p>
          </Panel>
          <Panel
            header={
              <div className="font-medium text-lg text-gray-500 border-b-white">
                There are many passages but the majority?
              </div>
            }
            key="3"
          >
            <p className="font-medium text-lg text-gray-500">{text}</p>
          </Panel>
          <Panel
            header={
              <div className="font-medium text-lg text-gray-500 border-b-white">
                There are many passages but the majority?
              </div>
            }
            key="4"
          >
            <p className="font-medium text-lg text-gray-500">{text}</p>
          </Panel>
        </Collapse>
      </main>
      {/* //Reviews  */}
      <main className="flex justify-between space-x-20">
        <div className=" w-1/2">
          <h1 className="text-xl font-bold space-x-3">
            <span> {detailJob.congViec?.danhGia} Review</span>
            <span className="text-yellow-400">
              <Rate disabled value={5} /> 5
            </span>
          </h1>
          {renderToTalReview()}
        </div>
        <div className="flex w-1/2 items-end justify-between text-lg font-medium">
          <div className="w-3/4 text-gray-400 space-y-2">
            <p className="text-black">Rating Breakdown</p>
            <p>Seller coummunication level</p>
            <p>Recomend to a friend</p>
            <p>Service as described</p>
          </div>
          <div className="w-1/4 space-y-2">
            <div className="flex items-center space-x-2 text-yellow-400 ">
              5<StarFilled />
            </div>
            <div className="flex items-center space-x-2 text-yellow-400 ">
              5<StarFilled />
            </div>
            <div className="flex items-center space-x-2 text-yellow-400 ">
              5<StarFilled />
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
