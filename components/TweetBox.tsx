import { CalendarDaysIcon, CalendarIcon, FaceSmileIcon, MagnifyingGlassCircleIcon, MapPinIcon, PhotoIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const TweetBox = () => {
    const [input, setInput] = useState<string>('')
  return (
    <div className="flex space-x-2 p-5">
        <img src="images/profile.jpg" className="w-14 h-14 object-cover rounded-full mt-4"/>
        <div className="flex flex-1 items-center pl-2">
            <form className="flex flex-1 flex-col">
                <input type="text" className="outline-none h-24 w-full text-xl placeholder:text-xl" placeholder="What's Happening?"
                value={input}
                onChange = {(e)=>setInput(e.target.value)}
                />
                <div className="flex items-center">
                    <div className="flex space-x-3 text-twitter flex-1 ">
                        <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                        <MagnifyingGlassCircleIcon className="h-5 w-5"/>
                        <FaceSmileIcon className="h-5 w-5"/>
                        <CalendarDaysIcon className="h-5 w-5"/>
                        <MapPinIcon className="h-5 w-5"/>
                    </div>
                    <button
                    disabled={!input}
                    className="bg-twitter px-5 py-2 text-white rounded-full disabled:opacity-40">
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox