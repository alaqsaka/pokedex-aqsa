import React from "react";
import Image from "next/image";
// import { pokemonColor } from "../lib/colors";

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

interface PokemonCardProps {
  data: any;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  let pokemonTypes: any = data.types;

  let color = pokemonColor[pokemonTypes[0].type.name];

  return (
    <div className={`${color}  p-2 rounded-md`}>
      <div className="flex justify-between">
        <div>
          <p className="capitalize font-semibold mb-3">{data.name}</p>
          {pokemonTypes.map((item: any) => (
            <div
              key={item.type.name}
              className="bg-slate-50 p-2 px-4 w-fit mb-2 rounded-2xl text-xs"
            >
              {item.type.name}
            </div>
          ))}
        </div>
        <Image
          width={80}
          // fill
          height={80}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          alt="Pokemon"
          className="object-contain h-auto min-w-200 min-h-200 max-h-200"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
