import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Divider, Drawer, Input, Layout, Menu, Typography, Switch } from "antd";
import moment from "moment";
import EllipseIcon from "@/src/assets/icons/EllipseIcon.svg";
import MenuIcon from "@/src/assets/icons/MenuIcon.svg";
import { DashboardIcon, LogoutIcon } from "@/src/lib/icons";

import styles from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { logout } from "@/src/store";
import SubMenu from "antd/es/menu/SubMenu";

const Navbar = ({ themeMode = "light", onToggleTheme }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state?.auth?.user);

  const selectedIconColor = `var(--color-primary)`;
  const defaultIconColor = `var(--text-primary)`;

  const menuItem1 = [
    {
      key: "Dashboard",
      label: "Dashboard",
      link: "/",
      icon: <DashboardIcon width={20} height={20} />,
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

  const getIconColor = (key, children = []) => {
    if (pathName === key) {
      return selectedIconColor;
    }

    for (const child of children) {
      if (pathName === child.link) {
        return selectedIconColor;
      }
    }

    return defaultIconColor;
  };

  const menuItem = ({ label, icon, link, children, ...props }) => {
    const itemIcon = React.cloneElement(icon, {
      strokeColor: getIconColor(link, children),
      width: 20,
      height: 20,
    });

    if (children && children.length > 0) {
      return (
        <SubMenu
          key={label}
          className={styles.subMenuList}
          title={
            <div className={styles.subMenuWrapper}>
              <div className={styles.menuIcon}>{itemIcon}</div>
              <div className={styles.subenuLabel}>{label}</div>
            </div>
          }
        >
          {children.map((child) => (
            <Menu.Item
              style={{
                borderRadius: 0,
                height: "48px",
              }}
              {...props}
              key={child.key}
            >
              <Link href={child.link}>
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
        <Link href={link}>
          <div className={styles.menuIcon}>{icon}</div>
          <div className={styles.menuLabel}>{label}</div>
        </Link>
      </Menu.Item>
    );
  };

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

  const handleShowDrawer = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    auth.user && (
      <>
        <div className={styles.navHeader}>
          {/* <div className={styles.headerInnerDiv1}> */}
          <div className={styles.logoDiv}>Task Manager</div>

          <div className={styles.menuIcon} onClick={handleShowDrawer}>
            <Image src={MenuIcon} alt="MenuIcon" />
          </div>
          <div className={styles.drawer}>
            <Drawer
              className={styles.drawerInner}
              title="Menu"
              placement="left"
              width={240}
              onClose={handleDrawerClose}
              open={open}
              styles={{ body: { padding: 0 } }}
            >
              <div>
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
            </Drawer>
          </div>

          <div className={styles.titleDiv}>
            <Typography className={styles.navTitle}>
              Welcome, {auth?.user.email || ""}
            </Typography>
            <div className={styles.navContent}>
              <Typography className={styles.timeTypo}>
                {moment().format("MMMM DD, YYYY")}
              </Typography>
              <Image
                src={EllipseIcon}
                alt="Ellipse"
                className={styles.ellipseImg}
              />
              <Typography className={styles.dateTypo}>
                {moment().format("h:mm A")}
              </Typography>
              <div style={{ marginLeft: 12 }}>
                <Switch
                  checked={themeMode === "dark"}
                  onChange={onToggleTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Navbar;
