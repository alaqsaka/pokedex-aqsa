import React from "react";
import Image from "next/image";
import { pokemonColor } from "../lib/colors";

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
