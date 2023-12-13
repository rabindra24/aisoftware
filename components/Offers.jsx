import React from "react";
import Image from "next/image";
import { services } from "@/constants";
import Link from "next/link";

const Offers = () => {
  return (
    <div className="sm:px-2 px-5" id="create">
      <p className="text-center text-primary py-8 sm:text-2xl">
        “Always remember that you are absolutely unique. Just like everyone
        else.”
      </p>
      <div className="sm:px-10 flex flex-wrap gap-6 mx-auto py-5">
        {services.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <div className="bg-cardbackground sm:w-[290px] w-full h-auto rounded-2xl md:p-5 py-2 px-3">
              <h3 className="text-center text-2xl text-primary font-bold py-3">
                {item.title}
              </h3>
              <Image
                src={item.img}
                width={800}
                height={300}
                className="w-full rounded-2xl"
              />
              <div className="flex py-5 px-2 justify-between">
                <p className="text-primary">Count {item.id}</p>
                <p className="font-semibold text-primary">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
