import React from "react";
import Image from "next/image";

interface EvolutionProps {
  evolutionData: any;
  data: any;
}

const Evolution: React.FC<EvolutionProps> = ({ evolutionData, data }) => {
  console.log("data ", data);

  console.log(evolutionData);

  const getIdPokemon = (url: string) => {
    let urlString = url;
    if (typeof url === "string") {
      urlString = urlString.slice(0, -1);
      urlString = urlString.substring(42);
    }

    console.log("url string ", urlString);
    return urlString;
  };

  return (
    <div>
      <p className="font-semibold capitalize">{data.species.name}</p>
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
      {evolutionData?.chain?.evolves_to?.map((item: any) => (
        <div key={item.species.name}>
          <p className="font-semibold capitalize">{item.species.name}</p>
          <div className="mt-4">
            <div className="flex items-center mx-auto justify-center">
              <Image
                width={200}
                height={200}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getIdPokemon(
                  item?.species?.url
                )}.svg`}
                alt="Pokemon"
                className="object-contain h-auto max-h-200"
              />
            </div>
          </div>
          {item?.evolves_to?.map((pokemon: any) => (
            <div key={pokemon.species.name}>
              <p className="font-semibold capitalize">{pokemon.species.name}</p>
              <div className="mt-4">
                <div className="flex items-center mx-auto justify-center">
                  <Image
                    width={200}
                    height={200}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getIdPokemon(
                      pokemon?.species?.url
                    )}.svg`}
                    alt="Pokemon"
                    className="object-contain h-auto max-h-200"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Evolution;
