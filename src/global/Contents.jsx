import { IoHomeOutline } from "react-icons/io5";
import { LiaBinocularsSolid } from "react-icons/lia";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

export const Navigation = [
  {
    lable: "Home",
    herf: "/",
    icon: <IoHomeOutline />,
  },
  {
    lable: "Discover",
    herf: "/discover-photos",
    icon: <LiaBinocularsSolid />,
  },
  {
    lable: "Videos",
    herf: "/free-videos",
    icon: <IoVideocamOutline />,
  },
];

export const MobileNavigation = [
  {
    lable: "Home",
    herf: "/",
    icon: <IoHomeOutline />,
  },
  {
    lable: "Discover",
    herf: "/discover-photos",
    icon: <LiaBinocularsSolid />,
  },
  {
    lable: "Videos",
    herf: "/free-videos",
    icon: <IoVideocamOutline />,
  },
  {
    lable: "Favorite",
    herf: "/favorite",
    icon: <FaRegHeart />,
  },
  {
    lable: "Collcetions",
    herf: "/collcetions",
    icon: <MdOutlineCategory />,
  },
];
