"use client";

import React from "react";
import Image from "next/image";
import logingBg from "@/src/assets/images/login-bg.svg";
import styles from "./LoginSideImage.module.css";

const LoginSideImage = () => {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.backgroundImageContainer}>
        <Image
          src={logingBg}
          alt="Background"
          quality={100}
          fill
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
};

export default LoginSideImage;
