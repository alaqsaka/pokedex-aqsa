import Container from "@/components/container";

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

  console.log(pokemons);

  return (
    <main>
      <Container>
        <p className="text-2xl font-bold">Pokedex</p>
        {pokemons.map((pokemon) => (
          <p key={pokemon.name}>{pokemon.name}</p>
        ))}
      </Container>
    </main>
  );
}
