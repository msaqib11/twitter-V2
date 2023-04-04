import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="px-2 mt-2">
      <div className="flex items-center mt-2 space-x-2 bg-slate-100 p-3 rounded-full">
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
        <input
          type="text"
          className="bg-transparent outline-none flex-1"
          placeholder="Search here"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 1000 }}
      />
    </div>
  );
};

export default Widgets;
