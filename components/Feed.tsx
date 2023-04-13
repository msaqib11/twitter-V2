import { Tweet } from "@/typing";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox";
import TweetComponent from '../components/Tweet'

interface props  {
  tweets : Tweet[]
}

const Feed = ({tweets}:props) => {
  return (
    <div className="col-span-7 lg:col-span-5 border-x overflow-y-scroll	max-h-screen scrollbar-hide ">
      <div className="flex items-center justify-between ">
        <h1 className="p-5 pb-0 font-bold text-xl ">Home</h1>
        <ArrowPathIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125 mt-3 mr-4" />
      </div>

      <div>
        <TweetBox/>
      </div>

      <div>
        {tweets.map((tweet)=>(
          <TweetComponent key={tweet._id} tweet= {tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
