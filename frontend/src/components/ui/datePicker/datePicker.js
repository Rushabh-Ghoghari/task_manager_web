import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const AntdDatePicker = React.forwardRef(({ ...props }, ref) => {
  return <RangePicker {...props} />;
});

export default AntdDatePicker;
