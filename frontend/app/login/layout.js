import React from "react";
import Head from "next/head";
import styles from "@/src/components/login/LoginPage.module.css";


export const metadata = {
  title: "Login - Salsa",
  description: "Login to access the Salsa POS System",
};

const LoginLayout = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default LoginLayout;
