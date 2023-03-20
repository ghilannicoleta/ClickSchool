import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { UserProvider, useUserContext } from "@/context/userContext";
import Sidebar from "@/components/Sidebar";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <UserProvider>
          <Sidebar />
          <UserProfile />
        </UserProvider>
      </main>
    </>
  );
}
