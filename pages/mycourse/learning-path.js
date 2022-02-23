import Head from "next/head";
import Link from "next/link";
import _ from "lodash";
import Header from "../../components/commmons/Header";
import Footer from "../../components/commmons/Footer";
import BubbleChart from "../../components/graph/BubbleChart";

console.log(
  _.map(_.range(24), () => {
    return {
      v: _.random(10, 100),
    };
  })
);
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
            <Link href="/mycourse/learning">All Courses</Link>
            <Link href="/mycourse/learning-path">
              <a className="border-b border-1 border-white"> Learning Path </a>
            </Link>
            <Link href="/mycourse/saved">Saved</Link>
          </div>
        </div>
      </div>
      <div className="px-20 flex items-center mt-10 gap-5">
        {/* <BubbleChart
          graph={{
            zoom: 1.1,
            offsetX: -0.05,
            offsetY: -0.01,
          }}
          width={1000}
          height={800}
          padding={0} // optional value, number that set the padding between bubbles
          showLegend={true} // optional value, pass false to disable the legend.
          legendPercentage={20} // number that represent the % of with that legend going to use.
          legendFont={{
            family: "Arial",
            size: 12,
            color: "#000",
            weight: "bold",
          }}
          valueFont={{
            family: "Arial",
            size: 12,
            color: "#fff",
            weight: "bold",
          }}
          labelFont={{
            family: "Arial",
            size: 16,
            color: "#fff",
            weight: "bold",
          }}
          //Custom bubble/legend click functions such as searching using the label, redirecting to other page
          bubbleClickFunc={bubbleClick}
          legendClickFun={legendClick}
          data={[
            { label: "CRM", value: 1 },
            { label: "API", value: 1 },
            { label: "Data", value: 1 },
            { label: "Commerce", value: 1 },
            { label: "AI", value: 3 },
            { label: "Management", value: 5 },
            { label: "Testing", value: 6 },
            { label: "Mobile", value: 9 },
            { label: "Conversion", value: 9 },
            { label: "Misc", value: 21 },
            { label: "Databases", value: 22 },
            { label: "DevOps", value: 22 },
            { label: "Javascript", value: 23 },
            { label: "Languages / Frameworks", value: 25 },
            { label: "Front End", value: 26 },
            { label: "Content", value: 26 },
          ]} */}
        {/* /> */}
        <BubbleChart
          useLabels
          data={[
            { label: "CRM", value: 1 },
            { label: "API", value: 1 },
            { label: "Data", value: 1 },
            { label: "Commerce", value: 1 },
            { label: "AI", value: 3 },
            { label: "Management", value: 5 },
            { label: "Testing", value: 6 },
            { label: "Mobile", value: 9 },
            { label: "Conversion", value: 9 },
            { label: "Misc", value: 21 },
            { label: "Databases", value: 22 },
            { label: "DevOps", value: 22 },
            { label: "Javascript", value: 23 },
            { label: "Frameworks", value: 25 },
            { label: "Front End", value: 26 },
            { label: "Content", value: 26 },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Mycourse;
