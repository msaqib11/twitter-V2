import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import  Head  from "next/head";

export default function Home() {
  return <div className="">
    <Head>
      <title>
          Twitter 2.0
      </title>
    </Head>
    <main>
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </main>
  </div>;
}
