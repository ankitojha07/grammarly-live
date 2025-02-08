"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API;
// const API_KEY = "AIzaSyB9hTnOmpGYEo5SMlYslgIY3Vblyqn0v2E";

export default function Home() {
  const [text, setText] = useState("");
  const [fixedText, setFixedText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const trainingPrompt = [
    {
      parts: [
        {
          text: "From the next prompt, I will be just providing you some text or sentences or paragraphs. Rewrite the grammar for me",
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

  const fixText = async (inputText: string) => {
    if (!inputText.trim()) return;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const messageToSend = [
      ...trainingPrompt,
      {
        parts: [
          {
            text: inputText,
          },
        ],
        role: "user",
      },
    ];

    setIsSending(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: messageToSend,
        }),
      });
      const resjson = await res.json();
      setIsSending(false);

      if (resjson.candidates && resjson.candidates.length > 0) {
        const responseMessage = resjson.candidates[0].content.parts[0].text;
        setFixedText(responseMessage);
      } else {
        setFixedText("No response from the API.");
      }
    } catch (error) {
      setIsSending(false);
      setFixedText("Error occurred while fetching the data.");
    }
  };

  useEffect(() => {
    if (!text.trim()) return;

    const debounceTimer = setTimeout(() => {
      fixText(text);
    }, 1000);

    return () => clearTimeout(debounceTimer);
  }, [text]);

  return (
    <>
      <div className="flex font-semibold bg-blue-800 p-8 justify-between items-center w-full font-mono text-white text-md">
        <div className="text-xl md:text-3xl text-center w-full">
          Fix Your{" "}
          <span className="text-2xl md:text-5xl shadow-md font-bold shadow-blue-900 p-3">
            Grammatical Mistakes
          </span>{" "}
          Right now.
        </div>
        <div className="text-blue-800 bg-white pl-4 pr-4 pt-2 pb-2">
          <Link href="/Details">Docs</Link>
        </div>
      </div>

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

          {/* <button
            className="w-full mt-4 p-4 bg-blue-900 text-white text-xl font-bold rounded-full font-mono"
            onClick={() => fixText(text)}
            disabled={isSending} >
            {/* {isSending ? "Fixing..." : "Fix"} 
          </button>
          */}
          <div className="w-full mt-4 p-4 bg-blue-900 text-white text-xl text-center font-bold rounded-full font-mono">
            {isSending ? "Fixing..." : "Fixed"}
          </div>
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
      <div className="footer flex justify-center items-center m-auto bg-blue-800 p-8 text-xl text-white font-mono">
        <div>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/ankit0jha/"
            className="text-yellow-400"
          >
            @Ankit Ojha
          </a>
        </div>
      </div>
    </>
  );
}
