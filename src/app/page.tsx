"use client";

import { log } from "console";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API;

export default function Home() {
  const [text, setText] = useState("");
  const [fixedText, setFixedText] = useState("");

  const trainingPrompt = [
    {
      parts: [
        {
          text: "From next prompt I will be just providing you some text or sentences or paragraphs. Rewrite the grammar for me",
        },
      ],
      role: "user",
    },
    {
      parts: [
        {
          text: "Okay",
        },
      ],
      role: "model",
    },
    {
      parts: [
        {
          text: "Wut iz my nayme",
        },
      ],
      role: "user",
    },
  ];
  const fixText = async () => {
    console.log(text);
  };

  return (
    <div className="w-full h-screen flex items-center justify-around flex-col sm:flex-row overflow-auto gap-10 p-8">
      <div className="flex justify-center w-full sm:w-1/2 border-2 rounded-3xl min-h-[64vh] max-h-[80vh] overflow-hidden">
        {fixedText.length > 0 ? (
          <p className="text-md font-normal p-5 overflow-auto"></p>
        ) : (
          <p className="text-md font-normal p-5 overflow-auto">
            prompt is empty...
          </p>
        )}
      </div>
      <div className="flex items-start justify-start flex-col w-full sm:w-1/2 border-2 rounded-3xl max-h-[80vh] p-3 overflow-hidden">
        <textarea
          className="w-full h-32 overflow-auto resize-none"
          placeholder="Write your text here..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          className="w-full mt-4 p-4 bg-yellow-400 text-white text-lg font-semibold rounded-full"
          onClick={fixText}
        >
          Fix
        </button>
      </div>
    </div>
  );
}
