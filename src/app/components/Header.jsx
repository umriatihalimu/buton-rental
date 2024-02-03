"use client";

//next image
import Image from "next/image";

//react scroll
import { Link } from "react-scroll";

import { BiX } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

//media query hook
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect, useState } from "react";

// search context
import { SearchContext } from "../context/search";
import SearchMobile from "./SearchMobile";

const Header = () => {
  // pakai context
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    // console.log(desktopMode);
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search
      if (window.scrollY > 600) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    //add event listener
    window.addEventListener("scroll", handleScroll);

    // remove evenlistener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header
          ? "bg-white shadow-md py-2 "
          : "bg-transparent shadow-none py-4 pt-2"
      }fixed w-full max-w-[1920px] mx-auto z-30 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row  xl:justify-between xl:items-center ">
        <div className="flex justify-between items-center xl:mr-0 xl:ml-0 mr-2 ml-2 ">
          <Link
            to="home"
            spy={true}
            smooth={desktopMode}
            className="cursor-pointer"
          >
            <Image
              src={"/assets/icons/logo-potong.png"}
              height={90}
              width={110}
              alt=""
              priority={false}
            />
          </Link>

          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-3xl" /> //klo true muncul
            ) : (
              <IoMdMenu className="text-3xl" /> //klo false muncul
            )}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-4 px-4 font-bold " : "xl:max-h-max max-h-0 px-4"
          } flex xl:flex-row flex-col gap-y-2 bg-white xl:font-medium overflow-hidden xl:gap-x-4 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase xl:normal-case text-sm xl:text-[15px] `}
        >
          <Link
            to="home"
            spy={true}
            smooth={desktopMode}
            activeClass="active"
            className="cursor-pointer"
          >
            Beranda
          </Link>
          <Link
            to="motor"
            spy={true}
            smooth={desktopMode}
            activeClass="active"
            className="cursor-pointer"
          >
            Motor
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={desktopMode}
            activeClass="active"
            className="cursor-pointer"
          >
            Tentang
          </Link>
          <Link
            to="why"
            spy={true}
            smooth={desktopMode}
            activeClass="active"
            className="cursor-pointer"
          >
            Kenapa kami
          </Link>
          <Link
            to="testimoni"
            spy={true}
            smooth={desktopMode}
            activeClass="active"
            className="cursor-pointer"
          >
            Testimoni
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={desktopMode}
            activeClass="active"
            className="cursor-pointer"
          >
            Kontak
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={desktopMode}
            activeClass="active"
            className="xl:hidden btn btn-primary btn-sm max-w-[150px] max-h-[37px] mx-auto"
          >
            Lihat semua
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
