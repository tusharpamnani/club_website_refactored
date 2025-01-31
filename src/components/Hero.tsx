"use client"
import Image from "next/image"

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[90vh] w-full">
      <Image src="/public/Assets/Spiralani.png" alt="Background" layout="fill" objectFit="contain" className="z-0" />
      <h1
        className="z-10 text-5xl font-['Viga'] bg-gradient-to-r from-[#9bffff] via-[#3fffff] to-[#036] bg-clip-text text-transparent
                     lg:text-4xl md:text-3xl sm:text-2xl"
      >
        The Codebreakers Club
      </h1>
      <p
        className="z-10 text-white text-2xl font-extrabold font-['IBM_Plex_Mono']
                    xl:text-[1.75rem] lg:text-xl md:text-lg sm:text-base"
      >
        Breaking codes, Creating minds!!
      </p>
    </div>
  )
}

export default Home

