"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [text, setText] = useState("TheCodeBreakers");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const breakPoint = 1000;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakPoint);
      setText(window.innerWidth < 480 ? "TCB" : "TheCodeBreakers");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleHam = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="h-[12vh] w-full flex items-center justify-between px-6 bg-gray-900 text-white">
      <div className="flex items-center space-x-3 text-lg font-semibold">
        <Image
          src="/placeholder.svg"
          alt="tcblogo"
          width={50}
          height={50}
          className="object-contain"
        />
        <span className="bg-gradient-to-r from-[#9BFFFF] via-[#3FFFFF] to-[#036] bg-clip-text text-transparent font-['Viga']">
          {text}
        </span>
      </div>

      {!isMobile ? (
        <nav className="flex space-x-8 text-gray-300">
            <Link
              href={"/"}
              className="hover:text-white transition duration-300 ease-in-out relative py-2 px-1
                         hover:border-b-2 hover:border-[#027498] hover:shadow-[0_4px_10px_rgba(3,226,255,0.5)]
                         hover:-translate-y-0.5"
            >
              Home
            </Link>
          {[
            "About",
            "Achivements",
            "Events",
            "Resources",
            "Register",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-white transition duration-300 ease-in-out relative py-2 px-1
                         hover:border-b-2 hover:border-[#027498] hover:shadow-[0_4px_10px_rgba(3,226,255,0.5)]
                         hover:-translate-y-0.5"
            >
              {item}
            </Link>
          ))}
        </nav>
      ) : (
        <div className="relative">
          <div
            className="w-[53px] h-[53px] flex items-center justify-center cursor-pointer"
            onClick={toggleHam}
          >
            {!isOpen ? <Menu color="white" /> : <X color="white" />}
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-around bg-black">
              <nav className="h-[90%] w-full flex items-center justify-center">
                <ul className="h-full w-full flex flex-col justify-evenly items-center text-3xl pb-[10%]">
                  <li>
                    <Link
                      href={"/"}
                      className="text-[#027498] font-medium hover:text-white transition duration-300"
                    //   onClick={toggleHam}
                    >
                      Home
                    </Link>
                  </li>
                  {["About", "Achievements", "Events", "Resources"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="text-[#027498] font-medium hover:text-white transition duration-300"
                          onClick={toggleHam}
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default NavBar;
