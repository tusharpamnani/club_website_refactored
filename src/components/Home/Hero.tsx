"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedWaves() {
  const [waves, setWaves] = useState<any[]>([])
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const generateWaves = () => {
      const newWaves = []
      for (let i = 0; i < 35; i++) {
        newWaves.push({
          startX: Math.random() * 1000,
          startY: Math.random() * 600,
          endX: Math.random() * 1000,
          endY: Math.random() * 600,
          amplitude: Math.random() * 100 + 50,
          frequency: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.5 + 0.2,
          strokeWidth: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? [30, 64, 175] : [147, 51, 234],
          angle: Math.random() * Math.PI * 2,
          swirlFactor: Math.random() * 0.6 + 0.1,
        })
      }
      setWaves(newWaves)
    }

    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 30; i++) {
        const centerX = 500
        const centerY = 300
        const radiusX = Math.random() * 400 + 100
        const radiusY = Math.random() * 200 + 50
        const angle = Math.random() * Math.PI * 2
        newParticles.push({
          size: Math.random() * 6 + 2,
          color: Math.random() > 0.5 ? "rgba(30, 64, 175, 0.6)" : "rgba(147, 51, 234, 0.6)",
          x1: centerX + Math.cos(angle) * radiusX,
          y1: centerY + Math.sin(angle) * radiusY,
          x2: centerX + Math.cos(angle + Math.PI) * radiusX,
          y2: centerY + Math.sin(angle + Math.PI) * radiusY,
          duration: Math.random() * 40 + 30,
          delay: Math.random() * 5,
        })
      }
      setParticles(newParticles)
    }

    generateWaves()
    generateParticles()
  }, [])

  const createWavePath = (
    startX: number,
    startY: number,
    amplitude: number,
    frequency: number,
    phase: number,
    angle: number,
    swirlFactor: number,
  ) => {
    let path = `M${startX},${startY}`
    for (let t = 0; t <= Math.PI * 2; t += 0.1) {
      const x = startX + t * Math.cos(angle) * 50 + amplitude * Math.sin(frequency * t + phase) * Math.cos(angle)
      const y = startY + t * Math.sin(angle) * 50 + amplitude * Math.sin(frequency * t + phase) * Math.sin(angle)
      const swirlX = x + Math.sin(t * swirlFactor) * 50
      const swirlY = y + Math.cos(t * swirlFactor) * 50
      path += ` L${swirlX},${swirlY}`
    }
    return path
  }

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <svg className="absolute w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        {waves.map((wave, i) => (
          <motion.path
            key={i}
            fill="none"
            stroke={`rgba(${wave.color.join(",")}, ${wave.opacity})`}
            strokeWidth={wave.strokeWidth}
            initial={{
              d: createWavePath(
                wave.startX,
                wave.startY,
                wave.amplitude,
                wave.frequency,
                wave.phase,
                wave.angle,
                wave.swirlFactor,
              ),
              opacity: 0,
            }}
            animate={{
              d: [
                createWavePath(
                  wave.startX,
                  wave.startY,
                  wave.amplitude,
                  wave.frequency,
                  wave.phase,
                  wave.angle,
                  wave.swirlFactor,
                ),
                createWavePath(
                  wave.endX,
                  wave.endY,
                  wave.amplitude * 1.2,
                  wave.frequency * 1.1,
                  wave.phase + Math.PI,
                  wave.angle + Math.PI / 4,
                  wave.swirlFactor * 1.2,
                ),
                createWavePath(
                  wave.startX - 100,
                  wave.startY - 100,
                  wave.amplitude * 0.8,
                  wave.frequency * 0.9,
                  wave.phase + Math.PI * 2,
                  wave.angle - Math.PI / 4,
                  wave.swirlFactor * 0.8,
                ),
                createWavePath(
                  wave.endX + 100,
                  wave.endY + 100,
                  wave.amplitude * 1.1,
                  wave.frequency * 1.2,
                  wave.phase + Math.PI * 3,
                  wave.angle + Math.PI / 2,
                  wave.swirlFactor,
                ),
              ],
              opacity: [0, wave.opacity, wave.opacity, 0],
            }}
            transition={{
              duration: wave.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: wave.delay,
              times: [0, 0.3, 0.7, 1],
            }}
          />
        ))}

        {particles.map((particle, i) => (
          <motion.circle
            key={`particle-${i}`}
            r={particle.size}
            fill={particle.color}
            initial={{
              cx: particle.x1,
              cy: particle.y1,
              opacity: 0,
            }}
            animate={{
              cx: [particle.x1, particle.x2, particle.x1],
              cy: [particle.y1, particle.y2, particle.y1],
              scale: [1, 1.5, 1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}
      </svg>

      {/* Content with enhanced glow effect andanimation */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{
            color: "rgb(139, 231, 239)",
            textShadow: "0 0 30px rgba(139, 231, 239, 0.7), 0 0 60px rgba(139, 231, 239, 0.5)",
          }}
          animate={{
            textShadow: [
              "0 0 30px rgba(139, 231, 239, 0.7), 0 0 60px rgba(139, 231, 239, 0.5)",
              "0 0 40px rgba(139, 231, 239, 0.8), 0 0 80px rgba(139, 231, 239, 0.6)",
              "0 0 30px rgba(139, 231, 239, 0.7), 0 0 60px rgba(139, 231, 239, 0.5)",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          The Codebreakers Club
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            textShadow: [
              "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
              "0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)",
              "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
            ],
          }}
          transition={{ duration: 4, delay: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          Breaking codes, Creating minds!!
        </motion.h2>
      </motion.div>
    </div>
  )
}

