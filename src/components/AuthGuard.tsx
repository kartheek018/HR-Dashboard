"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!loggedIn) {
      router.push("/login");
    } else {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <>{isLoggedIn && children}</>;
}
