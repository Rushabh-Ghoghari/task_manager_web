import React from "react";
import { Badge, Dropdown, Space } from "antd";
import styles from "./dropDown.module.css";
import { ArrowDownIcon } from "@/src/lib/icons";

const FormDropdown = React.forwardRef(
  ({ items, label, badgeCount, className, ...props }, ref) => {
    return (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        {...props}
        className={`${styles.formDropdown} ${className}`}
      >
        <a
          onClick={(e) => e.preventDefault()}
          style={{ color: "#373e4e", width: "100%" }}
        >
          <div className={styles.dropDownWrapper}>
            <div
              style={{ width: "100%" }}
              className={`${styles.textBadgeWrapper}`}
            >
              <div className={styles.labelBadgeWrapper}>
                {label}
                <Badge
                  count={badgeCount}
                  className={styles.formBadge}
                  size="small"
                />
              </div>
            </div>
            <ArrowDownIcon />
          </div>
        </a>
      </Dropdown>
    );
  }
);

export default FormDropdown;
