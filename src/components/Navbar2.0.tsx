"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { IoHome, IoInformationCircle, IoTrophy, IoCalendar, IoLibrary } from "react-icons/io5";

interface NavItem {
  icon: React.ElementType
  label: string
  link: string
  rotation: string
  tooltipStyle: React.CSSProperties
}

const navItems: NavItem[] = [
  { icon: IoHome, label: "Home", link: "/", rotation: "0deg", tooltipStyle: { bottom: "100%", right: "-50%" } },
  { icon: IoInformationCircle, label: "About", link: "/about", rotation: "0deg", tooltipStyle: { top: "50%", left: "100%" } },
  { icon: IoTrophy, label: "Achievements", link: "/achievements", rotation: "0deg", tooltipStyle: { top: "50%", left: "100%" } },
  { icon: IoCalendar, label: "Events", link: "/events", rotation: "0deg", tooltipStyle: { top: "50%", left: "100%" } },
  { icon: IoLibrary, label: "Resources", link: "/resources", rotation: "0deg", tooltipStyle: { top: "50%", left: "100%" } },
];

// Function to return a React icon component
const getIcon = (IconComponent: React.ElementType, className?: string) => {
  return <IconComponent className={`w-6 h-6 text-gray-800 ${className}`} />;
};

const Navbar: React.FC = () => {
  const [navbarActive, setNavbarActive] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile view for width <= 768px
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={`fixed bottom-[300px] right-[570px] cursor-pointer ${navbarActive ? "active" : ""} z-[999]`} id="mydiv" onClick={() => setNavbarActive(!navbarActive)}>
      <nav className={`relative flex items-center justify-center   ${navbarActive ? "active" : ""}`}>
        <button
          className={`absolute left-[480px] top-[215px] z-10 flex h-[50px] w-[50px] shadow shadow-white flex-col items-center justify-evenly rounded-[15px] bg-black p-[10px] transition-all duration-500 ease-in-out ${
            navbarActive ? "active" : ""
          }`}
        >
          {[1, 2, 3].map((_, index) => (
            <span
              key={index}
              className={`h-[3px] w-[30px] rounded-[20px] bg-[#d3531a] opacity-100 transition-all duration-250 ease-in-out ${
                navbarActive
                  ? index === 1
                    ? "opacity-0 h-0 hidden"
                    : "absolute top-[23px] " + (index === 0 ? "rotate-[135deg]" : "-rotate-[135deg]")
                  : "" 
              }`}
            />
          ))}
        </button>
        <ul className="relative">
          {navItems.map((item, index) => {
            const angle = isMobile ? -Math.PI / 8 * index - Math.PI / 2 + 0.05 : -Math.PI / 8 * index - Math.PI / 2 + 0.05; // Arch effect
            const radius = isMobile ? 160 : 200; // Adjust radius to control spread
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <li
                key={index}
                className={`absolute left-[500px] top-[250px] flex h-[40px] w-[40px] list-none items-center justify-center rounded-full bg-[#FFFFF0] transition-all duration-500 ${
                  navbarActive ? "active" : ""
                }`}
                style={{
                  transitionDelay: `${0.1 * index}s`,
                  transform: navbarActive
                    ? `translate(${x}px, ${y}px)` // Position in an arch
                    : "rotate(270deg) translateX(30px) translateY(-15px)", // Closed position
                }}
              >
                <Link href={item.link} className="group relative flex items-center justify-center">
                  {getIcon(item.icon)}
                  <span
                    className="invisible absolute min-w-[80px] rounded-md bg-[#555] p-[5px] text-center text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100"
                    style={item.tooltipStyle}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
