"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const DatabaseQuery = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [load, setLoad] = useState(false);

  const handleOnClick = async (e) => {
    e.preventDefault();
    setLoad(true)
    const data = await fetch("/api/textgenerator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: question }),
    })
      .then(async (res) => {
        const response = await res.json();
        setAnswer(response.answer);
        setLoad(false)
      })
      .catch((error) => {
        console.log(error);
        setLoad(false)
      });
  };

  return (
    <div className="bg-yellow-300 min-h-screen  font-mono flex flex-col items-center justify-center  ">
      <h1 className="text-center font-mono  text-4xl md:text-7xl mb-5 px-2 md:px-5">
        Generate Database Query
      </h1>
      <p className="px-3 text-center mb-2 font-mono">
        please wait for response it will take around 1 min to generate{" "}
      </p>
      <form
        onSubmit={handleOnClick}
        className="flex flex-col items-center space-y-3 max-w-[800px] "
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full mx-auto p-3 outline-none rounded-md shadow-lg"
          placeholder="Enter your Question"
        />
        {load !== true ? (
          question === "" ? (
            <Button className="inline-flex text-white bg-gray-500 border-0 py-2 px-10   rounded mt-5 text-lg  w-full">
              Create
            </Button>
          ) : (
            <Button
              type="submit"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-10  hover:bg-indigo-600 rounded mt-5 text-lg  w-full"
            >
              Create
            </Button>
          )
        ) : (
          <h3>Loading.....</h3>
        )}

        <textarea
          className="md:w-[600px] mx-auto p-5 min-h-[100px] outline-none rounded-md shadow-lg"
          value={answer}
          placeholder="Answer will appear here"
        />
      </form>
    </div>
  );
};

export default DatabaseQuery;
