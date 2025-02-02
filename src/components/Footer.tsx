import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { MdOutlineCopyright } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { IoLogoInstagram } from "react-icons/io5"
import { RiTwitterXFill } from "react-icons/ri"
import footerIcon from "@/../public/Assets/footer.svg"

const Footer: React.FC = () => {
  return (
    <footer className="relative h-[300px] w-full bg-[#1A1E1E] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      <div className="absolute bottom-0 left-0 w-full bg-[#078888] pb-4 pt-4 text-center sm:pb-6 sm:pt-6 md:pb-8 md:pt-8">
        <h2 className="relative -top-8 mx-auto text-4xl font-bold leading-none tracking-wider sm:-top-12 sm:text-5xl md:-top-16 md:text-6xl lg:-top-[5.5rem] lg:text-[110px]">
          <span className="bg-gradient-to-b from-[#078888] from-50% via-[#078888] via-50% to-[#1A1E1E] to-50% bg-clip-text text-transparent">
            CODEBREAKERS
          </span>
        </h2>

        <p className="text-lg font-light tracking-wide text-white sm:text-xl md:text-2xl lg:text-3xl">
          Seasoned. Nimble. Remote.
        </p>

        <p className="mt-2 hidden text-base font-light text-white opacity-90 sm:mt-4 sm:block sm:text-lg md:mt-6 md:text-xl lg:mt-8 lg:text-2xl">
          SOME TEXT ABOUT THE CLUB
        </p>

        <hr className="mx-auto my-4 w-[90%] border-white/30 sm:my-6 sm:w-[85%] md:my-8 md:w-[80%] lg:my-12 lg:w-3/4" />

        <div className="mx-auto flex w-[90%] flex-col items-center gap-4 text-white sm:w-[85%] sm:flex-row sm:justify-between md:w-[80%] lg:w-3/4">
          <div className="flex items-center opacity-65">
            <MdOutlineCopyright className="h-4 w-4 sm:h-5 sm:w-5" />
            <p className="ml-2 text-sm sm:text-base">Copyright 2022 - ABC</p>
          </div>

          <ul className="flex space-x-4 sm:space-x-6 md:space-x-8">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="text-sm text-white opacity-65 transition-opacity hover:opacity-100 sm:text-base"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex space-x-3 sm:space-x-4">
            {[
              {
                href: "https://www.linkedin.com/company/thecodebreakers-rcoem/mycompany/verification/",
                Icon: CiLinkedin,
                label: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/thecodebreakers/",
                Icon: IoLogoInstagram,
                label: "Instagram",
              },
              {
                href: "https://x.com/CodebreakersRBU",
                Icon: RiTwitterXFill,
                label: "X (Twitter)",
              },
            ].map(({ href, Icon, label }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 sm:h-9 sm:w-9 md:h-10 md:w-10"
              >
                <Icon className="h-4 w-4 text-black sm:h-5 sm:w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Image
        src={footerIcon || "/placeholder.svg"}
        alt=""
        className="absolute bottom-0 left-0 w-[60%] sm:w-[55%] md:w-[50%] lg:w-[45%]"
        priority
      />
    </footer>
  )
}

export default Footer

