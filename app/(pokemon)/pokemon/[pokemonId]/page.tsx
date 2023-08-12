import Container from "@/components/container";
import React from "react";
import Image from "next/image";
import Detail from "./components/detail";

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

async function getPokemonDetail(id: number) {
  const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`, {});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PokemonPage = async ({ params }: { params: { pokemonId: number } }) => {
  const data = await getPokemonDetail(params.pokemonId);

  let pokemonTypes: any = data.types;
  let color = pokemonColor[data.types[0].type.name];

  return (
    <>
      <div className={`max-w-md mx-auto ${color}`}>
        <div className={`${color} p-4`}>
          <p className="text-2xl font-bold text-white capitalize">
            {data.name}
          </p>
          <p className="text-right text-white font-bold text-lg">
            # {params.pokemonId}
          </p>
          <div className="flex gap-2">
            {pokemonTypes.map((item: any) => (
              <div
                key={item.type.name}
                className="bg-slate-50 capitalize p-2 px-4 w-fit mb-2 rounded-2xl text-xs"
              >
                {item.type.name}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex items-center mx-auto justify-center">
              <Image
                width={200}
                height={200}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt="Pokemon"
                className="object-contain h-auto max-h-200"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-t-3xl p-2 mt-3">
          <Detail data={data} />
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
