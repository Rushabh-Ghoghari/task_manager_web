import * as React from "react";
import {
  Input,
  Form,
  Select,
  Upload,
  Button,
  Radio,
  Checkbox,
  DatePicker,
  TimePicker,
} from "antd";
import styles from "./formInput.module.css";
import Typography from "antd/es/typography/Typography";
import { UploadOutlined } from "@ant-design/icons";

const { MonthPicker } = DatePicker;
const { RangePicker } = DatePicker;
const { RangePicker: TimeRangePicker } = TimePicker;

const FormInput = React.forwardRef(
  (
    {
      buttonLabel,
      label,
      type,
      fileList,
      selectHeight,
      className,
      uploadProps,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {type !== "radio" && type !== "checkbox" && (
          <Typography className={styles.formLabel}>{label}</Typography>
        )}
        {(type === "text" || type === "email" || type === "number") && (
          <Input
            type={type}
            {...props}
            className={`${styles.formInput} ${className}`}
            autoComplete="off"
          />
        )}
        {type === "password" && (
          <Input.Password
            type={type}
            {...props}
            className={`${styles.formInput} ${className}`}
            autoComplete="off"
          />
        )}
        {type === "select" && (
          <Select
            {...props}
            className={`${styles.formSelect} ${className}`}
            autoComplete="off"
            style={{ height: selectHeight }}
          />
        )}
        {type === "radio" && (
          <Radio.Group {...props} className={styles.radioWrapper} />
        )}
        {type === "checkbox" && (
          <Checkbox.Group {...props} className={styles.addOn} />
        )}
        {type === "upload" && (
          <Upload
            {...uploadProps}
            className={`${styles.upload} ${className}`}
            fileList={fileList}
          >
            <Button icon={<UploadOutlined />}>{buttonLabel}</Button>
          </Upload>
        )}

        {type === "rangeDatePicker" && (
          <RangePicker
            className={`${styles.rangeDatePicker} ${className}`}
            {...props}
          />
        )}

        {type === "rangeTimePicker" && (
          <TimeRangePicker
            className={`${styles.rangeTimePicker} ${className}`}
            {...props}
          />
        )}
      </>
      // </Form.Item>
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
