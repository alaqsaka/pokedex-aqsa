import React from "react";

let pokemonColor: any = {
  normal: "bg-yellow-300",
  fire: "bg-red-400",
  water: "bg-blue-300",
  grass: "bg-green-400",
  electric: "bg-yellow-500",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-300",
  psychic: "bg-pink-400",
  bug: "bg-green-500",
  rock: "bg-yellow-600",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-800",
  dark: "bg-gray-800",
  steel: "bg-gray-400",
  fairy: "bg-pink-200",
};

interface BaseStatsProps {
  data: any;
}

const BaseStats: React.FC<BaseStatsProps> = ({ data }) => {
  let pokemonTypes: any = data.types;
  let color = pokemonColor[data.types[0].type.name];

  return (
    <div>
      <div>
        {data.stats.map((stat: any, index: number) => (
          <div className="mt-3" key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
              <div className="flex md:justify-between">
                {" "}
                <p className="capitalize mr-2 text-gray-300 font-bold">
                  {stat.stat.name}
                </p>
                <p className="capitalize">{stat.base_stat}</p>
              </div>
              <progress
                className="progress progress-primary w-full"
                value={stat.base_stat}
                max="100"
              ></progress>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseStats;
