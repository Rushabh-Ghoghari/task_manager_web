import { Typography } from "antd";
import moment from "moment";
import styles from "./FooterText.module.css";

const { Text } = Typography;

const FooterText = () => {
  const currentYear = moment().format("YYYY");

  return (
    <div className={styles.footer}>
      <Typography className={styles.footerText}>
        Powered by <span className={styles.spanText}>Salsa</span> • ©Salsa,
        Inc. {currentYear}. All Rights Reserved.
      </Typography>
    </div>
  );
};

export default FooterText;
