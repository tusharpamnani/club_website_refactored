"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { IoHome, IoInformationCircle, IoTrophy, IoCalendar, IoLibrary } from "react-icons/io5"

interface NavItem {
  icon: React.ElementType
  label: string
  link: string
  rotation: string
  tooltipStyle: React.CSSProperties
}

const navItems: NavItem[] = [
  { icon: IoHome, label: "Home", link: "/", rotation: "0deg", tooltipStyle: { bottom: "100%", right: "-50%" } },
  {
    icon: IoInformationCircle,
    label: "About",
    link: "/about",
    rotation: "0deg",
    tooltipStyle: { top: "50%", left: "100%" },
  },
  {
    icon: IoTrophy,
    label: "Achievements",
    link: "/achievements",
    rotation: "0deg",
    tooltipStyle: { top: "50%", left: "100%" },
  },
  { icon: IoCalendar, label: "Events", link: "/events", rotation: "0deg", tooltipStyle: { top: "50%", left: "100%" } },
  {
    icon: IoLibrary,
    label: "Resources",
    link: "/resources",
    rotation: "0deg",
    tooltipStyle: { top: "50%", left: "100%" },
  },
]

const getIcon = (IconComponent: React.ElementType, className?: string) => {
  return <IconComponent className={`w-6 h-6 text-gray-800 ${className}`} />
}

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [navbarActive, setNavbarActive] = useState<boolean>(false)
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [showIntroTooltip, setShowIntroTooltip] = useState<boolean>(false)

  const navbarRef = useRef<HTMLDivElement | null>(null) // Ref for the navbar
  const tooltipRef = useRef<HTMLDivElement | null>(null) // Ref for the tooltip

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowNavbar(true)
      setTimeout(() => {
        setShowIntroTooltip(true)
        setTimeout(() => {
          setShowIntroTooltip(false)
        }, 5000) // Hide the intro tooltip after 5 seconds
      }, 1000)
    }, 500)
  }, [])

  // Close tooltip if clicking outside of navbar or tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current && !navbarRef.current.contains(event.target as Node) &&
        tooltipRef.current && !tooltipRef.current.contains(event.target as Node)
      ) {
        setShowIntroTooltip(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const ToggleNavbar = () => {
    setNavbarActive(!navbarActive);
    setShowIntroTooltip(false);
  }

  return (
    <div
      ref={navbarRef} // Add ref to the navbar div
      className={`fixed bottom-[300px] right-[570px] cursor-pointer z-[9999] ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } transition-all duration-700`}
      onClick={() => ToggleNavbar()}
    >
      <nav className={`relative flex items-center justify-center ${navbarActive ? "active" : ""}`}>
        <button
          id="navbar2"
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
        {showIntroTooltip && (
          <div
            ref={tooltipRef} // Add ref to the tooltip div
            className={`absolute ${isMobile ? "top-[130px] left-[300px]" : "left-[200px] top-[215px]"} bg-white text-black p-4 rounded-lg shadow-xl z-20 transition-opacity duration-300 w-64`}
          >
            <p className="text-sm font-medium">This is your navigation menu. Click to explore!</p>
            <div
              className={`absolute ${isMobile ? "bottom-[-10px] right-8 rotate-180" : "right-[-10px] top-4 rotate-180"} w-0 h-0 border-solid ${isMobile ? "border-b-[10px] border-l-[10px] border-r-[10px] border-b-white border-l-transparent border-r-transparent" : "border-t-[10px] border-b-[10px] border-r-[10px] border-r-white border-t-transparent border-b-transparent"}`}
            ></div>
          </div>
        )}
        <ul className="relative">
          {navItems.map((item, index) => {
            const angle = isMobile
              ? (-Math.PI / 8) * index - Math.PI / 2 + 0.05
              : (-Math.PI / 8) * index - Math.PI / 2 + 0.05
            const radius = isMobile ? 160 : 200
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <li
                key={index}
                className={`group absolute left-[500px] top-[250px] flex h-[40px] w-[40px] list-none items-center justify-center rounded-full bg-[#FFFFF0] transition-all duration-500 ${
                  navbarActive ? "active" : ""
                }`}
                style={{
                  transitionDelay: `${0.1 * index}s`,
                  transform: navbarActive
                    ? `translate(${x}px, ${y}px)`
                    : "rotate(270deg) translateX(30px) translateY(-15px)",
                  }}
              >
                  <Link href={item.link}>
                <span className=" relative flex items-center justify-center">
                  {getIcon(item.icon)}
                  {navbarActive && <span
                    className="invisible absolute min-w-[80px] rounded-md bg-[#555] p-[5px] text-center text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100"
                    style={item.tooltipStyle}
                  >
                    {item.label}
                  </span>}
                </span>
              </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
