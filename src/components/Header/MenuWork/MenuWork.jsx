import React, { useEffect, useState } from "react";
import { workServ } from "../../../services/work.service";
import MenuItems from "./MenuItems";
import styles from "./menu.module.scss";

export default function MenuWork() {
  let [menuItems, setMenuItems] = useState([]);
  let fetchApi = async () => {
    try {
      let res = await workServ.getMenuWork();
      setMenuItems(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="py-2">
      <nav>
        <ul className={styles.menus}>
          {menuItems.map((menu) => {
            return <MenuItems menuItems={menu} key={menu.id} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
