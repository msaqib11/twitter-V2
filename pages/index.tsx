import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { Tweet } from "@/typing";
import { fetchTweets } from "@/utils/fetchTweets";
import { GetServerSideProps } from "next";
import  Head  from "next/head";
import { Toaster } from "react-hot-toast";

interface Props {
  tweets : Tweet[]
}

export default function Home({tweets}:Props) {
  return <div className="lg:max-w-7xl mx-auto max-h-screen overflow-hidden">
    <Head>
      <title>
          Twitter 2.0
      </title>
    </Head>
    <Toaster/>
    <main className="grid grid-cols-9">
      <Sidebar/>
      <Feed tweets={tweets}/>
      <Widgets/>
    </main>
  </div>;
}


export const getServerSideProps: GetServerSideProps = async (context) => {
   const tweets = await fetchTweets();

  return {
    props : {tweets}
  }
}