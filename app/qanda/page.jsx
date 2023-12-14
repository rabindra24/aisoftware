"use client";
import React, { useState } from "react";

const QandA = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [load, setLoad] = useState(false);

  const handleOnClick = async (e) => {
    e.preventDefault();

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-background min-h-screen  font-mono flex justify-center items-center flex-col gap-5">
      <h1 className="text-center font-mono  text-4xl md:text-7xl mb-5 px-2 md:px-5">
        Q and A
      </h1>
      <p className="px-3 text-center mb-2 font-mono">
        please wait for response it will take around 1 min to generate{" "}
      </p>
      <form onSubmit={handleOnClick} className="flex w-full  flex-col items-center space-y-3 px-5">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="md:w-[400px] w-full mx-auto p-3 outline-none rounded-md shadow-lg"
          placeholder="Enter your Question"
        />
        <button
          className="text-white bg-[#3B82F6] border-0 py-2 px-10  hover:bg-indigo-600 rounded mt-5 text-lg md:w-[400px] w-full text-center"
          type="submit"
        >
          Search
        </button>

        <textarea
          className="md:w-[600px] mx-auto p-5 min-h-[300px] outline-none rounded-md shadow-lg w-full"
          value={answer}
          placeholder="Answer will appear here"
        />
      </form>
    </div>
  );
};

export default QandA;
