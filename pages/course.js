import React, { useEffect } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";

import Header from "../components/commmons/Header";
import Login from "../components/auth/Login";
// import Filter from "../components/course/Filter";
import CourseList from "../components/course/CourseList";

function course() {
  const { isAuthenticated, user } = useMoralis();
  if (!isAuthenticated) return <Login />;

  useEffect(() => {
    if (isAuthenticated) console.log(user);
  }, []);
  return (
    <div>
      <Head>
        <title>Sartonin | Course Page</title>
        <meta name="description" content="saratonin course page, with collection of courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-10">
        <p className="font-bold text-xl text-gray-800 my-3">10,000 results for "python"</p>
        <CourseList />
      </div>
    </div>
  );
}

export default course;
