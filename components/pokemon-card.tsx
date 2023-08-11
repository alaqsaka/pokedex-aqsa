import React from "react";

interface PokemonCardProps {
  data: any;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  console.log(data.types);
  let pokemonTypes = data.types;

  return (
    <div className="bg-emerald-100 p-2 rounded-md">
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
  );
};

export default PokemonCard;
