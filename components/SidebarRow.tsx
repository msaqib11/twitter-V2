import { SVGProps } from "react"

interface props {
    Icon: React.ElementType,
    title : string
}

const SidebarRow = ({Icon,title} : props ) => {
  return (
    <div className="group flex max-w-fit  items-center space-x-2 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-200   ">
        <Icon className="h-6 w-6"/>
        <p className="group-hover:text-twitter">{title}</p>
    </div>
  )
}

export default SidebarRow