"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import IWind from "../../../assets/Images/wind.png";
import Avatar from "../../../assets/Images/Cat.jpg";
import { usePathname } from "next/navigation";
import { Link as NavLinks } from "@/Interfaces/NavLinksInterfaces";
import Link from "next/link";
export default function Navbar() {
  const pathName = usePathname();

  const links: NavLinks[] = [
    {
      path: "/",
      logo: <i className="fa-solid fa-house text-xl"></i>,
      tooltip: "Home",
    },
    {
      path: "/History",
      logo: <i className="fa-solid fa-clock-rotate-left text-xl" />,
      tooltip: "History",
    },
    {
      path: "/Maps",
      logo: <i className="fa-solid fa-map-location-dot text-xl" />,
      tooltip: "Maps",
    },
    {
      path: "/Settings",
      logo: <i className="fa-solid fa-gear text-xl" />,
      tooltip: "Settings",
    },
  ];

  return (
    <div className="relative z-[300]">
      <nav
        aria-label="side bar"
        aria-orientation="vertical"
        className="z-[100] h-[96.5vh] w-[70px] fixed flex flex-col items-center text-center bg-[#002482] text-gray-400 border border-[#002482] rounded-3xl m-4"
      >
        <div className="h-20 flex mx-auto items-center w-full">
          {/* <img
            className="h-6 w-6 mx-auto"
            src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/leaves.png"
          /> */}
          {/* <img
            className="h-10 w-10 mx-auto"
            src="https://cdn-icons-png.flaticon.com/128/8167/8167334.png"
            alt=""
          /> */}
          <Image className="h-10 w-10 mx-auto" src={IWind} alt="" />
        </div>
        <ul className="flex flex-col justify-around gap-5 ">
          {links.map((link: NavLinks, index: number) => {
            return (
              <li key={index} className={styles.LiStyle}>
                <Link
                  href={link.path}
                  className={
                    pathName === link.path
                      ? "text-white p-6 rounded-2xl bg-[#004db7] relative group"
                      : "group-hover:bg-[#004db7] group-hover:text-white  text-gray-400 p-5 rounded-2xl transition-all"
                  }
                >
                  {link.logo}
                </Link>
                <div className={styles.tooltip}>{link.tooltip}</div>
              </li>
            );
          })}
        </ul>
        {/* "LiStyle relative h-16 w-16 group flex items-center flex-col justify-center text-white  rounded-2xl" */}
        {/* "tooltip hidden opacity-0 group-hover:opacity-100 group-hover:block absolute top-full group-hover:-top-[50px] left-[110%] transition-all translate-y-[200%] px-2 py-4 rounded-2xl text-xl bg-cyan-300" */}

        <div className="avatar mt-auto mb-4">
          <div className="mt-auto w-14 flex items-center rounded-full ">
            <Image className="w-full mx-auto" src={Avatar} alt="Avatar" />
          </div>
        </div>
      </nav>
    </div>
  );
}
// sm:w-[48vh] md:w-[83vh]
