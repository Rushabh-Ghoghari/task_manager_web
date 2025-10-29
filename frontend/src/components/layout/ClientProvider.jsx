"use client";

import { Provider } from "react-redux";
import React, { useEffect, useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout, theme as antdTheme } from "antd";
import themePalette from "@/src/lib/theme";
import { store } from "@/src/store";
import AuthLayout from "./Layout";
import Auth from "./Auth";
import styles from "./layout.module.css";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import { usePathname } from "next/navigation";

export default function ClientProvider({ children }) {
  const pathName = usePathname();
  const [themeMode, setThemeMode] = useState("light");

  // initialize theme from localStorage or system
  useEffect(() => {
    const stored =
      typeof window !== "undefined" && localStorage.getItem("theme");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");
    setThemeMode(initial);
  }, []);

  // reflect theme to html attribute and persist
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", themeMode);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", themeMode);
    }
  }, [themeMode]);

  const navbarPaths = [
    { path: "/", label: "Dashboard" },
    { path: "/tasks", label: "My Tasks" },
    { path: "/admin-dashboard", label: "Admin Dashboard" },
  ];

  const navbarPathObj = navbarPaths.find((item) =>
    pathName.startsWith(item.path)
  );

  const hideNavbarPaths = ["/login", "/signup"];

  const hideNavbar = hideNavbarPaths.some((path) => pathName.startsWith(path));

  const sidebarPaths = [
    { path: "/", label: "Dashboard" },
    { path: "/tasks", label: "My Tasks" },
    { path: "/admin-dashboard", label: "Admin Dashboard" },
  ];

  const displaySidebarObj = sidebarPaths.find((item) => pathName === item.path);

  return (
    <ConfigProvider
      theme={{
        ...themePalette,
        cssVar: true,
        hashed: false,
        algorithm:
          themeMode === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      <AntdRegistry>
        <Provider store={store}>
          <Auth>
            <AuthLayout>
              <Layout className={styles.layout}>
                {!hideNavbar && navbarPathObj && (
                  <div className={styles.navHeaderDiv}>
                    <Navbar
                      defaultSelection={navbarPathObj.label}
                      path={navbarPathObj.path}
                      themeMode={themeMode}
                      onToggleTheme={() =>
                        setThemeMode((m) => (m === "dark" ? "light" : "dark"))
                      }
                    />
                  </div>
                )}

                <Layout>
                  <div className={hideNavbar ? "" : styles.bottomBody}>
                    {displaySidebarObj && (
                      <div>
                        <Sidebar />
                      </div>
                    )}

                    {children}
                  </div>
                </Layout>
              </Layout>
            </AuthLayout>
          </Auth>
        </Provider>
      </AntdRegistry>
    </ConfigProvider>
  );
}
