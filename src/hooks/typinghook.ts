import { useState, useEffect } from "react"

export default function useTypingEffect(text: string, speed: number, startTyping: boolean) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    if (!startTyping) return

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, speed)

    return () => clearInterval(typingInterval)
  }, [text, speed, startTyping])

  return displayedText
}

