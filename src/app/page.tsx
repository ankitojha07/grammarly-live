"use client";

import { log } from "console";
import { METHODS } from "http";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API;

export default function Home() {
  const [text, setText] = useState("");
  const [fixedText, setFixedText] = useState("");
  const [isSending, setIsSending] = useState(false);

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
    let url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
      API_KEY;

    let messageToSend = [
      ...trainingPrompt,
      {
        parts: [
          {
            text: text,
          },
        ],
        role: "user",
      },
    ];

    setIsSending(true);
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messageToSend,
      }),
    });
    let resjson = await res.json();
    setIsSending(false);

    let responseMessage = resjson.candidates[0].content.parts[0].text;
    console.log(responseMessage);
    setFixedText(responseMessage);
  };

  return (
    <div className="w-full h-screen flex items-center justify-around flex-col sm:flex-row overflow-auto gap-10 p-8">
      <div className="flex justify-center w-full sm:w-1/2 border-2 rounded-3xl min-h-[64vh] max-h-[80vh] overflow-hidden">
        {fixedText.length > 0 ? (
          <p className="text-md font-normal p-5 overflow-auto">{fixedText}</p>
        ) : (
          <p className="text-md font-normal p-5 overflow-auto">
            Empty prompt...
          </p>
        )}
      </div>
      <div className="flex items-start justify-between flex-col w-full sm:w-1/2 border-2 rounded-3xl max-h-[80vh] p-3 overflow-hidden min-h-[64vh]">
        <textarea
          className="w-full h-32 overflow-auto resize-none focus:outline-none"
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
