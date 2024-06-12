// Add "use client" at the top of the file
"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <div className="w-full h-[90vh] mt-8 flex items-center justify-around flex-row overflow-scroll gap-10">
      <div className="h-full flex justify-center w-1/2">
        <h1 className=" text-md font-normal p-5 border-2 overflow-scroll">
          This is home page Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Doloremque laboriosam voluptatum accusamus. Blanditiis hic
          quisquam maiores obcaecati. Porro in ullam recusandae illo dicta,
          nostrum incidunt corrupti animi. Quam repellat ipsum eius minima
          voluptatibus obcaecati doloremque earum, modi magnam officia sequi in
          aliquid quidem fuga eos unde, doloribus facere pariatur officiis
          molestiae corporis totam sed atque! Illo provident qui, eos
          consequatur necessitatibus maxime a officiis natus quisquam, ratione
          commodi mollitia. Voluptatibus iure quas delectus dicta, blanditiis
          incidunt eius ab deleniti, qui necessitatibus eaque aliquid magnam
          libero labore! Repellendus, assumenda iure saepe laudantium facilis.
        </h1>
      </div>
      <div className="flex items-start justify-start flex-col w-1/2">
        <textarea
          className="p-5 w-full border overflow-scroll max-h-[72vh]"
          placeholder="Write your text here"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="w-full mt-10 p-4 bg-slate-700 text-white text-lg font-semibold rounded-full">
          Fix
        </button>
      </div>
    </div>
  );
}
