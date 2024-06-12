"use client";

import Link from "next/link";

export default function Details() {
  return (
    <>
      <div className="flex font-semibold bg-blue-800 p-8 justify-between items-center w-full font-mono text-white text-md">
        <div className="text-xl md:text-3xl text-center w-full">
          Wanna know{" "}
          <span className="text-2xl md:text-5xl shadow-md font-bold shadow-blue-900 p-3">
            what else you can do
          </span>{" "}
          on this app?
        </div>
        <div className="text-blue-800 bg-white pl-4 pr-4 pt-2 pb-2">
          <Link href="/">Home</Link>
        </div>
      </div>

      <div className="w-full flex items-center justify-around flex-col sm:flex-col overflow-auto gap-10 p-8">
        <div className="flex items-start flex-col w-full sm:w-full border-2 rounded-3xl max-h-[80vh] font-mono overflow-hidden min-h-[64vh] p-6">
          <h1 className="text-xl font-extrabold">Features</h1>
          <div className="h-[1px] w-[60px] bg-black"></div>
          <ul className="mt-6">
            <li>
              1. You can give it a sentence/paragraph and it will correct the
              grammar for you.
            </li>
            <li>
              2. Else, If you want to ask it some question just give it the
              prompt it will give you answers also.
            </li>
          </ul>
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
