"use client";

import { useState } from "react";
import About from "./about";
import BaseStats from "./base-stats";
import Evolution from "./evolution";
import Moves from "./moves";

interface DetailProps {
  data: any;
}

const Detail: React.FC<DetailProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState("about");
  let tabs = ["about", "base stats", "evolution", "moves"];

  return (
    <div className="rounded-xl">
      <div className="flex justify-between px-4">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`hover:bg-slate-100 p-3 w-full text-gray-400 cursor-pointer ${
              selectedTab == tab && "text-black border-b-2 border-b-black"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            <p className={`font-bold text-xs capitalize text-center`}>{tab}</p>
          </div>
        ))}
      </div>

      <div className="mt-9 px-4">
        {selectedTab == "about" && <About data={data} />}
        {selectedTab == "base stats" && <BaseStats data={data} />}
        {selectedTab == "evolution" && <Evolution />}
        {selectedTab == "moves" && <Moves />}
      </div>
    </div>
  );
};

export default Detail;
