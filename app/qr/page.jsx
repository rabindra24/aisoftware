"use client";
import React from "react";
import Image from "next/image";
import { useQRCode } from "next-qrcode";
import {  useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Qr = () => {
  const { Image: QR } = useQRCode();
  const [download, setDownload] = useState(null);
  const [generate, setGenerate] = useState("");
  const [color, setColor] = useState({ dark: "#2563EB", light: "" });
  const [prompt, setPrompt] = useState("");
  const [custome, setCustome] = useState("");

  const handleGenerate = () => {
    const imgElements = document.querySelectorAll("img");
    if (imgElements.length > 0) {
      const imageUrls = Array.from(imgElements).map(
        (imgElement) => imgElement.src
      );
      console.log("Image URLs:", imageUrls[1]);
      setDownload(imageUrls[1]);
      setGenerate(prompt);
      return imageUrls;
    } else {
      console.log("No img tags found on the page.");
      return [];
    }
  };

  const handleColor = (val) => {
    if (val === 1) {
      setColor({
        dark: "#FF6000",
        light: "#FFF",
      });
      setDownload(null);
    } else if (val === 2) {
      setColor({
        dark: "#D80032",
        light: "#FFF",
      });
      setDownload(null);
    } else if (val === 3) {
      setColor({
        dark: "#E7B10A",
        light: "#FFF",
      });
      setDownload(null);
    } else if (val === 4) {
      setColor({
        dark: "#000",
        light: "#FFF",
      });
      setDownload(null);
    } else if (val === "") {
      setColor({
        dark: "#000",
        light: "#FFF",
      });
      setDownload(null);
    } else {
      setColor({
        dark: `${val}`,
        light: "#FFF",
      });
      setDownload(null);
    }
  };
  return (
    <main className="md:w-800px mx-auto bg-background min-h-screen flex flex-col items-center justify-center  relative top-0 pt-10">
      <Image
        src="/back.jpg"
        width={826}
        height={465}
        className=" top-0 left-0  object-cover object-center w-full opacity-50 h-full absolute"
        alt="qrcode"
      />
      <div className="z-[10] flex flex-col items-center justify-center space-y-10">
        <h1 className=" sm:text-6xl text-4xl font-semibold">
          {" "}
          <span className="text-primary">QR</span> Generator
        </h1>

        <div>
          <QR
            text={generate || "https://github.com/bunlong/next-qrcode"}
            options={{
              type: "image/jpeg",
              quality: 0.3,
              errorCorrectionLevel: "M",
              margin: 3,
              scale: 4,
              width: 200,
              color: {
                dark: color.dark,
                light: color.light,
              },
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              setDownload(null);
            }}
            placeholder="Enter your Url / Message"
          />
        </div>
        <div className="flex space-x-4 ">
          <div
            className="h-6 w-6 rounded-full bg-[#FF6000]"
            onClick={() => handleColor(1)}
          ></div>
          <div
            className="h-6 w-6 rounded-full bg-[#D80032]"
            onClick={() => handleColor(2)}
          ></div>
          <div
            className="h-6 w-6 rounded-full bg-yellow-700"
            onClick={() => handleColor(3)}
          ></div>
          <div
            className="h-6 w-6 rounded-full bg-black"
            onClick={() => handleColor(4)}
          ></div>
        </div>
        <div>
          {/* <form onSubmit={() => handleColor(custome)} className="flex"> */}
            <input
              type="text"
              className="border-2 p-1 max-w-[100px]"
              placeholder="Ex-#fff"
              value={custome}
              onChange={(e) => setCustome(e.target.value)}
              required
            />
            <Button
              className="bg-foreground ml-2 text-white px-4 py-1"
              onClick={() => handleColor(custome)}
            >
              Custome
            </Button>
          {/* </form> */}
        </div>
        <div className="space-x-4">
          {prompt.length > 0 ? (
            <Button className="bg-foreground" onClick={handleGenerate}>
              Generate
            </Button>
          ) : (
            <Button className="bg-zinc-400 hover:bg-zinc-400">Generate</Button>
          )}

          {download !== null ? (
            <a
              href={download}
              download
              className="py-2.5 px-4 rounded-md bg-primary text-white"
            >
              Download
            </a>
          ) : (
            <Button className="bg-zinc-400 hover:bg-zinc-400 cursor-not-allowed ">
              Download
            </Button>
          )}
        </div>
      </div>
      <p className="text-gray-700 mt-4 text-sm">
        * Click on generate to download image
      </p>
    </main>
  );
};

export default Qr;
