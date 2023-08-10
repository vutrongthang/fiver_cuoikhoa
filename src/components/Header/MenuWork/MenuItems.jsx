import React from "react";
import { Dropdown } from "antd";
import style from "./menu.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MenuItems = ({ menuItems }) => {
  const [detailMenuItem, setDetailMenuItem] = useState([]);
  const navigate = useNavigate();
  const renderChildrenTitle = (title) => {
    return title.dsChiTietLoai.map((item) => {
      return {
        key: `${title.id} - ${item.id}`,
        label: (
          <div
            onClick={() => {
              window.location.href = `/listdetail/${item.id}`;
            }}
          >
            {item.tenChiTiet}
          </div>
        ),
      };
    });
  };
  const handleToListWorkPage = () => {
    window.location.href = `/work/${menuItems.id}`;
  };
  useEffect(() => {
    let newDetailMenuItem = menuItems.dsNhomChiTietLoai?.map((item) => {
      return {
        key: item.id,
        type: "group",
        label: <div>{item.tenNhom}</div>,
        children: renderChildrenTitle(item),
      };
    });
    setDetailMenuItem(newDetailMenuItem);
  }, []);
  return (
    <Dropdown
      menu={{
        items: detailMenuItem,
      }}
      placement="bottomRight"
      className={style.menu__items}
    >
      <button
        onClick={() => {
          handleToListWorkPage();
        }}
        className={style.button}
      >
        {menuItems.tenLoaiCongViec}
      </button>
    </Dropdown>
  );
};

export default MenuItems;
