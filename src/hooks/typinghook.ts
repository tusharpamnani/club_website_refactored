import { useState, useEffect } from "react";

export default function useTypingEffect(text: string, speed: number, startTyping: boolean) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!startTyping) return;

    setDisplayedText("");

    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1)); 
      i++;

      if (i >= text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, startTyping]); 

  return displayedText;
}
