"use client";

import HomeComponent from "./component/HomeComponent";
import { getUserLoggedInStatus } from "./data/users";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!getUserLoggedInStatus()) {
      router.push("/login");
    }
  }, [router]);

  if (!getUserLoggedInStatus()) {
    return null;
  }

  return <HomeComponent />;
}
