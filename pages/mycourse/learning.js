import Head from "next/head";
import Link from "next/link";
import Header from "../../components/commmons/Header";
import Footer from "../../components/commmons/Footer";
import List from "../../components/home/List";
import Card from "../../components/commmons/Card";
import Grid from "../../components/graph/GridCard";

function Mycourse() {
  return (
    <div>
      <Head>
        <title>Sartonin | My Courses</title>
        <meta
          name="description"
          content="saratonin my course, with collection of courses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-black/[0.85] text-white h-auto pt-10">
        <div className="px-20 pt-3 pb-1">
          <p className="text-3xl font-bold">My Learning</p>
          <div className="flex gap-5 pt-7">
            <Link href="/mycourse/learning">
              <a className="border-b border-1 border-white">All Courses</a>
            </Link>
            <Link href="/mycourse/learning-path">Learning Path</Link>
            <Link href="/mycourse/saved">Saved</Link>
          </div>
        </div>
      </div>
      <div className="px-20">
        <Grid />
      </div>
      <Footer />
    </div>
  );
}

export default Mycourse;
