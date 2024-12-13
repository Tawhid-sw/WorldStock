import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Navigation, MobileNavigation } from "../global/Contents";
import { NavLink } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineInsertPhoto } from "react-icons/md";
import UserLogo from "../assets/userLogo.png";
import { DataProvider } from "../global/GlobalContext";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Grade from "grade-js";

const Navbar = () => {
  useEffect(() => {
    window.onload = () => {
      Grade(document.querySelectorAll(".gradient-wrap"));
    };
  }, []);
  const { type, setType } = useContext(DataProvider);
  const [isDisplay, setDisplay] = useState(false);
  return (
    <nav className="flex items-center justify-between h-20 gap-4 px-1 py-2 border xsm:px-4 md:px-8">
      <div className="justify-start gap-10 lg:w-1/2 fx-row max-sm:-translate-x-3">
        <a
          href="/"
          className="text-xl font-extrabold sm:text-2xl fx-row font-RocknRoll"
        >
          <img src={Logo} alt="Logo" className="w-16" />
          FotoFlow
        </a>
        <div className="flex-row items-center hidden gap-1 lg:flex">
          {Navigation.map((nav, index) => {
            return (
              <NavLink
                key={nav.lable + index}
                to={nav.herf}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-white border bg-slate-400"
                      : "text-textMuted"
                  }  px-3 py-2 rounded-3xl fx-row gap-1 tr-drop font-Quicksand font-semibold text-[0.89rem]`
                }
              >
                {nav.icon} {nav.lable}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="justify-end gap-4 lg:w-1/2 fx-row">
        <div className="w-[70%] max-sm:hidden fx-row gap-2 h-12 justify-between text-[1rem] rounded-3xl px-3 py-2 bg-gray-100 boerder border-borderDark">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="w-24 gap-2 p-0 m-1 text-[1rem] text-gray-600 border-none shadow-none outline-none btn"
            >
              <span className="text-xl">
                {type === "Photos" ? (
                  <MdOutlineInsertPhoto />
                ) : (
                  <IoVideocamOutline />
                )}
              </span>
              {type}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content rounded-md menu bg-base-100 rounded-box z-[1] w-52 shadow"
            >
              <li className="gap-2 fx-row">
                <button
                  onClick={() =>
                    setType(type === "Photos" ? "Videos" : "Photos")
                  }
                >
                  <span className="text-2xl">
                    {type === "Videos" ? (
                      <MdOutlineInsertPhoto />
                    ) : (
                      <IoVideocamOutline />
                    )}
                  </span>
                  {type === "Photos" ? "Videos" : "Photos"}
                </button>
              </li>
            </ul>
          </div>
          <input
            type="text"
            name="Search"
            className="w-full h-12 bg-transparent outline-none border-nonr focus-within:outline-none"
            placeholder="Search for free Photos"
          />
          <button className="text-xl">
            <IoSearchOutline />
          </button>
        </div>
        <div className="sm:gap-3 xsm:gap-0 md:gap-6 fx-row">
          <button
            onMouseOver={(e) => {
              e.target.classList.add("wobble");
            }}
            onMouseLeave={(e) => e.target.classList.remove("wobble")}
            className="p-2 text-xl rounded-full fx-row max-md:hidden"
          >
            <FaRegBell />
          </button>
          <button className="hidden p-2 bg-blue-300 rounded-full sm:block group">
            <img
              src={UserLogo}
              alt="User"
              className="w-6 group-active:scale-75 tr-drop"
            />
          </button>
          <button className="p-2 text-2xl rounded-full active:bg-gray-200 tr-drop sm:hidden fx-row">
            <IoSearchOutline />
          </button>
          <button
            onClick={() => setDisplay(!isDisplay)}
            className="p-2 text-3xl rounded-full tr-drop lg:hidden fx-row"
          >
            {isDisplay ? (
              <IoMdClose className="rotateL" />
            ) : (
              <BiMenuAltRight className="rotateR" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`absolute top-[4.9rem] left-0 z-10 ${
          isDisplay ? "block" : "hidden"
        }   md:hidden w-full h-full bg-white text-primary`}
      >
        <div className="justify-between px-3 py-4 gradient-wrap sm:hidden fx-row bg-slate-500">
          <div className="justify-start gap-2 fx-row">
            <img
              src={UserLogo}
              className="w-12 p-2 bg-blue-300 border rounded-full"
            />
            <h1 className="text-[1rem] font-medium font-RocknRoll text-white">
              User_np429
            </h1>
          </div>
          <button
            onMouseOver={(e) => {
              e.target.classList.add("wobble");
            }}
            onMouseLeave={(e) => e.target.classList.remove("wobble")}
            className="p-2 text-xl rounded-full fx-row "
          >
            <FaRegBell />
          </button>
        </div>
        <ul className="px-3 py-4">
          {MobileNavigation.map((nav, index) => {
            return (
              <li
                key={nav.lable + "Mobile_Menu"}
                className="my-2 text-lg font-medium tr-drop"
              >
                <NavLink
                  to={nav.herf}
                  className={({ isActive }) =>
                    `fx-row gap-1 py-2 px-3 ${
                      isActive ? "text-textPrimary" : "text-textMuted"
                    }`
                  }
                >
                  {nav.icon} {nav.lable}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
