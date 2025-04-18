import React, { useState, useEffect } from "react";

const messages = [
  "Start Strong.",
  "Keep Moving Forward.",
  "Believe in Yourself.",
  "Stay Focused.",
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const current = messages[messageIndex];
    let typingSpeed = isDeleting ? 100 : speed;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, messageIndex, speed]);

  return (
    <div className="flex w-96 h-24 justify-center items-center min-w-fit">
      <p className="text-6xl font-serif text-gray-100 bg-clip-text bg-gradient-to-r from-gray-600 to-gray-300 tracking-tight leading-tight transform transition-all hover:scale-105 hover:text-gray-200">
        {text}
      </p>
    </div>
  );
}
