import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";
import HomeIcon from "@/public/images/sidebar/HomeIcon";
import DownloadIcon from "@/public/images/sidebar/DownloadIcon";
import CollectionsIcon from "@/public/images/sidebar/CollectionsIcon";
import FavouritesIcon from "@/public/images/sidebar/FavouritesIcon";
import LocalFilesIcon from "@/public/images/sidebar/LocalFilesIcon";
import DiscoverIcon from "@/public/images/sidebar/DiscoverIcon";

const Index = () => {
    return (
        <div className="md:w-full bg-gray-100">
            <BottomBar
                home={<HomeIcon />}
                download={<DownloadIcon />}
                collections={<CollectionsIcon />}
                favourites={<FavouritesIcon />}
                localFiles={<LocalFilesIcon />}
                discover={<DiscoverIcon />}
            />
            <Sidebar
                home={<HomeIcon />}
                download={<DownloadIcon />}
                collections={<CollectionsIcon />}
                favourites={<FavouritesIcon />}
                localFiles={<LocalFilesIcon />}
                discover={<DiscoverIcon />}
            />
        </div>
    );
};

export default Index;
