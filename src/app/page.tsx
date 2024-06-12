"use client";

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
          text: "",
        },
      ],
      role: "user",
    },
  ];
  const fixText = async () => {
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
    setFixedText(responseMessage);
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl text-center font-semibold bg-blue-800 p-8 text-white font-mono">
        Fix Your{" "}
        <span className="text-2xl md:text-5xl shadow-md font-bold shadow-blue-900 p-3">
          Grammatical Mistakes
        </span>{" "}
        Right now.
      </h1>

      <div className="w-full flex items-center justify-around flex-col sm:flex-row overflow-auto gap-10 p-8">
        <div className="flex items-start justify-between flex-col w-full sm:w-1/2 border-2 rounded-3xl max-h-[80vh] p-3 overflow-hidden min-h-[64vh]">
          <textarea
            className="w-full h-32 overflow-auto resize-none focus:outline-none font-mono p-4"
            placeholder="Write your text here..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button
            className="w-full mt-4 p-4 bg-blue-900 text-white text-xl font-bold rounded-full font-mono"
            onClick={fixText}
          >
            Fix
          </button>
        </div>

        <div className="flex justify-center w-full sm:w-1/2 border-2 rounded-3xl min-h-[64vh] max-h-[80vh] overflow-hidden font-mono p-4">
          {fixedText.length > 0 ? (
            <p className="text-md font-normal p-5 overflow-auto">{fixedText}</p>
          ) : (
            <p className="text-md font-normal p-5 overflow-auto font-mono">
              Empty prompt...
            </p>
          )}
        </div>
      </div>
    </>
  );
}
