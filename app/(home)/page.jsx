import Landing from "@/components/Landing";
import Offers from "@/components/Offers";
import Service from "@/components/service";
import React from "react";

const Home = () => {
  return (
    <section className="text-gray-600 bg-background font-urbanist body-font pb-10">
      <Landing />

      {/* //Service Section  */}

      <Offers />
    </section>
  );
};

export default Home;
