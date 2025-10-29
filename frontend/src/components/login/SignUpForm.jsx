"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Typography, Layout, Row, Col, Flex, Input } from "antd";
import { login, signup } from "@/src/store";
import { toast } from "sonner";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
import { FormInput } from "../ui/input/formInput";

const SignUpForm = () => {
  const router = useRouter();
  const auth = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    toast.promise(dispatch(signup(credentials)).unwrap(), {
      loading: "Login...",
      success: (res) => {
        router.push("/login");
        return "Sign Up successful";
      },
      error: (err) => {
        if (err.message) {
          return err.message;
        }
        console.log("err ", err);
        return "Sign Up failed";
      },
      finally: () => {
        form.resetFields();
        setCredentials({ email: "", password: "" });
      },
    });
  };

  return (
    <div className={styles.formContainer}>
      <Typography className={styles.title}>Sign Up</Typography>
      <Typography className={styles.description}>
        Please enter your details.
      </Typography>
      <div className={styles.loginForm}>
        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <div className={styles.inputWrapper}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                },
                {
                  validator: (_, value) => {
                    if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Invalid email address");
                  },
                },
              ]}
            >
              <FormInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </Form.Item>
          </div>

          <div className={styles.inputWrapper}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required!",
                },
                {
                  validator: (_, value) => {
                    if (!value || value.trim().length > 0) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Password is required!");
                  },
                },
              ]}
            >
              <FormInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </Form.Item>
          </div>

          <Form.Item className={styles.formInner}>
            <Button
              type="primary"
              htmlType="submit"
              loading={auth.isLoading}
              size="large"
              className={styles.formButton}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
