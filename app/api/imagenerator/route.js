import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const data = await req.json();

  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt :  `${data.prompt}`,
    n: 1,
    size: "512x512",
  });

  console.log(image.data[0].url)

  return NextResponse.json({
    image: `${image.data[0].url}`,
  });

  // return NextResponse.json({image : 200})
}
