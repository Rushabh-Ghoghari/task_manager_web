import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Divider, Layout, Menu } from "antd";

import styles from "./sidebar.module.css";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/src/store";
import { DashboardIcon, LogoutIcon } from "@/src/lib/icons";
import SubMenu from "antd/es/menu/SubMenu";

const { Sider } = Layout;

const Sidebar = ({ defaultSelection }) => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const user = useSelector((state) => state?.auth?.user);

  // sidebar paths
  const menuItem1 = [
    {
      key: "Dashboard",
      label: "Dashboard",
      link: "/",
      icon: <DashboardIcon />,
    },
  ];

  const menuItem2 = [];

  const menuItem3 = [
    {
      label: "Logout",
      link: "/login",
      icon: <LogoutIcon />,
      onClick: () => dispatch(logout()),
    },
  ];

  const getOpenKeys = () => {
    const openKeys = [];

    menuItem1.forEach((item) => {
      if (item.children) {
        const childSelected = item.children.some(
          (child) => pathName === child.link
        );
        if (childSelected) {
          openKeys.push(item.key);
        }
      }
    });

    return openKeys;
  };

  const menuItem = ({ label, icon, link, children, ...props }) => {
    if (children && children.length > 0) {
      return (
        <SubMenu
          key={label}
          className={styles.subMenuList}
          title={
            <div className={styles.subMenuWrapper}>
              <div className={styles.menuIcon}>{icon}</div>
              <div className={styles.subenuLabel}>{label}</div>
            </div>
          }
        >
          {children.map((child) => (
            <Menu.Item
              style={{
                borderRadius: 8,
              }}
              {...props}
              key={child.key}
            >
              <Link href={child.link} replace>
                <div className={styles.menuIcon}>{child.icon}</div>
                <div className={styles.subenuLabel}>{child.label}</div>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    }
    return (
      <Menu.Item
        className={styles.navList}
        style={{
          borderRadius: 0,
        }}
        {...props}
        key={label}
      >
        <Link href={link || "#"} replace>
          <div className={styles.menuIcon}>{icon}</div>
          <div className={styles.menuLabel}>{label}</div>
        </Link>
      </Menu.Item>
    );
  };

  //
  const renderedMenuItem1 = menuItem1.map((item) => menuItem(item));
  const renderedMenuItem2 = menuItem2.map((item) => menuItem(item));
  const renderedMenuItem3 = menuItem3.map((item) => menuItem(item));

  const routeToMenuKey = {
    "/": "Dashboard",
  };

  const getSelectedMenuKey = (currentPath) => {
    if (routeToMenuKey[currentPath]) {
      return routeToMenuKey[currentPath];
    }

    for (const path in routeToMenuKey) {
      if (currentPath.startsWith(path)) {
        return routeToMenuKey[path];
      }
    }
    return null;
  };

  const selectedMenuKey = getSelectedMenuKey(pathName);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const siderContainerHeight = `calc(${windowHeight}px - 80px)`;

  return (
    <Sider className={styles.sider}>
      <div
        className={styles.siderContainer}
        style={{ height: siderContainerHeight }}
      >
        <div className={styles.menuItem1}>
          <Menu
            className={styles.menuUl}
            mode="inline"
            defaultSelectedKeys={["Dashboard"]}
            selectedKeys={[selectedMenuKey]}
            defaultOpenKeys={getOpenKeys()}
          >
            {renderedMenuItem1}
          </Menu>
        </div>
        <div>
          <div>
            <Menu className={styles.menuUl} mode="inline">
              {renderedMenuItem2}
            </Menu>
          </div>
          <Divider className={styles.divider} />
          <div className={styles.menuItem2}>
            <Menu className={styles.menuUl} mode="inline">
              {renderedMenuItem3}
            </Menu>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
