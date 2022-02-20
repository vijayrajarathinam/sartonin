import React, { useEffect } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";

import Login from "../components/auth/Login";
import Header from "../components/commmons/Header";
import Footer from "../components/commmons/Footer";
import List from "../components/home/List";
import Infocard from "../components/home/Infocard";
import PopularCategories from "../components/home/PopularCategories";
export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();
  if (!isAuthenticated) return <Login />;

  useEffect(() => {
    if (isAuthenticated) console.log(user);
  }, []);

  return (
    <div className="flex flex-col">
      <Head>
        <title>Sartonin | Home Page</title>
        <meta name="description" content="saratonin home page, with collection of courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <h1 className="text-3xl font-bold underline"> Hello world! </h1> */}

      <div className="px-10">
        <List />
        <Infocard />
        <PopularCategories />
        {/* Recommendation */}
      </div>
      <Footer />
    </div>
  );
}
