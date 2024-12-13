import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import FreeVideos from "../pages/FreeVideos";
import PopularSearches from "../pages/PopularSearches";
import Profile from "../pages/Profile";
import UserInfo from "../pages/UserInfo";
import LikedPhotos from "../pages/LikedPhotos";
import Collcetion from "../pages/Collcetion";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/discover-photos",
        element: <Discover />,
      },
      {
        path: "/free-videos",
        element: <FreeVideos />,
      },
      {
        path: "/populae-searches",
        element: <PopularSearches />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/user/",
        element: <UserInfo />,
      },
      {
        path: "/favorite",
        element: <LikedPhotos />,
      },
      {
        path: "/collcetions",
        element: <Collcetion />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
