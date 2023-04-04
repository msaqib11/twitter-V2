import SidebarRow from "./SidebarRow";
import { BellIcon, BookmarkIcon, EllipsisHorizontalCircleIcon, EnvelopeIcon, HashtagIcon, HomeIcon, QueueListIcon, UserIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div>
      <img src="images/twitterLogo.png" className="h-10 w-10" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={QueueListIcon} title="lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />      
    </div>
  );
};

export default Sidebar;
