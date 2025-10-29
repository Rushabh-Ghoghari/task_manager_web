"use client";

import React from "react";
import { Layout } from "antd";
import LoginForm from "@/src/components/login/LoginForm";
import LoginSideImage from "@/src/components/login/LoginSideImage";
import styles from "@/src/components/login/LoginPage.module.css";
import SignUpForm from "@/src/components/login/SignUpForm";

const { Content } = Layout;

const SignUpPage = () => {
  return (
    <Layout className={styles.loginContainer}>
      <Content className={styles.loginContent}>
        <LoginSideImage />
        <div className={styles.rightPanel}>
          <SignUpForm />
        </div>
      </Content>
    </Layout>
  );
};

export default SignUpPage;
