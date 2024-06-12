"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="w-full h-screen flex items-center justify-around flex-col sm:flex-row overflow-auto gap-10 p-8">
      <div className="flex justify-center w-full sm:w-1/2 border-2 rounded-3xl min-h-[64vh] max-h-[80vh] overflow-hidden">
        <p className="text-md font-normal p-5 overflow-auto">
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
          nostrum incidunt corrupti animi. Quam repellat ipsum eius minima
          voluptatibus obcaecati doloremque earum, modi magnam officia sequi in
          aliquid quidem fuga eos unde, doloribus facere pariatur officiis
          molestiae corporis totam sed atque! Illo provident qui, eos
          consequatur necessitatibus maxime a officiis natus quisquam, ratione
          commodi mollitia. Voluptatibus iure quas delectus dicta, blanditiis
          incidunt eius ab deleniti, qui necessitatibus eaque aliquid magnam
          libero labore! Repellendus, assumenda iure saepe laudantium facilis.
        </p>
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
        <button className="w-full mt-4 p-4 bg-yellow-400 text-white text-lg font-semibold rounded-full">
          Fix
        </button>
      </div>
    </div>
  );
}
