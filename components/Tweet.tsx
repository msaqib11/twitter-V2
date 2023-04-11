import { Tweet } from "@/typing"
import { ArrowsRightLeftIcon, ArrowUpTrayIcon, ChatBubbleLeftRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

interface props {
    tweet : Tweet
}

const Tweet = ({tweet} : props) => {
  return (
    <div className="flex flex-col space-x-3 border-y border-slate-100 p-5">
        <div className="flex space-x-3">
            <img className="h-10 w-10 rounded-full object-cover" src={tweet.profileImg}/>
            <div>
                <div className="flex items-center space-x-1">
                    <p className="mr-1 font-bold">{tweet.username}</p>
                    {/* removing spaces and lowering username with prefixing @ like @msaqib11 */}
                    <p className="hidden text-sm text-slate-500 sm:inline">@{tweet.username.replace(/\s+/g,'').toLowerCase()}</p>
                    <TimeAgo className="text-sm text-slate-500" datetime= {tweet._createdAt}/>
                </div>
            <p>{tweet.text}</p>
            {tweet.image && <img className="m-5 ml-0 mb-1 max-h-60 object-cover shadow-sm rounded-lg" src={tweet.image} alt='' />}
            </div>
        </div>
        <div className="flex justify-between mt-5">
            <div className="flex items-center space-x-3 text-slate-400 cursor-pointer"><ChatBubbleLeftRightIcon className="h-5 w-5"/>
            <p>5</p>
            </div>
            <div className="flex items-center space-x-3 text-slate-400 cursor-pointer"><ArrowsRightLeftIcon className="h-5 w-5"/></div>
            <div className="flex items-center space-x-3 text-slate-400 cursor-pointer"><HeartIcon className="h-5 w-5"/>
            <p>1</p>
            </div>
            <div className="flex items-center space-x-3 text-slate-400 cursor-pointer"><ArrowUpTrayIcon className="h-5 w-5"/></div>
        </div>
    </div>
  )
}

export default Tweet