import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import { AiOutlineHome } from "react-icons/ai";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";

const Index = () => {
    const sidebarItems = [
        {
            title: "Home",
            icon: <AiOutlineHome className="w-6 h-6" />,
            section: "Features"
        },
        {
            title: "Discover",
            icon: <RiCompassDiscoverLine className="w-6 h-6" />,
            section: "Features"
        },
        {
            title: "Collections",
            icon: <MdCollectionsBookmark className="w-6 h-6" />,
            section: "Features"
        },
        {
            title: "Download",
            icon: <FaDownload className="w-6 h-6" />,
            section: "Library"
        },
        {
            title: "Favourites",
            icon: <FaRegHeart className="w-6 h-6" />,
            section: "Library"
        },
        {
            title: "Local Files",
            icon: <FaRegFolder className="w-6 h-6" />,
            section: "Library"
        },
    ];
    return (
        <div className="bg-gray-100">
            <BottomBar sidebarItems={sidebarItems} />
            <Sidebar sidebarItems={sidebarItems} />
        </div>
    );
};

export default Index;
