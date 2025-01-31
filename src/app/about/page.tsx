"use client"

import { useEffect, useState, useRef } from "react"
import Domain from "./Domain"
import domains from "../data/Members.json"
import useTypingEffect from "./typinghook"

export default function PgAbout() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const typedText = useTypingEffect("About Us", 150, isVisible)
  const typedText1 = useTypingEffect(
    "From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.",
    10,
    isVisible,
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    const currentRef = containerRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div className="min-h-screen w-full overflow-y-auto">
      <div
        ref={containerRef}
        className="relative h-screen w-full flex justify-center items-center flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Assets/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[rgba(61,66,74,0.6)]"></div>
        <h2 className="text-white text-5xl z-10 text-center relative after:content-['|'] after:animate-blink">
          {typedText}
        </h2>
        <p className="max-w-xl font-roboto text-2xl leading-relaxed text-center tracking-wide text-white z-10 relative mt-4">
          {typedText1}
        </p>
      </div>
      <div className="py-8">
        {domains.map((domain, i) => (
          <Domain key={i} domain={domain} />
        ))}
      </div>
    </div>
  )
}

