import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const data = await req.json();

  // console.log(data);
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: `${data.prompt}` }],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({
      answer: `${completion.choices[0].message.content}`,
    });

  // return NextResponse.json({ status: 200 });
}
