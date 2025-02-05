"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

interface Event {
  id: number
  title: string
  description: string
  image: string
  date: {
    day: number
    month: string
    year: number
  }
  details?: {
    fees?: string
    teamSize?: number
  }
  side: "left" | "right"
}

const events: Event[] = [
  {
    id: 1,
    title: "Fizzbuzz2.0",
    description:
      "A thrilling three-round event featuring a buzzer round, aptitude-based object hunt, and a competitive programming challenge.",
    image: "/event/fizzbuzz.jpg?height=200&width=300",
    date: {
      day: 25,
      month: "SEP",
      year: 2024,
    },
    side: "left",
  },
  {
    id: 2,
    title: "Web3 & Stellar",
    description:
      "An insightful web-3 seminar exploring the fundamentals and future potential of decentralized technology",
    image: "/event/Web3.jpg?height=200&width=300",
    date: {
      day: 18,
      month: "MAR",
      year: 2024,
    },
    side: "right",
  },
  {
    id: 3,
    title: "Hacksphere",
    description:
      "A successful intra-college hackathon where first-year innovators showcased their skills and creativity.",
    image: "/event/HackSphere.jpg?height=200&width=300",
    date: {
      day: 14,
      month: "JAN",
      year: 2024,
    },
    side: "left",
  },
  {
    id: 4,
    title: "CodeBlaze",
    description: "Debug it to bid it! Fix bugs in Round 1, then wager your points on coding challenges in Round 3!",
    image: "/event/CodeBlaze.jpg?height=200&width=300",
    date: {
      day: 13,
      month: "May",
      year: 2024,
    },
    side: "right",
  },
]

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <motion.h1
        className="text-7xl font-bold text-center mb-24 drop-shadow-[0px_0px_15px_rgba(3,226,255,1)]"
        style={{ color: "#00f0f0" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        EVENTS
      </motion.h1>

      <div className="relative max-w-7xl mx-auto">
        {/* Vertical Timeline Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
          style={{
            background: "linear-gradient(180deg, #00f0f0 0%, #00f0f0 100%)",
            boxShadow: "0 0 15px rgba(0, 240, 240, 0.5)",
          }}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Events */}
        <div className="relative">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={`mb-32 flex items-center ${event.side === "left" ? "justify-start" : "justify-end"} relative`}
              initial={{ opacity: 0, x: event.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Date Marker */}
              <motion.div
                className={`absolute ${event.side === "left" ? "right-0" : "left-0"} top-0 text-right whitespace-nowrap`}
                style={{
                  y: yTransform,
                  [event.side === "left" ? "right" : "left"]: "50%",
                  transform: `translateX(${event.side === "left" ? "50%" : "-50%"})`,
                }}
              >
                <div className="text-5xl font-bold" style={{ color: "#00f0f0" }}>
                  {event.date.day}
                </div>
                <div className="text-2xl font-medium text-white">{event.date.month}</div>
                <div className="text-xl text-gray-400">{event.date.year}</div>
              </motion.div>

              {/* Event Card */}
              <motion.div
                className={`w-[calc(50%-60px)] rounded-xl overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <motion.div
                  className="p-6 bg-black/40 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                </motion.div>
              </motion.div>

              {/* Timeline Node */}
              <motion.div
                className={`absolute left-1/2 w-4 h-4 rounded-full bg-[#00f0f0] transform -translate-x-1/2`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                  boxShadow: "0 0 20px rgba(0, 240, 240, 0.7)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

