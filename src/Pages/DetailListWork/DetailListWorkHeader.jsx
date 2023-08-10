import { Dropdown } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Switch } from "antd";
const titleItem1 = [
  "Category",
  "Service Options",
  "Seller Detail",
  "Delivery time",
];
const titleItem2 = ["Pro services", "Local sellers", "Online sellers"];

const items = [
  {
    label: (
      <div className="text-[#18A463] text-lg font-medium">All Categories</div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="text-lg font-medium">
        Web Programing <span className="text-gray-400">(20,566)</span>{" "}
      </div>
    ),
    key: "1",
  },
  {
    label: (
      <div className="text-lg font-medium">
        Web Programing <span className="text-gray-400">(20,566)</span>{" "}
      </div>
    ),
    key: "3",
  },
];
export default function DetailListWorkHeader() {
  const renderItemLeft = () => {
    return titleItem1.map((item, index) => {
      return (
        <Dropdown
          key={index}
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <button className="p-2 border rounded font-medium flex items-center space-x-2">
            <span>{item}</span> <DownOutlined />
          </button>
        </Dropdown>
      );
    });
  };
  const renderItemRight = () => {
    return titleItem2.map((item, index) => {
      return (
        <div key={index} className="flex items-center space-x-1">
          <Switch size="small" className="bg-gray-400" defaultChecked={false} />
          <span className="text-gray-400 font-medium">{item}</span>
        </div>
      );
    });
  };

  return (
    <div className="flex container mx-auto py-2 space-x-20">
      <div className="w-1/2 flex items-center justify-between">
        {renderItemLeft()}
      </div>
      <div className="w-2/5 flex items-center justify-between ">
        {renderItemRight()}
      </div>
    </div>
  );
}
