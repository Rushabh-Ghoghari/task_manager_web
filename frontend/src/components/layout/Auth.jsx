"use client";

import React, { useEffect, useState } from "react";
import { fetchAuth, logout } from "@/src/store";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function Auth({ children }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const jsonString = Cookies.get("user");
    const user = JSON.parse(jsonString || null);

    if (!user || !user.accessToken) {
      dispatch(logout());
      setAuthLoading(false);
      return;
    }

    if (user.accessToken) setToken(user.accessToken);

    if (user.accessToken && !auth.isLoading) {
      dispatch(fetchAuth()).finally(() => setAuthLoading(false));
    } else {
      setAuthLoading(false);
    }
  }, []);

  return <main>{React.cloneElement(children, { authLoading, token })}</main>;
}
