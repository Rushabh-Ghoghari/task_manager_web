"use client";

import LoginPage from "@/app/login/page";
import { Spin } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Layout({ children, authLoading, token }) {
  const router = useRouter();
  const pathname = usePathname();
  const auth = useSelector((state) => state.auth);

  const [resolving, setResolving] = useState(true);

  // Define route access
  const paths = [
    { href: "/", roles: ["admin", "user"] },
    { href: "/tasks", roles: ["user"] },
    { href: "/admin-dashboard", roles: ["admin"] },
  ];

  // Routes that don't require login
  const publicPaths = ["/login", "/signup"];

  useEffect(() => {
    setResolving(true);

    // Wait while auth is loading
    if (authLoading || auth.isLoading) {
      setResolving(false);
      return;
    }

    // Allow public routes without redirect
    if (publicPaths.includes(pathname)) {
      setResolving(false);
      return;
    }

    // Redirect if not logged in
    if (!auth.user) {
      router.replace("/login");
      setResolving(false);
      return;
    }

    // Role-based protection
    const currentPath = paths.find((p) => p.href === pathname);
    if (currentPath && !currentPath.roles.includes(auth.user.role)) {
      router.replace("/");
      return;
    }

    // Prevent logged-in users from accessing login or signup
    if (auth.user && ["/login", "/signup"].includes(pathname)) {
      router.replace("/");
      return;
    }

    setResolving(false);
  }, [pathname, auth.user, authLoading]);

  // Rendering logic
  if (auth.isLoading || authLoading || resolving) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  // If logged in, render children
  if (auth.user) return children;

  // If not logged in, show login/signup normally
  if (pathname === "/signup") {
    return children; // render signup page directly
  }

  return <LoginPage />;
}
