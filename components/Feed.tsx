import { ArrowPathIcon } from "@heroicons/react/24/outline"

const Feed = () => {
  return (
    <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 font-bold text-xl ">Home</h1>
        <ArrowPathIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
    </div>
  )
}

export default Feed