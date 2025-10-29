"use client";

import React from "react";
import { Layout } from "antd";
import LoginForm from "@/src/components/login/LoginForm";
import LoginSideImage from "@/src/components/login/LoginSideImage";
import styles from "@/src/components/login/LoginPage.module.css";

const { Content } = Layout;

const LoginPage = () => {
  return (
    <Layout className={styles.loginContainer}>
      <Content className={styles.loginContent}>
        <LoginSideImage />
        <div className={styles.rightPanel}>
          <LoginForm />
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;
