import axios from "axios";
import Cookies from "js-cookie";
import { Router } from "next/router";
import { toast } from "sonner";

const apiClient = axios.create({
  baseURL: "http://localhost:8081/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const jsonString = Cookies.get("user");
    const user = JSON.parse(jsonString || null);

    if (user && user.accessToken) {
      config.headers.Authorization = user.accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      toast.error(
        error?.response?.data?.message && error?.response?.data?.message
      );

      setTimeout(() => {
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }, 2000);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
