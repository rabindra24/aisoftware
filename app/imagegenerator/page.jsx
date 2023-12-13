"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";


const ImageGenerator = () => {
  const [url, setUrl] = useState("/demo.jpg");
  const [prompt, setPrompt] = useState("");
  const [load, setLoad] = useState(false);

  const handleOnClick = async () => {

    setLoad(true)
    
    await fetch('/api/imagenerator',{
      method : 'POST',
      headers : {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({prompt : prompt})
    }).then(async (res) => {
      // console.log(res)

      const response = await res.json();
      console.log(response.image)
      setUrl(response.image)

      setTimeout(function(){setLoad(false)},3000)
      
    })
    .catch((error) => {
      console.log(error);
      setLoad(false)
    });
    
  };

  return (
    <div className="bg-background min-h-screen py-20 font-urbanist">
      <h1 className="text-center font-mono  text-4xl md:text-7xl mb-5 px-2 md:px-5">
        Image Generator
      </h1>
      <p className="px-3 text-center mb-2 font-mono">please wait for response it will take around 1 min to generate </p>
      <div className="w-full flex flex-col items-center ">
        <Image
          src={url}
          width={400}
          height={600}
          className="max-w-[270px] w-full h-auto"
          alt="AI Image"
        />
        <a
          href={url}
          className="inline-flex text-white bg-blue-500 border-0 py-2 px-10  hover:bg-indigo-600 rounded mt-5 text-lg"
          download
        >
          Download
        </a>
      </div>
      <div className="px-5 mt-4 mx-auto w-full  py-2 flex flex-col items-center">
        <label htmlFor="prompt" className="font-bold mb-2">
          Prompt
        </label>
        <input
          type="text"
          name=""
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          id="prompt"
          placeholder="Ex: Two cute fox walking in snow"
          className="md:max-w-[60%] p-3 sm:max-w-[80%] w-full outline-none"
        />

        {load !== true ? (
          prompt === "" ? (
            <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-10  hover:bg-indigo-600 rounded mt-5 text-lg max-w-[150px]">
              Create
            </button>
          ) : (
            <button
              onClick={handleOnClick}
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-10  hover:bg-indigo-600 rounded mt-5 text-lg max-w-[150px]"
            >
              Create
            </button>
          )
        ) : (
          <h3>Loading.....</h3>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
