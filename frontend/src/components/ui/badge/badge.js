import React from "react";
import { Badge } from "antd";
import styles from "./badge.module.css";

const FormBadge = React.forwardRef(({ badgeCount, ...props }, ref) => {
  return (
    <Badge
      {...props}
      count={badgeCount}
      className={styles.formBadge}
      size="small"
    />
  );
});

export default FormBadge;
