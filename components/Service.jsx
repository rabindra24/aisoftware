import React from "react";
import { services } from "@/constants";
import Image from "next/image";

const Service = () => {
  return (
    <div className="py-10">
      <p className="text-center text-primary py-8 text-2xl">
        "Crafting Daily Magic with a Dash of Fun – Because Life's Too Short to
        Be Seriously Boring!"
      </p>
      <div className="px-10">
        <div className="bg-red-900 md:w-[300px] h- rounded-lg p-5">
          <Image
            src={"/image.jpg"}
            width={800}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
