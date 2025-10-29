import React from "react";
import { Table as AntTable } from "antd";
import styles from "./table.module.css";

const Table = React.forwardRef(({ ...props }, ref) => {
  return <AntTable {...props} className={styles.antTable} />;
});

export default Table;
