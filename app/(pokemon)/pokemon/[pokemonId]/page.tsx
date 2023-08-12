import Container from "@/components/container";
import React from "react";

const PokemonPage = async ({ params }: { params: { pokemonId: number } }) => {
  return (
    <Container>
      <p className="text-2xl font-bold">Pokedex</p>
      {params.pokemonId}
    </Container>
  );
};

export default PokemonPage;
