import Head from "next/head";
import Link from "next/link";
import Header from "../../components/commmons/Header";
import Footer from "../../components/commmons/Footer";
import { TemplateIcon } from "@heroicons/react/outline";

function Saved() {
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
            <Link href="/mycourse/learning">All Courses</Link>
            <Link href="/mycourse/learning-path">Learning Path</Link>
            <Link href="/mycourse/saved">
              <a className="border-b border-1 border-white">Saved</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-20 flex items-center mt-10 gap-5">
        <TemplateIcon className="h-20 w-20 text-grey-800" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl font-bold">
            All you'r saved courses will appear here
          </p>
          <p className="text-grey-800">
            Discover new playlist or create your own
          </p>
          <button className="bg-black/[0.9] rounded-md py-2 w-full font-bold text-white">
            Explore collections
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Saved;
