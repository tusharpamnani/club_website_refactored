"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface NavItem {
  icon: string
  label: string
  link: string
  rotation: string
  tooltipStyle: React.CSSProperties
}

const navItems: NavItem[] = [
    // { icon: "/assets/home/home-outline.svg", label: "Home", link: "/", rotation: "", tooltipStyle: { left: "-78px" } },
    {
      icon: "/assets/home/About.svg",
      label: "About",
      link: "/",
      rotation: "rotate-[50deg]",
      tooltipStyle: { transform: "rotateZ(-20deg)", top: "-9px", left: "-67px" },
    },
    {
      icon: "/assets/home/info.svg",
      label: "Info",
      link: "/events",
      rotation: "-rotate-[40deg]",
      tooltipStyle: { transform: "rotateZ(-35deg)", top: "40px", left: "-70px" },
    },
    {
      icon: "/assets/home/Events.svg",
      label: "Events",
      link: "/events",
      rotation: "-rotate-[55deg]",
      tooltipStyle: { transform: "rotateZ(-55deg)", top: "0px", left: "-65px" },
    },
    {
      icon: "/assets/home/Events.svg",
      label: "Events",
      link: "/events",
      rotation: "-rotate-[55deg]",
      tooltipStyle: { transform: "rotateZ(-55deg)", top: "0px", left: "-65px" },
    },

  ]

const Navbar: React.FC = () => {
  const [navbarActive, setNavbarActive] = useState<boolean>(false)

  return (
    <div className={`fixed bottom-[300px] right-[570px] ${navbarActive ? "active" : ""}`} id="mydiv">
      <nav className={`relative flex items-center justify-center ${navbarActive ? "active" : ""}`}>
        <button
          className={`absolute left-[454px] top-[215px] z-10 flex h-[40px] w-[50px] cursor-pointer flex-col items-center justify-center gap-[3px] rounded-[15px] bg-black p-[10px] transition-all duration-500 ease-in-out ${
            navbarActive ? "active" : ""
          }`}
          onClick={() => setNavbarActive(!navbarActive)}
        >
          {[1, 2, 3].map((_, index) => (
            <span
              key={index}
              className={`h-[5px] w-[26px] rounded-[20px] bg-[#d3531a] opacity-100 transition-all duration-250 ease-in-out ${
                navbarActive
                  ? index === 1
                    ? "opacity-0"
                    : "absolute top-[18px] " + (index === 0 ? "rotate-[135deg]" : "-rotate-[135deg]")
                  : ""
              }`}
            />
          ))}
        </button>
        <ul className="relative">
        {navItems.map((item, index) => {
            const angle = (-(Math.PI / (8)) * index - Math.PI / 2) + .05; // Arch effect

            const radius = 200; // Adjust radius to control spread
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
                : "rotate(270deg) translateX(40px) translateY(-40px)", // Closed position
            }}
            >
            <Link href={item.link} className="group relative">
                <Image src={item.icon || "/placeholder.svg"} alt={item.label} className={`${item.rotation}`} width={30} height={30}/>
                <span
                className="invisible absolute w-[80px] rounded-md bg-[#555] p-[5px] text-center text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100"
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
  )
}

export default Navbar

