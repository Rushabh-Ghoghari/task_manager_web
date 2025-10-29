import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Button, Typography } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { sendOTP, verifyOtp } from "@/src/store";
import LeftArrow from "@/src/assets/images/left-arrow.svg";
const { Title, Text } = Typography;

import styles from "./OtpForm.module.css";
import Image from "next/image";
import { LeftArrowIcon } from "@/src/lib/icons";

const OtpForm = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();
  const router = useRouter();

  const inputRefs = useRef([]);

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [form] = Form.useForm();
  const [error, setError] = useState(false);

  const { Text } = Typography;

  useEffect(() => {
    if (error && otp.join("").trim().length === 4) {
      setError(false);
    }
  }, [otp]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input if the current input value length is 1
    if (element.value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const otpArray = paste.split("").slice(0, 4);
    setOtp(otpArray);

    otpArray.forEach((value, index) => {
      if (index < otpArray.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    });
  };

  const handleResendOTP = (e) => {
    e.preventDefault();

    toast.promise(dispatch(sendOTP({ userId: auth?.user.id })).unwrap(), {
      loading: "Resending OTP...",
      success: (res) => {
        return "OTP resent successfully";
      },
      error: (err) => {
        console.log("err ", err);
        return "Failed to resend OTP.";
      },
      finally: () => {
        form.resetFields();
        setOtp(new Array(4).fill(""));
      },
    });
  };

  const onFinish = (values) => {
    if (otp.join("").trim().length !== 4) {
      console.log("otp ", typeof +otp.join("").trim());
      setError(true);
      return;
    }

    const data = {
      userId: auth.user.id,
      otp: otp.join("").trim(),
    };

    toast.promise(dispatch(verifyOtp(data)).unwrap(), {
      loading: "Verifing...",
      success: (res) => {
        router.push("/");
        return "Login successful";
      },
      error: (err) => {
        console.log("err ", err);
        return "OTP is incorrect";
      },
      finally: () => {
        form.resetFields();
        setOtp(new Array(4).fill(""));
      },
    });
  };

  const maskPhoneNumber = (phone) => {
    if (!phone) return "";
    return phone.replace(/(\d{2})(\d{1})(\d{6})(\d{3})/, "$1 $2******$4");
  };

  const handleBackToLogin = () => {
    router.replace("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.otpFormTitleDiv}>
        <Title className={styles.title}>Two Factor Authentication</Title>
        <Text className={styles.description}>
          Please enter the OTP (one time password) to verify your account. A
          code has been sent to
          <br />
        </Text>
        <Text className={styles.maskedPhoneNumber}>
          {auth.user && maskPhoneNumber(auth.user.phone)}
        </Text>
      </div>
      <Form onFinish={onFinish} form={form}>
        <div className={styles.inputWrapper}>
          <Form.Item className={styles.formItem}>
            <div className={styles.parentContainer}>
              <div className={styles.otpInputContainer} onPaste={handlePaste}>
                {otp.map((data, index) => (
                  <Input
                    ref={(el) => (inputRefs.current[index] = el)}
                    id={`otp-input-${index}`}
                    className={styles.otpInput}
                    type="number"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={(e) => e.target.select()}
                    autoComplete="off"
                  />
                ))}
              </div>
            </div>
          </Form.Item>
        </div>

        {error && (
          <Text className={styles.errorTxt} type="danger">
            OTP is required!
          </Text>
        )}

        <div className={styles.formBtn}>
          <Form.Item className={styles.formItem}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className={styles.otpButton}
            >
              Verify
            </Button>
          </Form.Item>
        </div>

        <div className={styles.resendTextContainer}>
          <Text className={styles.resendText} onClick={handleResendOTP}>
            Not received your code?{" "}
            <Text className={styles.resendLink}>Resend code</Text>
          </Text>
        </div>

        <div className={styles.backLinkContainer} onClick={handleBackToLogin}>
          <LeftArrowIcon width={24} height={24} color="var(--text-secondary)" />
          <span className={styles.backLink}>Back to Log In</span>
        </div>
      </Form>
    </div>
  );
};

export default OtpForm;
