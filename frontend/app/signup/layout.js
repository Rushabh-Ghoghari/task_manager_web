import React from "react";
import Head from "next/head";
import styles from "@/src/components/login/LoginPage.module.css";

export const metadata = {
  title: "Sign Up - Salsa",
  description: "Sign Up to access the Salsa POS System",
};

const SignUpLayout = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default SignUpLayout;
