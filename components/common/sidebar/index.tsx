import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import { AiOutlineHome } from "react-icons/ai";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";

const Index = () => {
    return (
        <div className="md:w-full bg-gray-100">
            <BottomBar
                home={<AiOutlineHome className="w-6 h-6" />}
                download={<FaDownload className="w-5 h-5" />}
                collections={<MdCollectionsBookmark className="w-5 h-5" />}
                favourites={<FaRegHeart className="w-5 h-5" />}
                localFiles={<FaRegFolder className="w-5 h-5" />}
                discover={<RiCompassDiscoverLine className="w-5 h-5" />}
            />
            <Sidebar
                home={<AiOutlineHome className="w-6 h-6" />}
                download={<FaDownload className="w-5 h-5" />}
                collections={<MdCollectionsBookmark className="w-5 h-5" />}
                favourites={<FaRegHeart className="w-5 h-5" />}
                localFiles={<FaRegFolder className="w-5 h-5" />}
                discover={<RiCompassDiscoverLine className="w-5 h-5" />}
            />
        </div>
    );
};

export default Index;
