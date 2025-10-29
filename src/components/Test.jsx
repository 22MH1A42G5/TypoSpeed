import React, { useState, useRef, useEffect } from "react";

export default function TypingArea() {
  const targetText = "The quick brown fox jumps over the lazy dog.";
  const [typedText, setTypedText] = useState("");
  const [started, setStarted] = useState(false);
  const inputRef = useRef(null);

  // Focus the hidden input when test starts
  useEffect(() => {
    if (started) inputRef.current.focus();
  }, [started]);

  const handleChange = (e) => {
    setTypedText(e.target.value);
  };

  // Position of the blinking caret (current character index)
  const caretIndex = typedText.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Typing Text Area */}
      <div
        className="p-6 bg-white rounded-xl shadow-lg max-w-2xl text-lg font-mono leading-relaxed cursor-text select-none"
        onClick={() => inputRef.current.focus()} // focus when clicking text
      >
        {targetText.split("").map((char, index) => {
          let color = "text-gray-400"; // default grey

          if (index < typedText.length) {
            color =
              typedText[index] === char ? "text-green-500" : "text-red-500";
          }

          return (
            <span key={index} className={`${color} relative`}>
              {char}
              {/* Add blinking caret after current character */}
              {index === caretIndex - 1 && started && (
                <span className="caret absolute -right-0.5">|</span>
              )}
            </span>
          );
        })}

        {/* If caret is at the end of sentence */}
        {caretIndex === targetText.length && started && (
          <span className="caret">|</span>
        )}
      </div>

      {/* Hidden input for typing */}
      <input
        ref={inputRef}
        value={typedText}
        onChange={handleChange}
        className="opacity-0 absolute"
        disabled={!started}
      />

      {/* Start Button */}
      {!started ? (
        <button
          onClick={() => {
            setStarted(true);
            setTypedText("");
            setTimeout(() => inputRef.current.focus(), 50);
          }}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Start Test
        </button>
      ) : (
        <p className="mt-6 text-gray-600">Typing in progress...</p>
      )}

      {/* Caret blinking animation */}
      <style>{`
        .caret {
          display: inline-block;
          color: black;
          animation: blink 0.5s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
