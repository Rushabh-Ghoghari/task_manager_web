import React from "react";
import styles from "./button.module.css";
import { Button } from "antd";

const FormButton = React.forwardRef(
  (
    {
      label,
      bgColor,
      txtColor,
      btnWidth,
      btnRadius,
      className,
      btnBorderVisible,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        {...props}
        style={{
          backgroundColor: `${bgColor}`,
          color: `${txtColor}`,
          borderRadius: `${btnRadius}`,
        }}
        className={`${styles.btn} ${className}`}
      >
        {label}
      </Button>
    );
  }
);

export default FormButton;
