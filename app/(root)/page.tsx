import Container from "@/components/container";
import PokemonCard from "@/components/pokemon-card";

async function getData() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPokemonDetail(results: any) {
  let responses = [];

  for (let index = 0; index < results.length; index++) {
    let url = results[index].url;
    const res = await fetch(`${url}`);

    let resData = await res.json();
    responses.push(resData);
  }

  return responses;
}

export default async function Home() {
  const { results } = await getData();

  const pokemons = await getPokemonDetail(results);

  return (
    <main>
      <Container>
        <p className="text-2xl font-bold">Pokedex</p>
        <div className="h-[86vh] mt-5">
          <div className="grid grid-cols-2 gap-3">
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} data={pokemon} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
